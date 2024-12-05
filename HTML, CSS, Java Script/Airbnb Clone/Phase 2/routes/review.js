const express = require("express");
// Normally without mergeParams the :id in ap.js stays there and is not send to review.js properly. But with the help of mergeParams it is done properly
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/Review.js");
const Listing = require("../models/Listing.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js")

// Create Route - Review

router.post("/", isLoggedIn, validateReview, wrapAsync(async (req, res, next)=>
{
    let {id} = req.params;
    let listing = await Listing.findById(id)
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;

    listing.reviews.push(newReview);

    await listing.save();
    await newReview.save();

    req.flash("success", "New Review Created")
    res.redirect(`/listings/${listing._id}`);
}));

// Destroy Route - Review

router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(async (req, res, next)=>
{
    let {id, reviewId} = req.params;

    // $pull operator is used remove a specific object's item 
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}})
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review Deleted")
    res.redirect(`/listings/${id}`)
}));

module.exports = router;