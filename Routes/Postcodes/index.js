const express = require('express');
const {addPostcodes, getPostcodes } = require('../../Controllers/Postcodes');

const app = express();

app.post("/", addPostcodes);
app.get("/", getPostcodes)

module.exports = app;