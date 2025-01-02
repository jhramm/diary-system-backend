const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const clientSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  companyName: {
    type: String,
  },
  clientAsInstructor: {
    type: String,
  },
  gender: {
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
  address: {
    type: String,
  },
  postcode: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  mobile: {
    type: Number,
  },
  licenceNumber: {
    type: String,
  },
  prnNumber: {
    type: Number,
  },
  lessonPriority: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
  takeBookings: {
    type: Boolean,
    default: false,
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
  instructorIds: {
    type: [String]
  },
  pupilIds: {
    type: [String]
  }
});

clientSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 13);
  }
  next();
});

clientSchema.pre("findOneAndUpdate", async function (next) {
  if (this._update.password) {
    this._update.password = await bcrypt.hash(this._update.password, 13);
  }
  next();
});

const Client = new mongoose.model("Clients", clientSchema);

module.exports = Client;
