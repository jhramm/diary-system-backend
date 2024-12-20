const express = require('express');
const {addOperator, getOperators} = require("../../Controllers/Operators")

const app = express();

app.post("/", addOperator);
app.get("/", getOperators);


module.exports = app;