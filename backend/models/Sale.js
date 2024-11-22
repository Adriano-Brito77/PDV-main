const { Schema } = require("mongoose");
const mongoose = require("../db/conn");

const Sale = mongoose.model(
  "Sale",

  new Schema({
    numsales: {
      type: Number,
    },
    totalvalue: {
      type: Number,
      require: true,
    },
    deduction: {
      type: Number,
    },
    add: {
      type: Number,
    },
    receive: {
      type: Number,
      require: true,
    },
    change: {
      type: Number,
    },
    username: {
      type: String,
      require: true,
    },
  })
);

module.exports = Sale;
