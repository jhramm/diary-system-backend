const express = require('express');
const { loginController } = require('../../Controllers/Auth');

const app = express();

app.post("/login/:accountType", loginController);

module.exports = app;