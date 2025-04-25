import React, {useState} from "react";
import {Header_user_dashboard} from "../header";
import {Footer_all} from "../../home/footer_all";
import user_issue_data from "../../assets/user_table";
import './add_new_ticket.css';
import {Show_Hide} from "../show_hide.jsx";

export const Add_new_ticket = () => {
    const [userIssue, setUserIssue] = useState(user_issue_data);
    const [productImage, setProductImage] = useState(null);
    const [invoice, setInvoice] = useState(null);

    const [newTicket, setNewTicket] = useState({
        issue: "",
        description: "",
        invoice: null,
        product_image: null,
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setNewTicket((prev) => ({...prev, [name]: value}));
    };

    const handleFileChange = (e) => {
        const {name} = e.target;
        const file = e.target.files[0];

        if (name === "invoice") {
            setInvoice(file);
        } else if (name === "product_image") {
            setProductImage(file);
        }

        setNewTicket((prev) => ({...prev, [name]: file}));
    };

    const addTicket = async (e) => {
        e.preventDefault();

        if (newTicket.issue && newTicket.description) {
            try {
                const formData = new FormData();
                formData.append("subject", newTicket.issue);
                formData.append("description", newTicket.description);
                formData.append("uploadInvoice", invoice);
                formData.append("productImage", productImage);

                const response = await fetch("http://localhost:8000/api/v1/tickets/createTicket", {
                    method: "POST",
                    body: formData,
                    credentials: "include"
                });

                if (response.ok) {
                    const savedTicket = await response.json();
                    setUserIssue((prev) => [...prev, savedTicket]);
                    setNewTicket({
                        issue: "",
                        description: "",
                        invoice: null,
                        product_image: null,
                    });
                    setInvoice(null);
                    setProductImage(null);
                    alert("Ticket added successfully!");
                } else {
                    alert("Failed to save ticket. Please try again.");
                }
            } catch (error) {
                console.error("Error saving ticket:", error);
                alert("An error occurred while saving the ticket.");
            }
        } else {
            alert("Please fill in all fields!");
        }
    };

    return (
        <div className="form-container">
            <h2>Add New Ticket</h2>

            <form onSubmit={addTicket} className="ticket-form">

                <div className="input-row">
                    <div className="input-group">
                        <label>
                            Subject / Issue:
                            <input
                                type="text"
                                name="issue"
                                value={newTicket.issue}
                                onChange={handleInputChange}
                                placeholder="Type your issue"
                            />
                        </label>
                    </div>

                    <div className="input-group">
                        <label>
                            Description:
                            <textarea
                                name="description"
                                value={newTicket.description}
                                onChange={handleInputChange}
                                placeholder="Description of issue"
                            ></textarea>
                        </label>
                    </div>
                </div>



                <div>
                    <label>
                        Upload Product Image:
                        <input
                            type="file"
                            name="product_image"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Upload Invoice:
                        <input
                            type="file"
                            name="invoice"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </label>
                </div>

                <button className="submit-ticket" type="submit">Add Ticket</button>
            </form>
        </div>
    );
};
