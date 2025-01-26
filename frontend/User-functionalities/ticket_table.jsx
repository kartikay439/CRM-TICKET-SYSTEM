import React, { useState } from "react";
import user_issue from "../assets/user_table";
import "./ticket_table.css";

export const Ticket_table = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState(null);

  const handleDeleteClick = (issue) => {
    setSelectedIssue(issue);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    console.log("Issue deleted:", selectedIssue); // Replace with actual delete logic
    setShowModal(false);
    setSelectedIssue(null);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setSelectedIssue(null);
  };

  return (
    <div className="table-container">
      <table className="issue-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>SUBJECT / ISSUE</th>
            <th>STATUS</th>
            <th>LAST UPDATED ON</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {user_issue.map((issue, index) => (
            <tr className="hov" key={issue.id}>
              <td>{index + 1}.</td>
              <td>{issue.issue.toUpperCase()}</td>
              <td
                className={
                  issue.status === "resolved" ? "resolved" : "not-resolved"
                }
              >
                {issue.status.toUpperCase()}
              </td>
              <td>
                {new Date(issue.last_updated_on).toLocaleString("en-US", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                }).toUpperCase()}
              </td>
              <td>
                {issue.status !== "resolved" && (
                  <a href="/chat" className="action chat">
                    CHAT
                  </a>
                )}
                <span
                  onClick={() => handleDeleteClick(issue)}
                  className="action delete"
                >
                  DELETE
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
  <>
    {console.log("Modal Visible:", showModal)} {/* Debugging */}
    <div className="modal-overlay">
      <div className="modal">
        <h3>Confirm Delete</h3>
        <p>
          Are you sure you want to delete the ticket "
          {selectedIssue?.issue}"?
        </p>
        <div className="modal-actions">
          <button onClick={handleConfirmDelete} className="confirm-btn">
            Confirm
          </button>
          <button onClick={handleCancelDelete} className="cancel-btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </>
)}
    </div>
  );
};
