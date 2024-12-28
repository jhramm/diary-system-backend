const express = require('express');
const {addAdmin, getAdmin, getAdminById, updateAdmin } = require('../../Controllers/Admin');

const app = express();

app.post('/', addAdmin);
app.get('/', getAdmin);
app.get("/:id", getAdminById);
app.patch("/:id", updateAdmin);


module.exports = app;