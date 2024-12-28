const express = require('express');
const { addPrices, getPrices, getPricesById, updatePrices, deletePrices } = require('../../Controllers/Prices');


const app = express();

app.post("/", addPrices);
app.get("/", getPrices);
app.get("/:id", getPricesById);
app.patch("/:id", updatePrices);
app.delete("/:id", deletePrices);

module.exports = app;

