const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError")

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
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");    
}

// Root Route

app.get("/", (req, res)=>
{
    res.send("Working: Root");
});

// New Route

app.get("/chats/new", (req, res)=>
{
    // throw new ExpressError(404, "Page not found");
    res.render("new.ejs")
});

// asyncWrap is used for making the bulky try and catch shorter

function asyncWrap(fn)
{
    return function(req, res, next) {
        fn(req, res, next).catch((err)=>next(err));
    }
}

// New - Show Route for error Async error handling

app.get("/chats/:id", asyncWrap(async (req, res, next)=>
{
    let { id } = req.params;
    // Chat gpt solution for invalid id
    // if (!mongoose.isValidObjectId(id))
    // {
    //     next(new ExpressError(404, "Invalid Chat ID format"));
    // }
    let chat = await Chat.findById(id);
    if(!chat)
    {
        // In async functions throw doesn't automatically call next and move on with execution of unexpected error occur
        // throw new ExpressError(404, "Page not found");
        //Solution
        next(new ExpressError(404, "Chat not found"));
    }
    res.render("edit.ejs", { chat });
}));

// Index Route

app.get("/chats", asyncWrap(async (req, res, next)=>
{
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
}));

// Create Route

app.post("/chats", asyncWrap(async (req, res, next)=>
{
    let {from, to, msg} = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });
    await newChat.save()
    res.redirect("/chats");
}));

// Edit Route

app.get("/chats/:id/edit", asyncWrap(async (req, res, next)=>
{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
}));

// Update Route

app.put("/chats/:id", asyncWrap(async (req, res, next)=>
{
    let {id} = req.params;
    let {msg: newMsg} = req.body
    await Chat.findByIdAndUpdate(id, {msg: newMsg}, {new: true, runValidators: true});
    res.redirect("/chats");
}));

// Destroy Route

app.delete("/chats/:id", asyncWrap(async (req, res, next)=>
{
    let {id} = req.params;
    await Chat.findByIdAndDelete(id)
    res.redirect("/chats");
}));

const handleValidationErr = (err)=>
{
    console.log("This was a Validation error. Please follow rules");
    console.dir(err.message)
    return err;
}

// Error Handling Middleware - Mongoose

app.use((err, req, res, next)=>
{
    console.log(err.name);
    if(err.name === "ValidationError")
    {
        err = handleValidationErr(err);
    }
    next(err);
})

// Error Handling Middleware

app.use((err, req, res, next)=>
{
    let { status = 500, message = "Some error occurred" } = err;
    res.status(status).send(message);
});

// app.use((req, res, next)=>
// {
//     next(new ExpressError(404, "Page not found"));
// });
 
app.listen(8080, ()=>console.log("Server is Listening on Port: 8080"))