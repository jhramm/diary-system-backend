const express = require("express");
const CLIENT = require("./Clients/");
const INSTRUCTOR = require("./Instructors/");
const OPERATOR = require("./Operators/");
const PUPIL = require("./Pupils/");
const app = express();


app.get("/", (req, res)=>{
    res.status(200).send("Welcome to my API");
})

app.use("/client", CLIENT);
app.use("/instructor", INSTRUCTOR);
app.use("/operator", OPERATOR);
app.use("/pupil", PUPIL);

module.exports = app;