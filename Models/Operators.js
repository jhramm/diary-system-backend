const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const operatorSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  homePostcode: {
    type: String,
  },
  houseName: {
    type: String,
  },
  homeAddress: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  status: {
    type: Boolean,
    default: true,
  },
  receiveSystemMessages: {
    type: Boolean,
  },
  receiveBookingEmail: {
    type: Boolean,
  },
  receiveBookingSms: {
    type: Boolean,
  },
  clientIds: {
    type: [String]
  },
  instructorIds: {
    type: [String]
  },
  pupilIds: {
    type: [String]
  }
});

operatorSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 13);
  }
  next();
});

const Operators = new mongoose.model("Operators", operatorSchema);
module.exports = Operators;
