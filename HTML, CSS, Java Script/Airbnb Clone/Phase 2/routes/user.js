const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const User = require("../models/User.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

// SignUp Form - Route

router.get("/signup", (req, res)=>
{
    res.render("users/signup.ejs");
});

// SignUp - Route

router.post("/signup", wrapAsync(async (req, res, next)=>
{
    try
    {
        // This logs in the user when they sign up for convenience
        let {username, email, password} = req.body;
        const newUser = new User ({email, username});
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err)=>
        {
            if(err)
            {
                return next(err);
            }
            req.flash("success", "Welcome to Wanderlust");
            res.redirect("/listings");
        })
    }
    catch(err)
    {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
}));

// Login Form - Route

router.get("/login", async (req, res, next)=>
{
    res.render("users/login.ejs")
})

// Login - Route

router.post("/login", saveRedirectUrl, passport.authenticate("local", {failureRedirect: "/login", failureFlash: true}), wrapAsync(async (req, res, next)=>
{
    req.flash("success", "Welcome Back to Wanderlust, You are logged in!")
    let redirectUrl = res.locals.redirectUrl || "/listings"
    // Redirects to the page requiring user to log in which the user was trying to reach after log in
    res.redirect(redirectUrl)
}))

// Logout - Route

router.get("/logout", (req, res)=>
{
    req.logout((err)=>
    {
        if(err)
        {
            return next(err);
        }
        req.flash("success", "You are logged out!")
        res.redirect("/listings")
    })
})

module.exports  = router;