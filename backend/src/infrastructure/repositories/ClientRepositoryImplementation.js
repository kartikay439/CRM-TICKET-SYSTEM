import ClientModel from "../db/model/client.model.js";

class ClientRepositoryImplementation {
    // Method to create a new client
    async createClient(client) {
        try {
            const saved = await ClientModel.create(client);
            return saved;
        } catch (error) {
            throw new Error("Error while creating client: " + error.message);
        }
    }

    // Method to fetch all clients for a specific user
    // You can modify the logic depending on how the clients are associated with a user
    async fetchAllClients(userId) {
        try {
            const clients = await ClientModel.find({ userId }); // Assuming clients are associated with a userId
            return clients;
        } catch (error) {
            throw new Error("Error while fetching clients: " + error.message);
        }
    }

    // Method to get a specific client by ID
    async getClientById(id) {
        try {
            const client = await ClientModel.findById(id);
            if (!client) {
                throw new Error("Client not found");
            }
            return client;
        } catch (error) {
            throw new Error("Error while fetching client by ID: " + error.message);
        }
    }

    // Optional: Method to update a client
    async updateClient(id, updateData) {
        try {
            const updatedClient = await ClientModel.findByIdAndUpdate(id, updateData, { new: true });
            if (!updatedClient) {
                throw new Error("Client not found for update");
            }
            return updatedClient;
        } catch (error) {
            throw new Error("Error while updating client: " + error.message);
        }
    }

    // Optional: Method to delete a client by ID
    async deleteClient(id) {
        try {
            const deletedClient = await ClientModel.findByIdAndDelete(id);
            if (!deletedClient) {
                throw new Error("Client not found for deletion");
            }
            return deletedClient;
        } catch (error) {
            throw new Error("Error while deleting client: " + error.message);
        }
    }
}

export default ClientRepositoryImplementation;
