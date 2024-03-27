const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number,
  description: String,
  discount: Number,
  size: String,
  quantity: Number,
  category: String,
  imageURL: String,
});

module.exports = mongoose.model("Product", productSchema);
