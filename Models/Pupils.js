const mongoose = require("mongoose");

const pupilSchema = new mongoose.Schema({
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
  },
  password: {
    type: String,
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
  },
  receiveBookingEmail: {
    type: Boolean,
  },
  receiveBookingSms: {
    type: Boolean,
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

const Pupils = new mongoose.model("Pupils", pupilSchema);
module.exports = Pupils;
