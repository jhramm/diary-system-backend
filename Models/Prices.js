const mongoose = require("mongoose");

const pricesSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  hours: {
    type: Number,
    required: true,
  },
  productDetails: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
  },
  visibleOnline: {
    type: Boolean,
  },
  manualPrice: {
    type: Number,
  },
  autoPrice: {
    type: Number,
  },
  pdiPrice: {
    type: Number,
  },
});

const Prices = new mongoose.model("Prices", pricesSchema);

module.exports = Prices;
