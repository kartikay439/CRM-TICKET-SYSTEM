import TicketRepository from "../../domain/repositories/TicketRepository.js";
import {Ticket} from "../db/model/ticket.model.js";
import ApiError from "../../utils/ApiError.js";

class TicketRepositoryImplementation extends TicketRepository {
    fetchAllTickets = async (userId) => {
        const tiket = await Ticket.find(
            {
                user_id: userId
            }
        )
        if (!tiket) {
            throw new Error("No ticket found with id " + userId)
        }
        return tiket;
    }
    createTicket = async (ticket) => {
        const t = Ticket.find(
            ticket.last_updated_on
        )
        if (t) {
            throw new ApiError(400,"no ticket can have same last update time at current scenario max 10 users" +
                "in future this will be handled")
        }

        const ticketDb = await Ticket.create(
            {
                subject: ticket.subject,
                status: ticket.status,
                last_updated_on: ticket.last_updated_on,
                user_id: ticket.user_id,
                assigned_admin_id: ticket.assigned_admin_id,
                purchase_id: ticket.purchase_id,
            }
        )
        if (!ticketDb) {
            throw new ApiError(400,"Unable to create ticket")
        }
        return ticketDb;
    }
}
export default TicketRepositoryImplementation;