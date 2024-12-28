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
};

const getAdminById = async (req, res) => {
  try {
    const adminById = await Admin.findById(req.params.id);
    res.status(200).send(adminById);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateAdmin = async (req, res) => {
  try {
    const _id = req.params.id;
    const updatedAdmin = await Admin.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(updatedAdmin);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addAdmin,
  getAdmin,
  getAdminById,
  updateAdmin,
};
