const { Schema } = require("mongoose");
const mongoose = require("../db/conn");

const Sale = mongoose.model(
  "Sale",

  new Schema({
    numsales: {
      type: Number,
    },
    grossvalue: {
      type: Number,
      require: true,
    },
    deduction: {
      type: Number,
    },
    add: {
      type: Number,
    },
    totalvalue: {
      type: Number,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },
  })
);

module.exports = Sale;
