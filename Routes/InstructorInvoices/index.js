const express = require('express');
const { addInstructorInvoice, getInstructorInvoices, getInstructorInvoiceById, updateInstructorInvoice, deleteInstructorInvoice } = require("../../Controllers/InstructorInvoices");

const app = express();

app.post("/", addInstructorInvoice);
app.get("/", getInstructorInvoices);
app.get("/:id", getInstructorInvoiceById);
app.patch("/:id", updateInstructorInvoice);
app.delete("/:id", deleteInstructorInvoice);


module.exports = app;
