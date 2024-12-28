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

const getClientInvoiceById = async (req, res) => {
  try {
    const clientInvoiceById = await ClientInvoice.findById(req.params.id);
    res.status(200).send(clientInvoiceById);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateClientInvoice = async (req, res) => {
  try {
    const _id = req.params.id;
    const updatedClientInvoice = await ClientInvoice.findByIdAndUpdate(
      _id,
      req.body,
      { new: true }
    );
    res.status(200).send(updatedClientInvoice);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteClientInvoice = async (req, res) => {
  try {
    const _id = req.params.id;
    const deletedClientInvoice = await ClientInvoice.findByIdAndDelete({
      _id: _id,
    });
    res.status(200).send(deletedClientInvoice);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  addClientInvoice,
  getClientInvoice,
  getClientInvoiceById,
  updateClientInvoice,
  deleteClientInvoice,
};
