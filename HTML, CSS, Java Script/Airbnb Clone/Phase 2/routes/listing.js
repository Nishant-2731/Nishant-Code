const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/Listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js")

// Index Route

router.get("/", async (req, res)=>
{
    let allListings = await Listing.find({})
    res.render("listings/index.ejs", { allListings })
});

// New Route

router.get("/new", isLoggedIn, async (req, res)=>
{
    res.render("listings/new.ejs")
});

// Create Route - Listing

router.post("/", validateListing, isLoggedIn, wrapAsync(async (req, res, next)=>
{
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New Listing Created!")
    res.redirect("/listings");
}));

// Edit Route

router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(async (req, res, next)=>
{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing)
    {
        req.flash("error", "Listing you requested for does not exist")
        res.redirect("/listings")
    }
    res.render("listings/edit.ejs", { listing })
}));

// Update Route

router.put("/:id", isLoggedIn, isOwner, validateListing, wrapAsync(async (req, res, next)=>
{
    let {id} = req.params;

    await Listing.findByIdAndUpdate(id, { ...req.body.listing }, {new: true, runValidators: true})

    req.flash("success", "Listing Updated")
    res.redirect(`/listings/${id}`);    
}));

// Destroy Route - Listing

router.delete("/:id", isLoggedIn, isOwner, wrapAsync(async (req, res, next)=>
{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing)
    req.flash("success", "Listing Deleted")
    res.redirect("/listings")
}));

// Show Route

router.get("/:id", wrapAsync(async (req, res, next)=>
{
    let {id} = req.params;
    // Nested populate
    const listing = await Listing.findById(id)
    .populate({
        path: "reviews", 
        populate: {
            path: "author",
        }
    })
    .populate("owner");
    console.log(listing)
    if(!listing)
    {
        req.flash("error", "Listing you requested for does not exist")
        res.redirect("/listings")
    }
    res.render("listings/show.ejs", { listing })
}));

module.exports = router;