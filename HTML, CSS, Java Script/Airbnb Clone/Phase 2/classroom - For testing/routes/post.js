const express = require("express");
const router = express.Router();

// Post Routes

// Index Route

router.get("/", (req, res)=>
{
    res.send("Get for posts");
});

// Show Route

router.get("/:id", (req, res)=>
{
    res.send("Get for post id");
});

// Post Route

router.post("/", (req, res)=>
{
    res.send("Post for posts");
});

// Delete Route

router.delete("/:id", (req, res)=>
{
    res.send("Delete for post id");
});

module.exports = router;