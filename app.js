if(process.env.NODE_ENV != "production"){
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
// const {listingSchema , reviewSchema} = require('./schema');
// const Review = require("./models/review");
const session = require("express-session");
const MongoStore = require('connect-mongo'); // Store session related info in mongodb
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

const listingRouter = require("./routes/listing");
const reviewRouter = require("./routes/review");
const userRouter = require("./routes/user")


// const MONGO_URL = "mongodb://127.0.0.1:27017/StayKaro";

const db_url = process.env.DB_URL;


main()
  .then(() => {
    console.log("Successfully Connected....");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(db_url);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


const store = MongoStore.create({
  mongoUrl : db_url,
  crypto : {
    secret : process.env.SECRET
  },
  touchAfter : 24 * 3600 // store session this is valid for 24 hr store the info of the session after this will updated
})

store.on("error" , ()=>{
  console.log("errror" , err);
})

const sessionOption = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};



app.use(session(sessionOption));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));


// It store the current session realted information until the user login.
passport.serializeUser(User.serializeUser());
// It is opposite of the serializeUser it deletes the session data when user logout the account
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.logined_user = req.user;
  next();
});




app.get("/", async (req, res) => {
  const alllistings = await Listing.find({});
  res.render("./listings/index.ejs", { alllistings });
});

// app.get("/", async (req, res) => {
//   res.render("./users/signup.ejs");
// });

// app.get("/demouser" , async(req , res)=>{
//   let fakeUser = new User({
//     email: "hello@gmail.com",
//     username : "Vaibhav"
//   })
//   // NOTE : passport use pdkdf2 hashing algorithm to encrypt the password
//   let registerdUser = await User.register(fakeUser , "password");
//   console.log(registerdUser);
//   res.send(registerdUser);
  
// })

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/" , userRouter);
// app.use("/" , listingRouter);

// const validatelisting = (req , res ,next)=>{
//   let {error} = listingSchema.validate(req.body);
//   if (error) {
//     let errMsg = error.details.map((el)=> el.message).join(',');
//     throw new ExpressError(400 , errMsg);
//   }
//   else{
//     next();
//   }
// }

// const validatereview = (req , res ,next)=>{
//   let {error} = reviewSchema.validate(req.body);
//   if (error) {
//     let errMsg = error.details.map((el)=> el.message).join(',');
//     throw new ExpressError(400 , errMsg);
//   }
//   else{
//     next();
//   }
// }

// app.get("/testlistings" , async (req , res)=>{
//     let newListing = new Listing({
//         title:"This is My new Villa",
//         description:"this is the most loved villa ever",
//         price:1500,
//         location:"Delhi",
//         country:"India"
//     })

//     await newListing.save().then((res)=>{
//         console.log(res);
//     })
//     res.send("Data is Created in the database You can now check this.");
// })

// Index Route
// app.get(
//   "/listings",
//   wrapAsync(async (req, res) => {
//     const alllistings = await Listing.find({});
//     res.render("./listings/index.ejs", { alllistings });
//   })
// );

// // New Route
// app.get("/listings/new", (req, res) => {
//   res.render("./listings/new.ejs");
// });

// // Show Route
// app.get(
//   "/listings/:id",
//   wrapAsync(async (req, res) => {
//     let { id } = req.params;
//     const listing = await Listing.findById(id).populate("reviews");
//     res.render("./listings/show.ejs", { listing });
//   })
// );

// // Create Route
// app.post(
//   "/listings", validatelisting ,
//   wrapAsync(async (req, res) => {
//     // let {title , decription , image , price , location , country} = req.body;
//     // We make object key value pair.
//     // if (!req.body.li sting) {
//     //     throw new ExpressError(400 , "Send Valid data for listing Please..");
//     // }

//     // after using Joi ***************************
//     // let result = listingSchema.validate(req.body);
//     // if (result.error) {
//     //   throw new ExpressError(400 , result.error);
//     // }
//     //*************************************/
//     let newListing = new Listing(req.body.listing);
//     await newListing.save();
//     res.redirect("/listings");
//   })
// );

// //Edit Route
// app.get(
//   "/listings/:id/edit",
//   wrapAsync(async (req, res) => {
//     let { id } = req.params;
//     const listing = await Listing.findById(id);
//     res.render("./listings/edit.ejs", { listing });
//   })
// );

// // Update Route
// app.put(
//   "/listings/:id", validatelisting ,
//   wrapAsync(async (req, res) => {
//     let { id } = req.params;
//     await Listing.findByIdAndUpdate(id, { ...req.body.listing });
//     res.redirect(`/listings/${id}`);
//   })
// );

// //Delete Route
// app.delete(
//   "/listings/:id",
//   wrapAsync(async (req, res) => {
//     let { id } = req.params;
//     await Listing.findByIdAndDelete(id);
//     res.redirect("/listings");
//   })
// );

// //Reviews
// app.post("/listings/:id/reviews" , validatereview , wrapAsync(async(req ,res)=>{
//     let listing = await Listing.findById(req.params.id);
//     // console.log(listing);

//     let newReview = new Review(req.body.review);
//   // console.log(newReview);

//     listing.reviews.push(newReview);

//     await newReview.save();
//     await listing.save();
//     res.redirect(`/listings/${listing._id}`);
// }))

// app.delete("/listings/:id/reviews/:reviewId" , wrapAsync(async(req , res)=>{
//     let {id , reviewId} = req.params;

//     await Listing.findByIdAndUpdate(id , {$pull : {reviews : reviewId}});
//     await Review.findByIdAndDelete(reviewId);

//     res.redirect(`/listings/${id}`);
// }))

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
  let { status = 500, message = "some Error occured" } = err;
  // res.send("Something Something hmmmmmm......... (pyar ek dokha shi info daal ek hi mauka hai)");
  // res.status(status).send(message);
  res.status(status).render("./listings/error.ejs", { message });
});
app.listen(3000, () => {
  console.log("Server is Listening on port 3000..");
});
