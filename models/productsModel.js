//requiring mongoose
const mongoose = require("mongoose");

//making product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

//making variable to hold schema
const Product = mongoose.model("Product", productSchema);

//exporting product
module.exports = Product;
