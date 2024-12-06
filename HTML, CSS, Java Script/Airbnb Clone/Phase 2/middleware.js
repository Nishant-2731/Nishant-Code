const Listing = require("./models/Listing")
const Review = require("./models/Review")
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema, reviewSchema} = require("./schema.js");

// This middleware is used to check whether the user is logged in or not
module.exports.isLoggedIn = (req, res, next)=>
{
    // This stores the redirectUrl in session if not logged in.
    if(!req.isAuthenticated())
    {
        req.session.redirectUrl = req.originalUrl
        req.flash("error", "You must be logged in to do this")
        return res.redirect("/login")
    }
    next();
}

// This middleware is used to store redirectUrl is the URL the user was trying is reach but could not because not logged in
module.exports.saveRedirectUrl = (req, res, next)=>
{
    if(req.session.redirectUrl)
    {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

// This middleware is used to check whether the user logged in is the owner of the listing
module.exports.isOwner = async (req, res, next)=>
{
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id))
    {
        req.flash("error", "You are not the owner of this listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

// This middleware is used to check whether the user logged in is the author of the review
module.exports.isReviewAuthor = async (req, res, next)=>
{
    let { id, reviewId } = req.params;
    let review = await Review.findById(reviewId).populate("author");
    if(!review.author._id.equals(res.locals.currUser._id))
    {
        req.flash("error", "You are not the author of this review");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

// Validate Listing
module.exports.validateListing = (req, res, next)=>
{
    let {error} = listingSchema.validate(req.body);
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

// Validate Review
module.exports.validateReview = (req, res, next)=>
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