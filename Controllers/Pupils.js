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

module.exports = {
  addPupil,
  getPupils,
};
