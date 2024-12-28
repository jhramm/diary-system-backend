const Postcodes = require("../Models/Postcodes");

const addPostcodes = (req, res) => {
  try {
    const postcodes = new Postcodes(req.body);
    postcodes
      .save()
      .then(() => {
        res.status(200).send(postcodes);
      })
      .catch((e) => {
        res.status(404).send(e);
      });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getPostcodes = async (req, res) => {
  try {
    const postcodes = await Postcodes.find();
    res.status(200).send(postcodes);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = {
  addPostcodes,
  getPostcodes,
};
