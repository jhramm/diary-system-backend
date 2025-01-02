const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const operatorSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
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
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    bcrypt: true,
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
    default: false,
  },
  receiveBookingEmail: {
    type: Boolean,
    default: false,
  },
  receiveBookingSms: {
    type: Boolean,
    default: false,
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

operatorSchema.pre("findOneAndUpdate", async function (next) {
  if (this._update.password) {
    this._update.password = await bcrypt.hash(this._update.password, 13);
  }
  next();
});

const Operators = new mongoose.model("Operators", operatorSchema);
module.exports = Operators;
