import React, { useState, useEffect } from "react";
import axios from "axios";
import './Admin_dashboard.css';

export const Dashboard_Table = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch clients from backend
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get("api/v1/client/all");
        if (Array.isArray(response.data.data)) {
          setClients(response.data.data); // Set clients data only if it's an array
        } else {
          console.error("Invalid response format");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching clients:", error);
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  return (
      <div className="table-container">
        {loading ? (
            <p>Loading...</p>
        ) : (
            <table className="issue-table">
              <thead>
              <tr>
                <th>Order ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Mobile Number</th>
                <th>Company</th>
                <th>Total Orders</th>
              </tr>
              </thead>
              <tbody>
              {clients.map((client) => (
                  <tr key={client.order_id}>
                    <td>{client.order_id}</td>
                    <td>{client.name}</td>
                    <td>{client.address}</td>
                    <td>{client.mobile_number}</td>
                    <td>{client.company}</td>
                    <td>{client.total_order}</td>
                  </tr>
              ))}
              </tbody>
            </table>
        )}

        {showModal && (
            <div className="modal-overlay">
              <div className="modal">
                <h3>Confirm Delete</h3>
                <p>Are you sure you want to delete the client "{selectedClient?.name}"?</p>
                <div className="modal-actions">
                  <button className="confirm-btn" onClick={() => setShowModal(false)}>
                    Confirm
                  </button>
                  <button className="cancel-btn" onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
        )}
      </div>
  );
};
