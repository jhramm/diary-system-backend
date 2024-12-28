const express = require('express');
const { addClientInvoice, getClientInvoice } = require("../../Controllers/ClientInvoices");

const app = express();

app.post("/", addClientInvoice);
app.get("/", getClientInvoice);


module.exports = app;

