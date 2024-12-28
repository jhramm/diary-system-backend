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

const getOperatorById = async (req, res) => {
  try {
    const operatorById = await Operator.findById(req.params.id);
    res.status(200).send(operatorById);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateOperator = async (req, res) => {
  try {
    const _id = req.params.id;
    const updatedOperator = await Operator.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(updatedOperator);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteOperator = async (req, res) => {
  try {
    const _id = req.params.id;
    const deletedOperator = await Operator.findByIdAndDelete({ _id: _id });
    res.status(200).send(deletedOperator);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addOperator,
  getOperators,
  getOperatorById,
  updateOperator,
  deleteOperator,
};
