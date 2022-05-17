import { Router } from "express";
import contactsController from "../controllers/contacts.controller";

const contactsRouter = Router()
                            .get('/', contactsController.contacts)
                            .post('/', contactsController.contacts)
                            .get('/:id', contactsController.contact)
                            .put('/:id', contactsController.contact)
                            .delete('/:id', contactsController.contact);


export default contactsRouter;