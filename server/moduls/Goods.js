const { Schema, model } = require("mongoose");

const schema = new Schema({
  priceForPack: {type: Number},
  priceForKg: {type: Number},
  price: { type: Number },
  link: { type: String },
  shop: { type: String },
  name: { type: String },
  weight: { type: Number },

});

module.exports = model("Goods", schema);
