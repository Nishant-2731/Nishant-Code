const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Listing = require("./models/Listing.js");
const ejsMate = require("ejs-mate");
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
    res.render("listings/index.ejs", {allListings})
});

// New Route

app.get("/listings/new", async (req, res)=>
{
    res.render("listings/new.ejs")
});

// Create Route

app.post("/listings", async (req, res)=>
{
    // New Efficient Method for requesting data from body
    try
    {
        const newListing = new Listing(req.body.listing);
        console.log(newListing);
        await newListing.save()
        res.redirect("/listings");
    }
    catch(err)
    {
        res.render("listings/failure.ejs");
    }
});

// Edit Route

app.get("/listings/:id/edit", async (req, res)=>
{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing })
})

// Update Route

app.put("/listings/:id", async (req, res)=>
{
    try
    {
        let {id} = req.params;
        await Listing.findByIdAndUpdate(id, { ...req.body.listing }, {new: true, runValidators: true})
        res.redirect(`/listings/${id}`)
    }
    catch(err)
    {
        res.render("listings/failure.ejs");
    }
});

// Destroy Route

app.delete("/listings/:id", async (req, res)=>
{
    try
    {
        let {id} = req.params;
        let deletedListing = await Listing.findByIdAndDelete(id);
        console.log(deletedListing)
        res.redirect("/listings")
        
    }
    catch(err)
    {
        console.log(err);
        res.render("failure.ejs")
    };
});

// Show Route

app.get("/listings/:id", async (req, res)=>
{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing })
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