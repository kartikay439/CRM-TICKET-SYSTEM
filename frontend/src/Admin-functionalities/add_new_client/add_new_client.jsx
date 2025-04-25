import { useState } from "react";
import axios from "axios";
import { AdminHeader } from "../Admin_header.jsx";
import { AdminFooter } from "../Admin_footer.jsx";
import './add_new_client.css';

export const Add_new_client = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile_number: "",
    company: "",
    total_order: "",
    order_id: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("api/v1/client/create", formData, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });

      alert("Client added successfully!");
      console.log(response.data);

      // Optional: clear form
      setFormData({
        name: "",
        address: "",
        mobile_number: "",
        company: "",
        total_order: "",
        order_id: ""
      });

    } catch (error) {
      console.error("Error adding client:", error);
      alert("Failed to add client.");
    }
  };

  return (
      <div className="add-client-wrapper">
        <AdminHeader />

        <div className="add-client-container">
          <h2 className="form-title">Add New Client</h2>
          <form className="client-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                  type="text"
                  name="name"
                  placeholder="Type your Name"
                  value={formData.name}
                  onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Address</label>
              <textarea
                  name="address"
                  placeholder="Enter Your Address"
                  value={formData.address}
                  onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <input
                  type="tel"
                  name="mobile_number"
                  placeholder="Type your Number"
                  value={formData.mobile_number}
                  onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Company</label>
              <input
                  type="text"
                  name="company"
                  placeholder="Type Company Name"
                  value={formData.company}
                  onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Total Order</label>
              <input
                  type="number"
                  name="total_order"
                  placeholder="Enter Total Order"
                  value={formData.total_order}
                  onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Order Id</label>
              <input
                  type="number"
                  name="order_id"
                  placeholder="Enter Order Id"
                  value={formData.order_id}
                  onChange={handleChange}
              />
            </div>

            <button className="submit-btn" type="submit">
              Add Client
            </button>
          </form>
        </div>

        <AdminFooter />
      </div>
  );
};
