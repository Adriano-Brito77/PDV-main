const { Schema } = require("mongoose");

const mongoose = require("../db/conn");

const SaleItems = mongoose.model(
  "SaleItems",

  new Schema(
    {
      numsales: {
        type: Number,
      },
      item: Object,
    },
    { timestamps: true }
  )
);

module.exports = SaleItems;
