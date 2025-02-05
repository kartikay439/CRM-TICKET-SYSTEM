import ticket from "../../../domain/entities/ticket.js";
import {asyncHandler} from "../../../utils/AsyncHandler.js";
import TicketData from "../../../domain/entities/ticket.js";
import Ticket from "../../../domain/entities/ticket.js";
import TicketRepositoryImplementation from "../../../infrastructure/repositories/TicketRepositoryImplementation.js";
import ApiError from "../../../utils/ApiError.js";
import ApiResponse from "../../../utils/ApiResponse.js";

const ticketRepo = new TicketRepositoryImplementation()

const createTicket = asyncHandler(
    async (req, res) => {

        const ticket = new Ticket(req.body);
        const t = await ticketRepo.createTicket(ticket);
        if (!t) {
            throw ApiError(400, "Unable to create ticket");
        }
        return res.status(200).json(
            new ApiResponse(
                200,
                "Ticket created"
            )
        )
    }
)
export {createTicket}