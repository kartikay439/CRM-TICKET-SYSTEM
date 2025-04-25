import { asyncHandler } from "../../../utils/AsyncHandler.js";
import jwt from "jsonwebtoken";
import ApiError from "../../../utils/ApiError.js";
import ApiResponse from "../../../utils/ApiResponse.js";
import ClientRepositoryImplementation from "../../../infrastructure/repositories/ClientRepositoryImplementation.js";
import Client from "../../../domain/entities/client.js";

const clientRepo = new ClientRepositoryImplementation();

const createClient = asyncHandler(async (req, res) => {
    console.log(req.body+"halua bana hai");

    const token = req.cookies?.accessToken;

    if (!token) {
        throw new ApiError(401, "Access token missing");
    }

    let decoded;
    try {
        decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    } catch (err) {
        throw new ApiError(401, "Invalid access token");
    }

    const userId = decoded?.id;

    if (!userId) {
        throw new ApiError(401, "User ID not found in token");
    }

    const { name, address, mobile_number, company, total_order, order_id } = req.body;

    if (!name || !address || !mobile_number || !company || !total_order || !order_id) {
        throw new ApiError(400, "All client fields are required");
    }

    const client = new Client(name, address, mobile_number, company, total_order, order_id, userId);

    const savedClient = await clientRepo.createClient(client);

    if (!savedClient) {
        throw new ApiError(400, "Failed to create client");
    }

    return res.status(201).json(
        new ApiResponse(201, savedClient, "Client created successfully")
    );
});


const fetchAllClients = asyncHandler(async (req, res) => {
    const clients = await clientRepo.fetchAllClients();

    if (!clients || clients.length === 0) {
        throw new ApiError(404, "No clients found");
    }

    console.log(clients);
    return res.status(200).json(
        new ApiResponse(200, clients, "Clients fetched successfully")
    );
});
export { createClient ,fetchAllClients};
