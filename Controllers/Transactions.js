const Transactions = require("../Models/Transactions");

const addTransactions = (req, res) => {
  try {
    const transaction = new Transactions(req.body);
    transaction
      .save()
      .then(() => {
        res.status(200).send(transaction);
      })
      .catch((e) => {
        res.status(404).send(e);
      });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getTransactions = async (req, res) => {
  try {
    const transaction = await Transactions.find();
    res.status(200).send(transaction);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getTransactionById = async (req, res) => {
  try {
    const transactionById = await Transactions.findById(req.params.id);
    res.status(200).send(transactionById);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateTransaction = async (req, res) => {
  try {
    const _id = req.params.id;
    const updatedTransaction = await Transactions.findByIdAndUpdate(
      _id,
      req.body,
      { new: true }
    );
    res.status(200).send(updatedTransaction);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteTransaction = async (req, res) => {
    try {
        const _id = req.params.id;
        const deletedTransaction = await Transactions.findByIdAndDelete({
            _id: _id,
        });
        res.status(200).send(deletedTransaction);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
  addTransactions,
  getTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
};
