import { useState, useEffect } from "react";
import axios from "axios";
import {AdminHeader} from "../Admin_header.jsx";
import {AdminFooter} from "../Admin_footer.jsx";

export const Ticket_table_admin = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get(
            "http://localhost:8000/api/v1/tickets/fetchAllTicketsAdmin",
            { withCredentials: true }
        );
        setTickets(response.data.data || []);
      } catch (error) {
        console.error("Failed to fetch tickets:", error);
      }
    };

    fetchTickets();
  }, []);

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
      <>

        <AdminHeader />
        <div className="table-container">
          <table className="issue-table">
            <thead>
            <tr>
              <th>ID</th>
              <th>SUBJECT / ISSUE</th>
              <th>STATUS</th>
              <th>LAST UPDATED ON</th>
              <th>IMAGE</th>
              <th>ACTION</th>
            </tr>
            </thead>
            <tbody>
            {tickets.map((issue, index) => (
                <tr key={issue._id}>
                  <td>{index + 1}</td>
                  <td>{issue.subject.toUpperCase()}</td>
                  <td>
                  <span
                      className={`status-tag ${
                          issue.status === "resolved" ? "resolved" : "not-resolved"
                      }`}
                  >
                    {issue.status.toUpperCase()}
                  </span>
                  </td>
                  <td>
                    {new Date(issue.lastUpdated)
                        .toLocaleString("en-US", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                          hour12: true,
                        })
                        .toUpperCase()}
                  </td>
                  <td>
                    {issue.productImageUrl ? (
                        <img
                            src={issue.productImageUrl}
                            alt="Ticket"
                            className="image-thumb"
                            onClick={() =>
                                window.open(issue.productImageUrl, "_blank")
                            }
                        />
                    ) : (
                        "No Image"
                    )}
                  </td>
                  <td>
                    {issue.status !== "resolved" && (
                        <a href="/chat" className="action-btn chat">
                          CHAT
                        </a>
                    )}
                    <button
                        onClick={() => handleDeleteClick(issue)}
                        className="action-btn delete">
                      DELETE
                    </button>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>

          {showModal && (
              <div className="modal-overlay">
                <div className="modal">
                  <h3>Confirm Delete</h3>
                  <p>
                    Are you sure you want to delete the ticket "
                    {selectedIssue?.subject}"?
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
          )}
        </div>
        <AdminFooter />
      </>
  );
};

