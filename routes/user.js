const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");
const wrapAsync = require("../utils/wrapAsync");
const userController = require("../controllers/users");

router.get('/signup' , userController.renderSignupForm)

router.post("/signup" , wrapAsync(userController.signup))

router.get("/login" , userController.renderLoginForm)

router.post("/login" ,passport.authenticate("local" ,{
    failureRedirect : '/login',
    failureFlash : true
} ) , userController.login)

router.get("/logout" , userController.logout)


module.exports = router;