import ClientModel from "../db/model/client.model.js";
import {id} from "inversify";

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

    async updateClient(id,name, address, phoneNumber, company) {
        await ClientModel.updateOne(
            { _id: id },
            {
                $set: {
                    name: name,
                    address: address,
                    phoneNumber: phoneNumber,
                    company: company,
                }
            }
        )
    }

    async deleteClient(id) {
        throw new Error("Not implemented");
    }

    async fetchAllClient(id) {
        return ClientModel.find({});
    }
}