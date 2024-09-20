const User = require("../models/user");

module.exports.signup = async(req ,res)=>{
    let {email , username , password} = req.body;
    let newUser = new User({email , username })
    let registerUser = await User.register(newUser , password);
    req.login(registerUser , (err)=>{
        if (err) {
            next(err);
        }
        req.flash("success" , "Login Successfuly!");
        res.redirect("/listings");
    }) 
}

module.exports.renderSignupForm = (req,res)=>{
    res.render("./users/signup.ejs");
}

module.exports.renderLoginForm = (req,res)=>{
    res.render("./users/login.ejs");
}

module.exports.login = async(req ,res)=>{
    res.redirect("/listings");
}

module.exports.logout = (req , res ,next)=>{
    req.logout((err)=>{
        if (err) {
            next(err);
        }
        req.flash("success" , "Logout Successfuly!");
        res.redirect("/listings");
    })
}