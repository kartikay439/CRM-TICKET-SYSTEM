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
            throw ApiError("Unable to create ticket", ticket)
        }
        return ticketDb;
    }
}
export default TicketRepositoryImplementation;