const express = require('express');
const {addAdmin, getAdmin } = require('../../Controllers/Admin');

const app = express();

app.post('/', addAdmin);
app.get('/', getAdmin);


module.exports = app;