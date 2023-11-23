import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";
import { HttpError } from "../helpers/index.js";

const contactsPath = path.resolve("models", "contacts.json");
const listContacts = async () => {
  const buffer = await fs.readFile(contactsPath);
  const arrContacts = JSON.parse(buffer);
  return arrContacts;
};

const updateContactsFn = (contacts) => {
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};

const getContactById = async (contactId) => {
  const allContacts = await listContacts();
  const result = allContacts.find((item) => item.id === contactId);
  console.log(result);
  return result || null;
};

const removeContact = async (contactId) => {
  const allContacts = await listContacts();
  const index = allContacts.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = allContacts.splice(index, 1);
  await updateContactsFn(allContacts);
  return result;
};

const addContact = async (body) => {
  const allContacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...body,
  };
  allContacts.push(newContact);
  await updateContactsFn(allContacts);
  return newContact;
};

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === contactId);
  if (index === -1) {
    throw HttpError(404, "Not found");
    return;
  }
  contacts[index] = { ...contacts[index], ...body };
  await updateContactsFn(contacts);
  return contacts[index];
};

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
