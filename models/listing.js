const mongoose = require('mongoose');
const Review = require('./review');
const { ref } = require('joi');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    image: {
        type:String,
        default: "https://media.istockphoto.com/id/157680513/photo/mansion-at-dawn.jpg?s=2048x2048&w=is&k=20&c=UMbdBGeofrxQd218fAkf3ewQRWiDmoZK7ZCfzt_L7_s=",
        set:(v)=> v === ""?"https://media.istockphoto.com/id/157680513/photo/mansion-at-dawn.jpg?s=2048x2048&w=is&k=20&c=UMbdBGeofrxQd218fAkf3ewQRWiDmoZK7ZCfzt_L7_s=":v
    },
    price:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    reviews :[
        {
            type : Schema.Types.ObjectId,
            ref : "Review"
        }
    ],
    owner : {
        type : Schema.Types.ObjectId,
        ref: "User"
    }
})

listingSchema.post("findOneAndDelete" , async(listing)=>{
    if (listing) {
        await Review.deleteMany({_id : {$in: listing.reviews}});
    }
});

const Listing = mongoose.model("Listing" , listingSchema);
module.exports = Listing;