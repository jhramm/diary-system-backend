const express = require('express');
const { addTestCentres, getTestCentres } = require("../../Controllers/TestCentres")

const app = express();

app.post("/", addTestCentres);
app.get("/", getTestCentres);

module.exports = app;