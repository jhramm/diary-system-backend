const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const clientSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  clientAsInstructor: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
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
  address: {
    type: String,
    required: true,
  },
  postcode: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
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
  licenceNumber: {
    type: String,
    required: true,
  },
  prnNumber: {
    type: Number,
    required: true,
  },
  lessonPriority: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
    default: true,
  },
  takeBookings: {
    type: Boolean,
    required: true,
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

clientSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 13);
  }
  next();
});

const Client = new mongoose.model("Clients", clientSchema);

module.exports = Client;
