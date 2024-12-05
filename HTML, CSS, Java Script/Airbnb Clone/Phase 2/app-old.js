const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
// This is used for overriding methods and applying our own method to a form
const methodOverride = require("method-override");
const Listing = require("./models/Listing.js");
const Review = require("./models/Review.js");
// This method is used to pass header, footer, boilerplate common code templates for use in multiple files
const ejsMate = require("ejs-mate");
// This is used to add catch and next() to every route
const wrapAsync = require("./utils/wrapAsync.js"); 
// This is used for error handling
const ExpressError = require("./utils/ExpressError.js");
// This requiring schema.js which has JOI package which validates listing
const {listingSchema} = require("./schema.js");

// const { title } = require("process");

app.set("view engine", "ejs");
// This is used to set path for views
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride("_method"))

// This is used to set path for public
app.use(express.static(path.join(__dirname, "public/")));

app.engine("ejs", ejsMate);

main()
.then(()=>
{
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() 
{
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");    
}

const validateListing = (req, res, next)=>
{
    // Here we call listingSchema which in turn validates req.body which is a listing and throws error if any.
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

app.get("/", (req, res)=>
{
    res.send("Root Route")
})

// Index Route

app.get("/listings", async (req, res)=>
{
    let allListings = await Listing.find({})
    res.render("listings/index.ejs", { allListings })
});

// New Route

app.get("/listings/new", async (req, res)=>
{
    res.render("listings/new.ejs")
});

// Create Route - Listing

app.post("/listings", validateListing, wrapAsync(async (req, res, next)=>
{
    const newListing = new Listing(req.body.listing);
    // console.log(newListing);
    await newListing.save();
    res.redirect("/listings");
}));

// Create Route - Review

app.post("/listings/:id/reviews", wrapAsync(async (req, res, next)=>
{
    let {id} = req.params;
    let listing = await Listing.findById(id)
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);

    await listing.save();
    await newReview.save();

    res.redirect(`/listings/${listing._id}`);
}));


// Edit Route

app.get("/listings/:id/edit", wrapAsync(async (req, res, next)=>
{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing })
}));

// Update Route

app.put("/listings/:id", validateListing, wrapAsync(async (req, res, next)=>
{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing }, {new: true, runValidators: true})
    res.redirect(`/listings/${id}`);    
}));

// Destroy Route

app.delete("/listings/:id", wrapAsync(async (req, res, next)=>
{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing)
    res.redirect("/listings")
}));

// Show Route

app.get("/listings/:id", wrapAsync(async (req, res, next)=>
{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing })
}));

// Error Handler

// Page not found error

app.all("*", (req, res, next)=>
{
    next(new ExpressError(404, "Page Not Found!"));
})

// Default Error

app.use((err, req, res, next)=>
{
    let {statusCode=500, message="Some unexpected error occurred"} = err;
    res.status(statusCode).render("error.ejs", {message});
    // res.status(statusCode).send(message);
});

app.listen(8080, ()=>console.log("Server is Listening on Port: 8080"));