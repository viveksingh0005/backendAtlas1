const mongoose = require ('mongoose');

async function connectDB(){
    await mongoose.connect("mongodb+srv://vivek:r0QiUy6d6Ptr0.gzmgytu.mongodb.net/db1");
    console.log("connected to database");
}

module.exports = connectDB
