const express = require('express');
const {addOperator, getOperators, getOperatorById, deleteOperator, updateOperator} = require("../../Controllers/Operators");

const app = express();

app.post("/", addOperator);
app.get("/", getOperators);
app.get("/:id", getOperatorById);
app.patch("/:id", updateOperator);
app.delete("/:id", deleteOperator);


module.exports = app;