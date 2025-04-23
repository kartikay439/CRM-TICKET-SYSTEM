import React, { useState } from "react";
import {AdminHeader} from "../Admin_header.jsx";
import { AdminFooter } from "../Admin_footer.jsx";
import user_issue_data from "../../assets/user_table"; 

export const Add_new_client = () => {
 const [userIssue, setUserIssue] = useState(user_issue_data); // Initializing with imported data
  const [productImage, setProductImage] = useState(null);
  const [invoice, setInvoice] = useState(null);
  const [newTicket, setNewTicket] = useState({
    issue: "",
    description: "",
    invoice: null,
    product_image: null,
  });

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTicket((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];

    if (name === "invoice") {
      setInvoice(file);
    } else if (name === "product_image") {
      setProductImage(file);
    }

    setNewTicket((prev) => ({ ...prev, [name]: file }));
  };

  // Function to add a new ticket
  const addTicket = async (e) => {
    e.preventDefault(); // Prevent form reload

    if (newTicket.issue && newTicket.description) {
      try {
        const formData = new FormData();
        formData.append("issue", newTicket.issue);
        formData.append("description", newTicket.description);
        formData.append("invoice", invoice);
        formData.append("product_image", productImage);

        const response = await fetch("http://localhost:5000/api/tickets", {
          method: "POST",
          body: formData,
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
    <div className="contain">
      <div className="form-container">
        <h2>Add New Client</h2>

        <form onSubmit={addTicket} className="ticket-form">
          <div>
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
          <div>
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

          <button type="submit">Add Ticket</button>
        </form>
      </div>
    <div className="main-admin">
    <AdminHeader/>
    <AdminFooter/>
    </div>
    </div>
  );
};
