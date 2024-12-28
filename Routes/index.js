const express = require("express");
const ADMIN = require("./Admin/");
const CLIENT = require("./Clients/");
const INSTRUCTOR = require("./Instructors/");
const OPERATOR = require("./Operators/");
const PUPIL = require("./Pupils/");
const PRICES = require("./Prices/");
const POSTCODES = require("./Postcodes/");
const TESTCENTRES = require("./TestCentres");
const CLIENTINVOICES = require("./ClientInvoices");
const INSTRUCTORINVOICES = require("./InstructorInvoices");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to my API");
});

app.use("/admin", ADMIN);
app.use("/client", CLIENT);
app.use("/instructor", INSTRUCTOR);
app.use("/operator", OPERATOR);
app.use("/pupil", PUPIL);
app.use("/prices", PRICES);
app.use("/postcodes", POSTCODES);
app.use("/testcentres", TESTCENTRES);
app.use("/clientinvoices", CLIENTINVOICES);
app.use("/instructorInvoices", INSTRUCTORINVOICES);

module.exports = app;
