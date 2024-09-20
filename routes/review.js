const express = require("express");
const router = express.Router({mergeParams : true}); // jo id use kr rhe hai wo app.js mein rh jati hai to use use krene ke liye use krna pdtahai.
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const { listingSchema, reviewSchema } = require("../schema");
const Listing = require("../models/listing");
const Review = require("../models/review");
const { isLoggedin  , isReviewAuthor} = require("../middleware");
const  reviewController = require("../controllers/reviews");


const validatereview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

//Reviews
router.post(
  "/",
  isLoggedin,
  validatereview,
  wrapAsync(reviewController.createReview)
);

router.delete(
  "/:reviewId",
  isLoggedin,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
