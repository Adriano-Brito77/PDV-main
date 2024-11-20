const { Schema } = require("mongoose");

const mongoose = require("../db/conn");

const SaleItems = mongoose.model(
  "SaleItems",

  new Schema(
    {
      numsales: {
        type: Number,
      },
      items: Array,
    },
    { timestamps: true }
  )
);

module.exports = SaleItems;
