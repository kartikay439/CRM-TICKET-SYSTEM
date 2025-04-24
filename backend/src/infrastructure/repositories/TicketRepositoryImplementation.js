import TicketRepository from "../../domain/repositories/TicketRepository.js";
import {Ticket} from "../db/model/ticket.model.js";
import ApiError from "../../utils/ApiError.js";
import mongoose, {Mongoose} from "mongoose";
import ticket from "../../domain/entities/ticket.js";

class TicketRepositoryImplementation extends TicketRepository {
    //-------------------------------------------------------------------ADMIN-------------------------------------------------------------























    //-------------------------------------------------------------------USER-------------------------------------------------------------
    fetchAllTickets = async (userId) => {
        try {
            const tickets = await Ticket.find({ userId: userId });

            if (tickets.length === 0) {
                throw new Error("No tickets found for user with id " + userId);
            }

            console.log(tickets);  // Debugging
            return tickets;
        } catch (error) {
            console.error("Error fetching tickets:", error);
            throw error;  // Re-throw the error to be handled by the caller
        }
    }

    createTicket = async (ticket) => {
        console.log(ticket.userId + " in repo");

        const ticketDb = await Ticket.create(
            {
                subject: ticket.subject,
                description: ticket.description,
                productImageUrl: ticket.productUrl,
                invoiceImageUrl: ticket.invoiceUrl,
                userId: new mongoose.Types.ObjectId(ticket.userId),
            }
        )
        if (!ticketDb) {
            throw new ApiError(400, "Unable to create ticket")
        }
        return ticketDb;
    }
}

export default TicketRepositoryImplementation;