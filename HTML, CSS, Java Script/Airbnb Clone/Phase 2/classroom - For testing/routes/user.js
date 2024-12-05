const express = require("express");
const router = express.Router();

// User Routes

// Index Route

router.get("/", (req, res)=>
{
    res.send("Get for users");
});

// Show Route

router.get("/:id", (req, res)=>
{
    res.send("Get for users id");
});

// Post Route

router.post("/", (req, res)=>
{
    res.send("Post for users");
});

// Delete Route

router.delete("/:id", (req, res)=>
{
    res.send("Delete for users id");
});

module.exports = router;