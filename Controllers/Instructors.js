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

const getInstructorById = async (req, res) => {
  try {
    const instructorById = await Instructor.findById(req.params.id);
    res.status(200).send(instructorById);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateInstructor = async (req, res) => {
  try {
    const _id = req.params.id;
    const updatedInstructor = await Instructor.findByIdAndUpdate(
      _id,
      req.body,
      { new: true }
    );
    res.status(200).send(updatedInstructor);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteInstructor = async (req, res) => {
  try {
    const _id = req.params.id;
    const deletedInstructor = await Instructor.findByIdAndDelete({ _id: _id });
    res.status(200).send(deletedInstructor);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addInstructor,
  getInstructors,
  getInstructorById,
  updateInstructor,
  deleteInstructor,
};
