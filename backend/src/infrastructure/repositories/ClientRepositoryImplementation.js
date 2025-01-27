import ClientModel from "../db/model/client.model.js";

class ClientRepositoryImplementation {
    async createClient(client) {
        return await ClientModel.create(
            {
                adminId: client.adminId,
                name: client.name,
                address: client.address,
                phoneNumber: client.phoneNumber,
                company: client.company,
            }
        )
    }

    async getClientById(id) {
        return await ClientModel.findById(id)
    }

    async updateClient(name, address, phoneNumber, company, order) {

    }

    async deleteClient(id) {
        throw new Error("Not implemented");
    }

    async fetchAllClient(id) {
        return ClientModel.find({});
    }
}