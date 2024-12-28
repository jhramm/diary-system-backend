const express = require('express');
const { addClientInvoice, getClientInvoice, getClientInvoiceById, updateClientInvoice, deleteClientInvoice } = require("../../Controllers/ClientInvoices");

const app = express();

app.post("/", addClientInvoice);
app.get("/", getClientInvoice);
app.get("/:id", getClientInvoiceById);
app.patch("/:id", updateClientInvoice);
app.delete("/:id", deleteClientInvoice);


module.exports = app;

