const mongoose = require("mongoose");

const pupilSchema = new mongoose.Schema({
  instructor: {
    type: String,
    required: true,
  },
  pupilOwner: {
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
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  hasProvisional: {
    type: Boolean,
    required: true,
  },
  licenceNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
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
  pickupPostcode: {
    type: String,
    required: true,
  },
  pickupHouseName: {
    type: String,
    required: true,
  },
  pickupAddress: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  lessonType: {
    type: String,
    required: true,
  },
  availability: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
    default: true,
  },
  diaryAccess: {
    type: Boolean,
    required: true,
    default: true,
  },
  discount: {
    type: Number,
    required: true,
    default: 0,
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
  pupilNotes: {
    type: String,
    required: false,
    default: "",
  },
});

const Pupils = new mongoose.model("Pupils", pupilSchema);
module.exports = Pupils;
