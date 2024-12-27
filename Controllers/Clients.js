const Client = require("../Models/Clients");
const addClient = (req, res) => {
  try {
    const newClient = new Client(req.body);
    newClient
      .save()
      .then(() => {
        res.status(200).send(newClient);
      })
      .catch((e) => {
        res.status(404).send(e);
      });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getClients = async (req, res) => {
  try {
    const allClients = await Client.find();
    res.status(200).send(allClients);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    res.status(200).send(client);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateClient = async (req, res) => {
  try {
    const _id = req.params.id;
    const updatedClient = await Client.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(updatedClient);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteClient = async (req, res) => {
  try {
    const _id = req.params.id;
    const client = await Client.findByIdAndDelete({ _id: _id });
    res.status(200).send(client);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  addClient,
  getClients,
  getClientById,
  updateClient,
  deleteClient,
};
