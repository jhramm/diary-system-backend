const express = require('express');
const {addPupil, getPupils, getPupilById, updatePupil, deletePupil} = require("../../Controllers/Pupils")

const app = express();

app.post("/", addPupil);
app.get("/", getPupils);
app.get("/:id", getPupilById);
app.patch("/:id", updatePupil);
app.delete("/:id", deletePupil);


module.exports = app;