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

module.exports = {
  addTestCentres,
  getTestCentres,
};
