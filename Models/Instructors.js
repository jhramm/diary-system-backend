const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const instructorSchema = new mongoose.Schema({
  id: {
    type: Number,
   
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
  pupilIds: {
    type: [String],
  },
  
  availability: [
    {
      day: {
        type: String,
      },
      time: [
        {
          startTime: {
            type: String,
          },
          endTime: {
            type: String,
          },
        },
      ],
    },
  ],
});
instructorSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 13);
  }
  next();
});

instructorSchema.pre("findOneAndUpdate", async function (next) {
  if (this._update.password) {
    this._update.password = await bcrypt.hash(this._update.password, 13);
  }
  next();
});

const Instructors = new mongoose.model("Instructors", instructorSchema);
module.exports = Instructors;
