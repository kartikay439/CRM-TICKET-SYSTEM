const fetchTickets = async (ticketRepo,userId) => {
    return await ticketRepo.fetchAllTiket(userId);
}