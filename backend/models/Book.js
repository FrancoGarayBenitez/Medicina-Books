const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  category: String,
  description: String,
  image: String,
  year: Number,
  edition: String,
  stock: Number,
  price: Number,
});

module.exports = mongoose.model("Book", bookSchema);
