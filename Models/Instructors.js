const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
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
    default: false,
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

const Instructors = new mongoose.model("Instructors", instructorSchema);
module.exports = Instructors;
