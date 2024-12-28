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

const getPrices = async (req, res) => {
  try {
    const allPrices = await Prices.find();
    res.status(200).send(allPrices);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getPricesById = async (req, res) => {
  try {
    const priceById = await Pricing.findById(req.params.id);
    res.status(200).send(priceById);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updatePrices = async (req, res) => {
  try {
    const _id = req.params.id;
    const updatePrices = await Prices.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(updatePrices);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deletePrices = async (req, res) => {
  try {
    const _id = req.params.id;
    const deletePrices = await Prices.findByIdAndDelete({ _id: _id });
    res.status(200).send(deletePrices);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  addPrices,
  getPrices,
  getPricesById,
  updatePrices,
  deletePrices,
};
