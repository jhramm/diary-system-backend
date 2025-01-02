const mongoose = require("mongoose");

const clientInvoiceSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    default: () => mongoose.Types.ObjectId().toHexString(),
  },
  invoiceDate: {
    type: Date,
    default: Date.now,
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
