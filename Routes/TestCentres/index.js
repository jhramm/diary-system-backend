const express = require('express');
const { addTestCentres, getTestCentres, getTestCentreById, updateTestCentres, deleteTestCentres } = require("../../Controllers/TestCentres")

const app = express();

app.post("/", addTestCentres);
app.get("/", getTestCentres);
app.get("/:id", getTestCentreById);
app.patch("/:id", updateTestCentres);
app.delete("/:id", deleteTestCentres);

module.exports = app;