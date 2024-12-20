const express = require('express');
const {addInstructor, getInstructors} = require("../../Controllers/Instructors")

const app = express();

app.post("/", addInstructor);
app.get("/", getInstructors);


module.exports = app;