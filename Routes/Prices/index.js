const express = require('express');
const { addPrices, getPrices } = require('../../Controllers/Prices');


const app = express();

app.post("/", addPrices);
app.get("/", getPrices);

module.exports = app;

