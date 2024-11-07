const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// Authentication Middleware

const checkToken = (req, res, next)=>
{
    let { token } = req.query;
    if(token === "giveaccess")
    {
        next();
    }
    throw new ExpressError(401, "ACCESS DENIED");
};

// Authentication Route

app.get("/api", checkToken, (req, res)=>
{
    res.send("data");
});

app.use("/random", (req, res, next)=>
{
    console.log("Only for Random Route");
    next();
});

app.get("/", (req, res)=>
{
    res.send("Hi, I am root page");    
});

app.get("/random", (req, res)=>
{
    res.send("This is a random page");    
});

app.get("/err", (req, res)=>
{
    abcd = abcd;
});

// Route for throwing 403 Error for handling

app.get("/admin", (req, res)=>
{
    throw new ExpressError(403, "Access to Admin is Forbidden")   
});

// Error Handling Middleware

// Some the error can arise from the error handler itself when unexpected error occur and there is no value for status and message. So, we set some default values to them.

app.use((err, req, res, next)=>
{
    let { status = 500, message = "Some Unxepected Error Occurred" } = err;
    res.status(status).send(message);
});

// app.use((err, req, res, next)=>
// {
//     console.log("-------- ERROR2 ---------");
//     // This next(err) searches for next error handling middleware and executes it
//     next(err);
//     // This next() searches for next non-error handling middleware and executes it 
//     next();
// });

// Middleware for Error 404 - Page not found

app.use((req, res)=>
{
    res.send("Page not found")
});

app.listen("8080", ()=>
{
    console.log("Server Listening to Port : 8080")
});