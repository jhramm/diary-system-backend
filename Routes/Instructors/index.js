const express = require('express');
const {addInstructor, getInstructors, getInstructorById, updateInstructor, deleteInstructor} = require("../../Controllers/Instructors")

const app = express();

app.post("/", addInstructor);
app.get("/", getInstructors);
app.get("/:id", getInstructorById);
app.patch("/:id", updateInstructor);
app.delete("/:id", deleteInstructor);

module.exports = app;