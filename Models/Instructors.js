const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
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
  },
  receiveBookingEmail: {
    type: Boolean,
  },
  receiveBookingSms: {
    type: Boolean,
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

const Instructors = new mongoose.model("Instructors", instructorSchema);
module.exports = Instructors;
