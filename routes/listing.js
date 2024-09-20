const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const { listingSchema, reviewSchema } = require("../schema");
const Listing = require("../models/listing");
const { isLoggedin } = require("../middleware");
const listingController = require("../controllers/listings");
// const {index} = require("../controllers/listings") Above also corect
// const multer  = require('multer');
// const {storage} = require("../cloudConfig.js");
// const upload = multer({ dest: 'uploads/' });
// const upload = multer({ storage});



const validatelisting = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

router.get("/", wrapAsync(listingController.index));

// New Route
router.get(
  "/new",
  isLoggedin,
  listingController.renderNewForm
  //   if (!req.isAuthenticated()) {
  //     req.flash("error" , "Must Login First");
  //     res.redirect("/login");
  // }
);

// Show Route
router.get("/:id", wrapAsync(listingController.showListing));

// Create Route
router.post(
  "/" ,
  isLoggedin,
  validatelisting,
  wrapAsync(listingController.createListing)
);  

// this is for practice only above code is important.
// router.post("/" , upload.single("listing[image]") , (req , res )=>{
//     res.send(req.file);
// })

//Edit Route
router.get(
  "/:id/edit",
  isLoggedin,
  wrapAsync(listingController.renderEditForm)
);

// Update Route
router.put(
  "/:id",
  isLoggedin,
  validatelisting,
  wrapAsync(listingController.updateListing)
);

//Delete Route
router.delete("/:id", isLoggedin, wrapAsync(listingController.destroyListing));

module.exports = router;
