const Operator = require("../Models/Operators");
const addOperator = (req, res) => {
  try {
    const newOperator = new Operator(req.body);
    newOperator
      .save()
      .then(() => {
        res.status(200).send(newOperator);
      })
      .catch((e) => {
        res.status(404).send(e);
      });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getOperators = async (req, res) => {
  try {
    const allOperators = await Operator.find();
    res.status(200).send(allOperators);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addOperator,
  getOperators,
};
