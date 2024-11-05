const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride("_method"))

app.use(express.static(path.join(__dirname, "public")));

main()
.then(()=>
{
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() 
{
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");    
}

app.get("/", (req, res)=>
{
    res.send("Working: Root");
});

// Index Route

app.get("/chats", async (req, res)=>
{
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", { chats });
});

// New Route

app.get("/chats/new", (req, res)=>
{
    res.render("new.ejs")
});

// Create Route

app.post("/chats", (req, res)=>
{
    let {from, to, msg} = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });
    // console.log(newChat);
    newChat.save()
    .then(()=>res.redirect("/chats"))
    .catch((err)=>res.render("failure.ejs"));
});

// Edit Route

app.get("/chats/:id/edit", async (req, res)=>
{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat })
})

// Update Route

app.put("/chats/:id", (req, res)=>
{
    let {id} = req.params;
    let {msg: newMsg} = req.body
    Chat.findByIdAndUpdate(id, {msg: newMsg}, {new: true, runValidators: true})
    .then(()=>res.redirect("/chats"))
    .catch((err)=>res.render("failure.ejs"));

    // let chat = await Chat.findById(id);
});

// Destroy Route

app.delete("/chats/:id", async (req, res)=>
{
    let {id} = req.params;
    
    // let delChat = await Chat.findByIdAndDelete(id);
    // console.log(delChat);
    // res.redirect("/chats")
    
    Chat.findByIdAndDelete(id)
    .then((result)=>
    {
        console.log(result)
        res.redirect("/chats")
    })
    .catch((err)=>
    {
        res.render("failure.ejs")
    });
});
 
app.listen(8080, ()=>console.log("Server is Listening on Port: 8080"))