const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  buyer: {
    name: String,
    email: String,
  },
  items: [
    {
      id: String,
      title: String,
      price: Number,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
