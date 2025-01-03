const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
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
  adminAddress: {
    type: String,
    required: true,
  },
  systemVersion: {
    type: String,
    required: true,
  },
  clientIds: {
    type: [String]
  },
  operatorIds: {
    type: [String]
  },
  instructorIds: {
    type: [String]
  },
  pupilIds: {
    type: [String]
  }
});

adminSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 13);
  }
  next();
});

adminSchema.pre("findOneAndUpdate", async function (next) {
  if (this._update.password) {
    this._update.password = await bcrypt.hash(this._update.password, 13);
  }
  next();
});

const Admin = new mongoose.model("Admin", adminSchema);
module.exports = Admin;
