const express = require('express');
const { addClient, getClients, getClientById, updateClient, deleteClient} = require("../../Controllers/Clients")

const app = express();

app.post("/", addClient);
app.get("/", getClients);
app.get("/:id", getClientById);
app.patch("/:id", updateClient);
app.delete("/:id", deleteClient);


module.exports = app;