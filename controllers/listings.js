const Listing = require("../models/listing");


module.exports.index = async (req, res) => {
    const alllistings = await Listing.find({});
    res.render("./listings/index.ejs", { alllistings });
}

module.exports.renderNewForm = (req, res) => {
    //   if (!req.isAuthenticated()) {
    //     req.flash("error" , "Must Login First");
    //     res.redirect("/login");
    // }
    res.render("./listings/new.ejs");
  }


  module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
      .populate({
        path: "reviews",
        populate: {
          path: "author",
        },
      })
      .populate("owner");
    // if (!listing) {
    //   req.flash("error" , "Listing is not Exist");
    //   res.redirect("/listings")
    // }
    // now we can make middleware
    res.render("./listings/show.ejs", { listing });
  }

  module.exports.createListing = async (req, res, next) => {
    // let {title , decription , image , price , location , country} = req.body;
    // We make object key value pair.
    // if (!req.body.li sting) {
    //     throw new ExpressError(400 , "Send Valid data for listing Please..");
    // }

    // after using Joi ***************************
    // let result = listingSchema.validate(req.body);
    // if (result.error) {
    //   throw new ExpressError(400 , result.error);
    // }
    //*************************************/
    const newListing = new Listing(req.body.listing);
    let url = req.file.path;
    let filename = req.file.filename;

    newListing.owner = req.user._id;
    newListing.image = {url , filename};
    await newListing.save();
    req.flash("success", "Listing Added Successfuly!");
    res.redirect("/listings");
  }

  module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing is not Exist");
      res.redirect("/listings");
    }
    res.render("./listings/edit.ejs", { listing});
  }

  module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if (typeof req.file !== "undefined") {
      let url = req.file.path;
      let filename = req.file.filename;
      listing.image = {url , filename};
      await listing.save();
    }

    req.flash("success", "Listing Updated Successfuly!");
    res.redirect(`/listings/${id}`);
  }

  module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted Successfuly!");
    res.redirect("/listings");
  }
