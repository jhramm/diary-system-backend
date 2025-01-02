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

const getPostcodeById = async (req, res) => {
  try {
    const postcodeById = await Postcodes.findById(req.params.id);
    res.status(200).send(postcodeById);
  } catch (error) {
    res.status(404).send(error);
  }
};

const updatePostcode = async (req, res) => {
  try {
    const _id = req.params.id;
    const updatedPostcode = await Postcodes.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(updatedPostcode);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deletePostcode = async (req, res) => {
  try {
    const _id = req.params.id;
    const deletedPostcode = await Postcodes.findByIdAndDelete({ _id: _id });
    res.status(200).send(deletedPostcode);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addPostcodes,
  getPostcodes,
  getPostcodeById,
  updatePostcode,
  deletePostcode,
};
