import contactService from "../models/index.js";

const getAllContacts = async (req, res, next) => {
  try {
    const result = await contactService.listContacts();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { contactId } = req.params;
    const result = await contactService.getContactById(contactId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getAllContacts,
  getById,
};
