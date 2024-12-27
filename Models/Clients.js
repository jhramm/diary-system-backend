const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const clientSchema = new mongoose.Schema({
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
  },
  userName: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
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
  instructorIds: {
    type: [String]
  }
});

clientSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 13);
  }
  next();
});

const Client = new mongoose.model("Clients", clientSchema);

module.exports = Client;
