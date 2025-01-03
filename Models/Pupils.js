const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const pupilSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  instructor: {
    type: String,
  },
  pupilOwner: {
    type: String,
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
  dob: {
    type: String,
  },
  hasProvisional: {
    type: Boolean,
  },
  licenceNumber: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  mobile: {
    type: Number,
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
  pickupPostcode: {
    type: String,
  },
  pickupHouseName: {
    type: String,
  },
  pickupAddress: {
    type: String,
  },
  product: {
    type: String,
  },
  lessonType: {
    type: String,
  },
  availability: {
    type: String,
  },
  pupilStatus: {
    type: Boolean,
    default: true,
  },
  diaryAccess: {
    type: Boolean,
    default: true,
  },
  discount: {
    type: Number,
    default: 0,
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
  pupilNotes: {
    type: String,
    required: false,
    default: "",
  },
});

pupilSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 13);
  }
  next();
});

pupilSchema.pre("findOneAndUpdate", async function (next) {
  if (this._update.password) {
    this._update.password = await bcrypt.hash(this._update.password, 13);
  }
  next();
});

const Pupils = new mongoose.model("Pupils", pupilSchema);
module.exports = Pupils;
