const express = require("express");
const app = express();
const path = require("path");

const port = 8080;


app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));

app.listen(port,()=>
    {
        console.log(`Listening on port: ${port}`);
    });

app.get("/",(req,res)=>
{
    res.render("home.ejs");
});

app.get("/ig/:username", (req,res)=>
{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    if(data)
    {
        res.render("instagram.ejs",{ data });        
    }
    else
    {
        res.render("error.ejs");
    }
});

app.get("/rolldice",(req,res)=>
{
    let dice = Math.floor(Math.random()*6)+1;
    // res.render("rolldice.ejs",{ num: dice });
    res.render("rolldice.ejs",{ dice }); //Key and Value can be set same
});