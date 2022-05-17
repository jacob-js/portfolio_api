import Contacts from "../../db/models/Contacts";

class ContactsService {
    async getAllContacts(limit = 10, offset = 0): Promise<{ rows: Contacts[], count: number }> {
        return await Contacts.findAndCountAll({
            limit,
            offset,
            order: [['createdAt', 'DESC']]
        });
    }

    async getContactById(id: string): Promise<Contacts | null> {
        return await Contacts.findOne({
            where: {
                id: id
            }
        });
    }

    async createContact(contact: Contacts): Promise<Contacts> {
        return await Contacts.create(contact);
    }

    async updateContact(id: string, data: Contacts): Promise<any[]> {
        return await Contacts.update(data, {
            where: { id: id }
        });
    }

    async deleteContact(id: string): Promise<void> {
        const contact = await Contacts.findOne({ where: { id: id } });
        return await contact?.destroy();
    }
};

export default new ContactsService();