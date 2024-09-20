const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    // passport automaticaly insert username and password with hashing and salting.
    email:{
        type :String,
        required: true
    }
})

// this is esposible for done this : assport automaticaly insert username and password with hashing and salting.
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User" , userSchema);