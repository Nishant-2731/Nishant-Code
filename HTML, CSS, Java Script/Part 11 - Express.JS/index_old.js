const express = require("express");
const app = express();

// console.dir(app);

let port = 3000;

app.listen(port,()=>
{
    console.log(`App is listening on port ${port}`);;
});

app.get("/",(req,res)=>
{
    res.send("Root Path: Hello World");
});

app.get("/apple",(req,res)=>
{
    res.send("Apple Path");
});

app.get("/banana",(req,res)=>
{
    res.send("Banana Path");
});

app.get("*",(req,res)=>
{
    res.send("This path does not exist");
});

app.post("/",(req,res)=>
{
    res.send("Post Request");
});

// app.use((req, res) =>
// {
//     console.log("Request Recieved");

//     // String Response
//     // res.send("This is a basic response"); 

//     // Object Response
//     // res.send(
//     //     {
//     //         name: "Apple",
//     //         color: "Red"
//     //     }
//     // );

//     //HTML Response
//     let code = "<h1>Fruits</h1> <ul> <li>Apple</li> <li>Banana</li> </ul>";
//     res.send(code);
// });