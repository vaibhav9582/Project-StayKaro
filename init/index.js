const mongoose = require('mongoose');
const Listing = require("../models/listing");
const initData = require("./data");


const MONGO_URL = "mongodb://127.0.0.1:27017/StayKaro";

main().then(()=>{
    console.log("Successfully Connected....");
}).catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initdb = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj , owner : "66e39b3e5fd2cf2e87ea708a"}));
    await Listing.insertMany(initData.data);
    console.log("Data was Inserted Successfully.");
}

initdb();
