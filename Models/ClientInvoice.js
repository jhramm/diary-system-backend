const mongoose = require("mongoose");

const clientInvoiceSchema = new mongoose.Schema({
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

const ClientInvoice = new mongoose.model("ClientInvoice", clientInvoiceSchema); 

module.exports = ClientInvoice
