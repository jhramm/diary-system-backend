const Prices = require("../Models/Prices");

const addPrices = (req, res) => {
  try {
    const addPrices = new Prices(req.body);
    addPrices
      .save()
      .then(() => {
        res.status(200).send(addPrices);
      })
      .catch((e) => {
        res.status(404).send(e);
      });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addPrices,
};