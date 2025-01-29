class TicketData {
    constructor({subject, status, last_updated_on, user_id, assigned_admin_id, purchase_id }) {
        this.subject = subject;
        this.status = status || "open"; // Default status
        this.last_updated_on = last_updated_on || new Date();
        this.user_id = user_id;
        this.assigned_admin_id = assigned_admin_id;
        this.purchase_id = purchase_id;
    }
}

export default TicketData;
