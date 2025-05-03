const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ShoeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const ShoeModel = mongoose.model("myshoe", ShoeSchema);

module.exports = ShoeModel;
