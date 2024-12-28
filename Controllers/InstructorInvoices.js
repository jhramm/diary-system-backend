const InstructorInvoice = require("../Models/InstructorInvoice");

const addInstructorInvoice = (req, res) => {
  try {
    const instructorInvoice = new InstructorInvoice(req.body);
    instructorInvoice
      .save()
      .then(() => {
        res.status(200).send(instructorInvoice);
      })
      .catch((e) => {
        res.status(404).send(e);
      });
  } catch (error) {
    res.status(404).send(error);
  }
};

const getInstructorInvoices = async (req, res) => {
  try {
    const instructorInvoice = await InstructorInvoice.find();
    res.status(200).send(instructorInvoice);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  addInstructorInvoice,
  getInstructorInvoices,
};
