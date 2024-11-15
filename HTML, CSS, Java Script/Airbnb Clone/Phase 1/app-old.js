const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Listing = require("./models/Listing.js");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema} = require("./schema.js");

// const { title } = require("process");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride("_method"))

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

// Create Route

app.post("/listings", wrapAsync(async (req, res, next)=>
{
    // New Efficient Method for requesting data from body. More details in new.ejs how to store details in listing object

    // Old Method for checking if listing was even sent
    // if(!req.body.listing)
    // {
    //     throw new ExpressError(400, "Send valid data for listing")
    // }

    let result = listingSchema.validate(req.body);
    if(result.error)
    {
        throw new ExpressError(400, result.error)
    }
    console.log(result);
    const newListing = new Listing(req.body.listing);
    // console.log(newListing);
    await newListing.save();
    res.redirect("/listings");
}));

// Edit Route

app.get("/listings/:id/edit", wrapAsync(async (req, res, next)=>
{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing })
}));

// Update Route

app.put("/listings/:id", wrapAsync(async (req, res, next)=>
{
    // Old Method for checking if listing was even sent
    // if(!req.body.listing)
    // {
    //     throw new ExpressError(400, "Send valid data for listing")
    // }

    let result = listingSchema.validate(req.body);
    console.log(result);
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

// Old Method for Requesting data from body
// let {title, description, image, price, country, location} = req.body; 
// let newListing = new Listing({
//     title: title,
//     description: description,
//     image: {
//         url :image
//     },
//     price: price,
//     location: location,
//     country: country
// });

// Test Route

// app.get("/testListing", async (req, res)=>
// {
//     let sampleListing = new Listing({
//         title: "My New Villa",
//         description: "By the beach",
//         // image: ,
//         price: 1200,
//         location: "Calangute, Goa",
//         country: "India"
//     })
//     await sampleListing.save();
//     console.log("Sample was saved");
//     res.send("Test Successful")
// })