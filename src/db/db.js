const mongoose = require ('mongoose');

async function connectDB(){
    await mongoose.connect("mongodb+srv://vivek:r0QiUy6d6PtN6Pn3@cluster0.gzmgytu.mongodb.net/db1");
    console.log("connected to database");
}

module.exports = connectDB