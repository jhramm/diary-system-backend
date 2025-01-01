const express = require('express');
const { addTransactions, getTransactions, getTransactionById, updateTransaction, deleteTransaction } = require('../../Controllers/Transactions');

const app = express();


app.post("/", addTransactions);
app.get("/", getTransactions);
app.get("/:id", getTransactionById);
app.patch("/:id", updateTransaction);
app.delete("/:id", deleteTransaction);

module.exports = app;