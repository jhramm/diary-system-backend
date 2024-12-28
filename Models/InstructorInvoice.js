const mongoose = require("mongoose");

const instructorInvoiceSchema = new mongoose.Schema({
  invoiceDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  invoiceAmount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  paid: {
    type: Boolean,
    default: false,
  },
  unPaid: {
    type: Boolean,
    default: false,
  },
});

const InstructorInvoice = new mongoose.model(
  "InstructorInvoice",
  instructorInvoiceSchema
);

module.exports = InstructorInvoice;
