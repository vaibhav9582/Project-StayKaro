const Review = require("./models/review");

module.exports.isLoggedin = (req ,res ,next)=>{
    if (!req.isAuthenticated()) {
        req.flash("error" , "Must Login First");
        return res.redirect("/login");
    }
    next();
}

module.exports.isReviewAuthor = async(req , res ,next)=>{
    let {id,reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author.equals(res.locals.logined_user._id)){
        req.flash("error" , "You are not author of this listing");
        return res.redirect(`/listings/${id}`);
    }
    next()
}
 