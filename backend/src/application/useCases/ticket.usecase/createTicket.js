const createTicket =async (ticket,ticketRepo) => {
    return await ticketRepo.createTicket(ticket);
}