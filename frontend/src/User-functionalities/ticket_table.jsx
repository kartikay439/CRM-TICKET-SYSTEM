import { useState, useEffect } from "react";
import axios from "axios";

export const Ticket_table = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get(
            "http://localhost:8000/api/v1/tickets/fetchAllTickets",
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
        <style>{`
        .table-container {
          margin: -12vh 3vw;
          border: 1px solid #ddd;
          border-radius: 8px;
          width: 94vw;
          max-height: 500px;
          overflow-y: auto;
          overflow-x: auto;
          position: relative;
        }
.image-thumb{
height: 10vw;
}
        .issue-table {
          width: 100%;
          font-family: Arial, sans-serif;
          font-weight: bold;
          border-collapse: collapse;
        }

        .issue-table thead {
          position: sticky;
          top: 0;
          z-index: 1;
        }

        .issue-table th,
        .issue-table td {
          padding: 12px;
          border-bottom: 8px solid #ffffff;
        }

        .issue-table th {
          background-color: #d2edf0;
          color: #333;
          text-transform: uppercase;
          font-size: 14px;
        }

        .issue-table tr {
          background-color: #efed85;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .issue-table .hov:hover {
          transform: scale(1.01);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .issue-table .resolved {
          color: green;
          font-weight: bold;
        }

        .issue-table .not-resolved {
          color: red;
          font-weight: bold;
        }

        .action {
          margin-right: 10px;
          cursor: pointer;
          font-size: 14px;
        }

        .action.chat {
          color: blue;
          font-weight: bold;
          text-decoration: none;
        }

        .action.delete {
          color: red;
          font-weight: bold;
          text-decoration: none;
        }

        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 10;
        }

        .modal {
          margin: 30vh 37vw;
          background-color: #fff;
          padding: 20px 30px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          width: 90%;
          max-width: 400px;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          height: 30vh !important;
        }

        .modal h3 {
          margin-bottom: 15px;
          font-size: 1.5em;
          font-weight: bold;
        }

        .modal p {
          margin-bottom: 20px;
          font-size: 1em;
          color: #555;
        }

        .modal-actions {
          display: flex;
          gap: 5vw;
          margin-left: 2vw;
        }

        .confirm-btn {
          background-color: #ff4d4d;
          color: white;
          border: none;
          border-radius: 5px;
          padding: 10px 20px;
          cursor: pointer;
          font-size: 1em;
        }

        .cancel-btn {
          background-color: #d3d3d3;
          color: black;
          border: none;
          border-radius: 5px;
          padding: 10px 20px;
          cursor: pointer;
          font-size: 1em;
        }

        .modal button {
          border: 2px solid black;
        }

        .confirm-btn:hover {
          transform: scale(1.1);
        }

        .cancel-btn:hover {
          transform: scale(1.1);
        }
      `}</style>

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
                        className="action-btn delete"
                    >
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
      </>
  );
};

