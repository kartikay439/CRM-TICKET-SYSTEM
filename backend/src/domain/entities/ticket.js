class TicketData {

    constructor(subject, description, userId, productOnCloudinary, invoiceOnCloudinary) {
        this.subject = subject;
        this.description = description;
        this.productUrl = productOnCloudinary;
        this.invoiceUrl = invoiceOnCloudinary;
        this.userId = userId;
        console.log(" userid: " + userId);
    }
}

export default TicketData;
