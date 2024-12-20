const Instructor = require("../Models/Instructors");
const addInstructor = (req, res) => {
  try {
    const newInstructor = new Instructor(req.body);
    newInstructor
      .save()
      .then(() => {
        res.status(200).send(newInstructor);
      })
      .catch((e) => {
        res.status(404).send(e);
      });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getInstructors = async (req, res) => {
  try {
    const allInstructors = await Instructor.find();
    res.status(200).send(allInstructors);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addInstructor,
  getInstructors,
};
