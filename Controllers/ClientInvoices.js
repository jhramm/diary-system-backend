const ClientInvoice = require("../Models/ClientInvoice");

const addClientInvoice = (req, res) => {
  try {
    const clientInvoice = new ClientInvoice(req.body);
    clientInvoice
      .save()
      .then(() => {
        res.status(200).send(clientInvoice);
      })
      .catch((e) => {
        res.status(404).send(e);
      });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getClientInvoice = async (req, res) => {
  try {
    const clientInvoice = await ClientInvoice.find();
    res.status(200).send(clientInvoice);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
    addClientInvoice,
    getClientInvoice,
}
