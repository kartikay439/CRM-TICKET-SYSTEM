import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

export const Header_user_dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Example user authentication state (Replace with actual logic)
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="custom-nav">
      <div className="nav-container">
        <div className="brand">
          <a href="#home">
            <img src={logo} alt="logo" className="logo" />
          </a>
        </div>
        <button
          className="toggle-btn togbtn"
          onClick={handleToggle}
          aria-label="Toggle navigation"
        >
          &#9776;
        </button>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" id="cap">Home</Link>
          <Link to="/user-dashboard" id="cap">Dashboard</Link>
              <Link to="/add_new_ticket" id="cap">Add New Ticket</Link>
              <Link to="/profile" id="cap">Profile</Link>
              <Link to="/logout" id="cap">Logout</Link>
              <Link to="/feedback" id="cap">Feedback</Link>
        </div>
      </div>
    </nav>
  );
};
