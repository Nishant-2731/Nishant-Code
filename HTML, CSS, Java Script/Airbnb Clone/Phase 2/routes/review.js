const express = require("express");
// Normally without mergeParams the :id in ap.js stays there and is not send to review.js properly. But with the help of mergeParams it is done properly
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");
const Review = require("../models/Review.js");
const Listing = require("../models/Listing.js");

const validateReview = (req, res, next)=>
{
    let {error} = reviewSchema.validate(req.body);
    if(error)
    {
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    else
    {
        next();
    }
}

// Create Route - Review

router.post("/", validateReview, wrapAsync(async (req, res, next)=>
{
    let {id} = req.params;
    let listing = await Listing.findById(id)
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);

    await listing.save();
    await newReview.save();

    res.redirect(`/listings/${listing._id}`);
}));

// Destroy Route - Review

router.delete("/:reviewId", wrapAsync(async (req, res, next)=>
{
    let {id, reviewId} = req.params;

    // $pull operator is used remove a specific object's item 
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}})
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`)
}));

module.exports = router;