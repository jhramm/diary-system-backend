const express = require('express');
const { addPrices } = require('../../Controllers/Prices');


const app = express();

app.post("/", addPrices);

module.exports = app;

