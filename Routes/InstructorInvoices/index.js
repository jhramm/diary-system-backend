const express = require('express');
const { addInstructorInvoice, getInstructorInvoices } = require("../../Controllers/InstructorInvoices");

const app = express();

app.post("/", addInstructorInvoice);
app.get("/", getInstructorInvoices)


module.exports = app;
