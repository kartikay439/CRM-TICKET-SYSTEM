import { asyncHandler } from "../../../utils/AsyncHandler.js";
import Ticket from "../../../domain/entities/ticket.js";
import TicketRepositoryImplementation from "../../../infrastructure/repositories/TicketRepositoryImplementation.js";
import ApiError from "../../../utils/ApiError.js";
import ApiResponse from "../../../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../../../utils/cloudinary.js";
import jwt from "jsonwebtoken";

const ticketRepo = new TicketRepositoryImplementation();

const fetchAllTicketsById = asyncHandler(async (req, res) => {
        const accessToken = req.cookies?.accessToken;
        console.log("hi")

        if (!accessToken) {
                throw new ApiError(401, "Access token missing");
        }

        let decoded;
        try {
                decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        } catch (err) {
                throw new ApiError(401, "Invalid access token");
        }

        const userId = decoded?._id || decoded?.id; // depends on how you sign the token

        if (!userId) {
                throw new ApiError(400, "User ID not found in token");
        }

        const tickets = await ticketRepo.fetchAllTickets(userId);

        if (!tickets || tickets.length === 0) {
                throw new ApiError(404, "No tickets found for this user");
        }

        return res.status(200).json(
            new ApiResponse(200, tickets, "Tickets fetched successfully")
        );
});


const fetchAllTicketsAdmin = asyncHandler(async (req, res) => {



        const accessToken = req.cookies?.accessToken;
        console.log("hi")

        if (!accessToken) {
                throw new ApiError(401, "Access token missing");
        }

        let decoded;
        try {
                decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        } catch (err) {
                throw new ApiError(401, "Invalid access token");
        }

        const userId = decoded?._id || decoded?.id; // depends on how you sign the token

        if (!userId) {
                throw new ApiError(400, "User ID not found in token");
        }

        const tickets = await ticketRepo.fetchAllTicketsAdmin();

        if (!tickets || tickets.length === 0) {
                throw new ApiError(404, "No tickets found for this user");
        }

        return res.status(200).json(
            new ApiResponse(200, tickets, "Tickets fetched successfully")
        );
});
















const createTicket = asyncHandler(async (req, res) => {
        const { subject, description } = req.body;

        const token = req.cookies?.accessToken;

        if (!token) {
                throw new ApiError(401, "Access token missing");
        }

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const userId = decoded?.id;

        if (!userId) {
                throw new ApiError(401, "Invalid token");
        }
        console.log(userId);

        const productImage = req.files?.productImage?.[0];
        const invoiceImage = req.files?.uploadInvoice?.[0];

        if (!productImage || !invoiceImage) {
                throw new ApiError(400, "Both product and invoice images are required");
        }
        //
        const productOnCloudinary = await uploadOnCloudinary(productImage.path);
        const invoiceOnCloudinary = await uploadOnCloudinary(invoiceImage.path);
        // const productOnCloudinary = "lll"
        // const invoiceOnCloudinary =" await uploadOnCloudinary(invoiceImage.path);"

        const ticket = new Ticket(subject, description, userId, productOnCloudinary.url, invoiceOnCloudinary.url);

        const savedTicket = await ticketRepo.createTicket(ticket);

        if (!savedTicket) {
                throw new ApiError(400, "Unable to create ticket");
        }

        return res.status(201).json(
            new ApiResponse(201, "Ticket created", savedTicket)
        );
});

export { createTicket ,fetchAllTicketsById,fetchAllTicketsAdmin };
