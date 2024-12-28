const Pupil = require("../Models/Pupils");
const addPupil = (req, res) => {
  try {
    const newPupil = new Pupil(req.body);
    newPupil
      .save()
      .then(() => {
        res.status(200).send(newPupil);
      })
      .catch((e) => {
        res.status(404).send(e);
      });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getPupils = async (req, res) => {
  try {
    const allPupils = await Pupil.find();
    res.status(200).send(allPupils);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getPupilById = async (req, res) => {
  try {
    const pupilById = await Pupil.findById(req.params.id);
    res.status(200).send(pupilById);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updatePupil = async (req, res) => {
  try {
    const _id = req.params.id;
    const updatePupil = await Pupil.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(updatePupil);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deletePupil = async (req, res) => {
  try {
    const _id = req.params.id;
    const deletedPupil = await Pupil.findByIdAndDelete({ _id: _id });
    res.status(200).send(deletedPupil);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addPupil,
  getPupils,
  getPupilById,
  updatePupil,
  deletePupil,
};
