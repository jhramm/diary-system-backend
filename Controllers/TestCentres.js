const TestCentres = require("../Models/TestCentres");

const addTestCentres = (req, res) => {
  try {
    const testCentres = new TestCentres(req.body);
    testCentres
      .save()
      .then(() => {
        res.status(200).send(testCentres);
      })
      .catch((e) => {
        res.status(404).send(e);
      });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getTestCentres = async (req, res) => {
  try {
    const testCentres = await TestCentres.find();
    res.status(200).send(testCentres);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getTestCentreById = async (req, res) => {
  try {
    const testCentreById = await TestCentres.findById(req.params.id);
    res.status(200).send(testCentreById);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateTestCentres = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateTestCentres = await TestCentres.findByIdAndUpdate(
      _id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send(updateTestCentres);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteTestCentres = async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteTestCentres = await TestCentres.findByIdAndDelete({
      _id: _id,
    });
    res.status(200).send(deleteTestCentres);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addTestCentres,
  getTestCentres,
  getTestCentreById,
  updateTestCentres,
  deleteTestCentres,
};
