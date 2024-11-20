const { Schema } = require("mongoose");
const mongoose = require("../db/conn");

const Itens = mongoose.model(
  "Itens",

  new Schema(
    {
      name: {
        type: String,
        require: true,
      },
      barcode: {
        type: Number,
        require: true,
      },
      unitprice: {
        type: Number,
        require: true,
      },
      unit: {
        type: String,
        require: true,
      },
      stok: {
        type: Number,
        require: true,
      },
    },
    { timestamps: true }
  )
);

module.exports = Itens;
