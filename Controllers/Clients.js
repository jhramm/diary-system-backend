const Client = require("../Models/Clients")
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

module.exports = {
    addClient,
    getClients,
  };

