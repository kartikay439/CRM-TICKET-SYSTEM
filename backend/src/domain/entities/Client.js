class Client {
    constructor(name, address, mobile_number, company, total_order, order_id, userId) {
        this.name = name;
        this.address = address;
        this.mobile_number = mobile_number;
        this.company = company;
        this.total_order = total_order;
        this.order_id = order_id;
        this.user = userId; // Assuming you store client for a user
    }
}

export default Client;
