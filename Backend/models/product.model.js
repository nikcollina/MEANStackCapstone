let mongoose = require("mongoose");
mongoose.Promise = global.Promise; 

let ProductSchema = mongoose.Schema({
    _id:Number,
    pname:String,
    price:Number
})

let ProductModel = mongoose.model("product",ProductSchema,"Products");

module.exports = ProductModel