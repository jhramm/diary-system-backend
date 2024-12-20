const express = require('express');
const { addClient, getClients} = require("../../Controllers/Clients")

const app = express();

app.post("/", addClient);
app.get("/", getClients);


module.exports = app;