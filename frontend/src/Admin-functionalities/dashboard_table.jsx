import React, { useState } from "react";
import './Admin_dashboard.css';
export const Dashboard_Table = () => {
const [showModal, setShowModal] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState(null);

  const handleDeleteClick = (issue) => {
    setSelectedIssue(issue);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    console.log(`Deleting issue: ${selectedIssue.name}`);
    setShowModal(false);
    setSelectedIssue(null);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setSelectedIssue(null);
  };
  return (
    <>
            {/* experiment table */}
            <div className="table-container">
            <table className="issue-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Mobile Number</th>
                  <th>Company</th>
                  <th>Total Order</th>
                  <th>Order Id</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hov">
                  <td>Anubhav Industries</td>
                  <td>123 Industrial Park, Mumbai</td>
                  <td>9876543210</td>
                  <td>Anubhav Corp</td>
                  <td>50</td>
                  <td>1001</td>
                  <td>
                    <a href="/chat" className="action chat">
                      CHAT
                    </a>
                    <span
                      onClick={() =>
                        handleDeleteClick({
                          name: 'Anubhav Industries',
                          id: 1,
                        })
                      }
                      className="action delete"
                    >
                      DELETE
                    </span>
                  </td>
                </tr>
                <tr className="hov">
                  <td>Tech Solutions</td>
                  <td>456 Tech Hub, Bangalore</td>
                  <td>9123456789</td>
                  <td>Tech Ltd</td>
                  <td>30</td>
                  <td>1002</td>
                  <td>
                    <a href="/chat" className="action chat">
                      CHAT
                    </a>
                    <span
                      onClick={() =>
                        handleDeleteClick({
                          name: 'Tech Solutions',
                          id: 2,
                        })
                      }
                      className="action delete"
                    >
                      DELETE
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            {showModal && (
              <>
                <div className="modal-overlay">
                  <div className="modal">
                    <h3>Confirm Delete</h3>
                    <p>Are you sure you want to delete the ticket "{selectedIssue?.name}"?</p>
                    <div className="modal-actions">
                      <button className="confirm-btn" onClick={handleConfirmDelete}>
                        Confirm
                      </button>
                      <button className="cancel-btn" onClick={handleCancelDelete}>
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </>              
        //   end experiment table
  )};