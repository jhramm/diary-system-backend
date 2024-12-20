const mongoose = require("mongoose");

const operatorSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  homePostcode: {
    type: String,
    required: true,
  },
  houseName: {
    type: String,
    required: true,
  },
  homeAddress: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
    default: true,
  },
  receiveSystemMessages: {
    type: Boolean,
    required: true,
  },
  receiveBookingEmail: {
    type: Boolean,
    required: true,
  },
  receiveBookingSms: {
    type: Boolean,
    required: true,
  },
});

const Operators = new mongoose.model("Operators", operatorSchema);
module.exports = Operators;
