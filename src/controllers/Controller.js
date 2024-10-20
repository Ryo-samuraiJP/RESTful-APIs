import mongoose from "mongoose";
import { ContactSchema } from "../models/Model";

const Contact = mongoose.model("Contact", ContactSchema);

export const addNewContact = async (req, res) => {
  try {
    let newContact = new Contact(req.body);
    let contact = await newContact.save();
    res.json(contact);
  } catch (err) {
    res.send(err);
  }
};
