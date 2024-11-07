const express = require("express");
const app = express();

// Middleware

// app.use((req, res, next)=>
// {
//     console.log("Hi, I am first middleware");
//     return next();
// })

// app.use((req, res, next)=>
// {
//     console.log("Hi, I am second middleware");
//     return next();
// })

// Logger Middleware - Morgan is npm package which this exact thing
// app.use((req, res, next)=>
// {
//     // req.time = Date.now();
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method);
//     console.log(req.hostname);
//     console.log(req.path);
//     console.log(req.time);
//     next();
// });

// Authentication Middleware

// app.use("/api", (req, res, next)=>
// {
//     let { token } = req.query;
//     if(token === "giveaccess")
//     {
//         next();
//     }
//     res.send("ACCESS DENIED");
// });

// Authentication Route

// app.get("/api", (req, res)=>
// {
//     res.send("data");
// });

// app.use("/random", (req, res, next)=>
// {
//     console.log("Only for Random Route");
//     next();
// });

// Authentication Middleware

const checkToken = (req, res, next)=>
{
    let { token } = req.query;
    if(token === "giveaccess")
    {
        next();
    }
    throw new Error("ACCESS DENIED");
};

// Authentication Route

app.get("/api", checkToken, (req, res)=>
{
    res.send("data");
});

// app.get("/wrong", (req, res)=>
// {
//     abcd =abcd;
// });

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

// Middleware for Error 404 - Page not found

app.use((req, res)=>
{
    res.send("Page not found")
});

app.listen("8080", ()=>
{
    console.log("Server Listening to Port : 8080")
});