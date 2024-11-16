const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");

const listings = require("./routes/listing.js")
const reviews = require("./routes/review.js")

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

app.use("/listings", listings);

app.use("/listings/:id/reviews", reviews)

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