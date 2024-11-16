const express = require("express");
const app = express();
const users = require("./routes/user.js")
const posts = require("./routes/post.js")
const cookieParser = require("cookie-parser");

app.use(cookieParser("secretcode"));

app.get("/getsignedcookie", (req, res)=>
{
    res.cookie("madeIn", "India", {signed: true});
    res.send("Signed cookie sent")
});

app.get("/greet", (req, res)=>
{
    let {name="anonymous"} = req.cookies;
    res.send(`Hi, ${name}`)
})

app.get("/verify", (req, res)=>
{
    console.log(req.cookies);
    res.send("Verified")
});

app.get("/", (req, res)=>
{
    console.dir(req.cookies)
    res.send("Root Route");
})

app.get("/getcookies", (req, res)=>
{
    res.cookie("Greet", "Hello");
    res.cookie("madeIn", "India");
    res.send("Sending some Cookies");
});

app.use("/users", users);

app.use("/posts", posts);

app.listen(3000, ()=>
{
    console.log("Server is listening to 3000");
});