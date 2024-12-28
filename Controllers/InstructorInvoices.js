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

const getInstructorInvoiceById = async (req, res) => {
  try {
    const instructorInvoice = await InstructorInvoice.findById(req.params.id);
    res.status(200).send(instructorInvoice);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateInstructorInvoice = async (req, res) => {
  try {
    const _id = req.params.id;
    const instructorInvoice = await InstructorInvoice.findByIdAndUpdate(
      _id,
      req.body,
      { new: true }
    );
    res.status(200).send(instructorInvoice);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteInstructorInvoice = async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteInvoice = await InstructorInvoice.findByIdAndDelete({
      _id: _id,
    });
    res.status(200).send(deleteInvoice);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addInstructorInvoice,
  getInstructorInvoices,
  getInstructorInvoiceById,
  updateInstructorInvoice,
  deleteInstructorInvoice,
};
