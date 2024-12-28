const express = require('express');
const {addPostcodes, getPostcodes, getPostcodeById, updatePostcode, deletePostcode } = require('../../Controllers/Postcodes');

const app = express();

app.post("/", addPostcodes);
app.get("/", getPostcodes);
app.get("/:id", getPostcodeById);
app.patch("/:id", updatePostcode);
app.delete("/", deletePostcode);

module.exports = app;