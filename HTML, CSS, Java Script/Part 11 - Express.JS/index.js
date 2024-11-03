const express = require("express");
const app = express();

let port = 3000;

app.listen(port,()=>
{
    console.log(`App is listening on port ${port}`);;
});

app.get("/:username/:id",(req,res)=>
{
    // console.log(req.params);
    let {username,id} = req.params
    let code = `<h1>Welcome to the page of @${username}#${id}</h1>`
    res.send(code);
});

app.get("/search", (req, res) =>
{
    // console.log(req.query);
    let {q} = req.query;
    if(!q)
    {
        res.send("<h1> Nothing was searched </h1>");
    }
    res.send(`<h1> Search Results for query: ${q} </h1>`)
});