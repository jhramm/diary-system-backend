const express = require('express');
const {addPupil, getPupils} = require("../../Controllers/Pupils")

const app = express();

app.post("/", addPupil);
app.get("/", getPupils);


module.exports = app;