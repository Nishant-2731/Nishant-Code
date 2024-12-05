const express = require("express");
const app = express();
const path = require("path");
const users = require("./routes/user.js")
const posts = require("./routes/post.js")
const session = require("express-session")
const flash = require("connect-flash")

const sessionOptions = {
    secret: "express-secret",
    resave: false,
    saveUninitialized: true,
}

app.use(session(sessionOptions))
app.use(flash());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next)=>
{
    res.locals.errorMsg = req.flash("error")
    res.locals.successMsg = req.flash("success")
    next();
})

app.get("/register", (req, res)=>
{
    let { name="anonymous" } = req.query;
    req.session.name = name;
    // console.log(req.session)

    if(name === "anonymous")
    {
        req.flash("error", "user not registered")
    }
    else
    {
        req.flash("success", "user registered successfully")
    }
    res.redirect("/hello"); 
})

app.get("/hello", (req, res)=>
{
    // console.log(req.flash("success"))
    res.render("page.ejs", {name: req.session.name})
})

app.listen(3000, ()=>
{
    console.log("Server is listening to 3000");
});

// app.get("/reqcount", (req, res)=>
// {
//     if(req.session.count)
//     {
//         req.session.count++;
//     }
//     else
//     {
//         req.session.count = 1;
//     }
//     res.send(`You sen a request ${req.session.count} times`)
// });

// app.get("/test", (req, res)=>
// {
//     res.send("Test Successful");
// })





// app.get("/getsignedcookie", (req, res)=>
// {
//     res.cookie("madeIn", "India", {signed: true});
//     res.send("Signed cookie sent")
// });

// app.get("/greet", (req, res)=>
// {
//     let {name="anonymous"} = req.cookies;
//     res.send(`Hi, ${name}`)
// })

// app.get("/verify", (req, res)=>
// {
//     console.log(req.cookies);
//     res.send("Verified")
// });

// app.get("/", (req, res)=>
// {
//     console.dir(req.cookies)
//     res.send("Root Route");
// })

// app.get("/getcookies", (req, res)=>
// {
//     res.cookie("Greet", "Hello");
//     res.cookie("madeIn", "India");
//     res.send("Sending some Cookies");
// });

// app.use("/users", users);

// app.use("/posts", posts);