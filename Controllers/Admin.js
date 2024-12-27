const Admin = require("../Models/Admin");

const addAdmin = (req, res) => {
  try {
    const admin = new Admin(req.body);
    admin
      .save()
      .then(() => {
        res.status(200).send(admin);
      })
      .catch((e) => {
        res.status(404).send(e);
      });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAdmin = async (req, res) => {
  try {
    const admin = await Admin.find();
    res.status(200).send(admin);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  addAdmin,
  getAdmin,
};
