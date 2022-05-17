import { Request, Response } from "express";
import sendResponse from "../../helpers/sendResponse.helper";
import ContactsService from "../services/contacts.services";

class ContactsController {
    async contacts(req: Request, res: Response) {
        const { method } = req;
        if(method === 'GET') {
            const { limit, offset } = req.query;
            const contacts = await ContactsService.getAllContacts(
                limit ? parseInt(limit.toString()) : 10,
                offset ? parseInt(offset.toString()) : 0
            );
            return sendResponse(res, 200, null, contacts);
        }else if(method === 'POST') {
            const { body } = req;
            const contact = await ContactsService.createContact(body);
            return sendResponse(res, 200, null, contact);
        }
    }

    async contact(req: Request, res: Response) {
        const { method } = req;
        if(method === 'GET') {
            const { id } = req.params;
            const contact = await ContactsService.getContactById(id);
            return sendResponse(res, 200, null, contact);
        }else if(method === 'PUT') {
            const { id } = req.params;
            const { body } = req;
            const contact = await ContactsService.updateContact(id, body);
            return sendResponse(res, 200, null, contact);
        }else if(method === 'DELETE') {
            const { id } = req.params;
            await ContactsService.deleteContact(id);
            return sendResponse(res, 200, null, null);
        }
    }
}

export default new ContactsController();