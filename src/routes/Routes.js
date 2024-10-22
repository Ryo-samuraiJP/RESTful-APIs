import {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
} from "../controllers/controller";

const routes = (app) => {
  app
    .route("/contact")

    // to get all contacts
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContacts)

    // to add a new contact
    .post(addNewContact);

  app
    .route("/contact/:contactId")

    // to get specific contact
    .get(getContactWithID)

    // to update specific contact
    .put(updateContact)

    .delete((req, res) => res.send("DELETE request successfull!"));
};

export default routes;
