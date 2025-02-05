import {useState } from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';
import logo from '../assets/img/logo.png';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Example user authentication state (Replace with actual logic)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" id="cap">Dashboard</Link>
            </>
          ) : (
            <>
              <Link to="/register" id="cap">Register</Link>
              <Link to="/login" id="cap">Login</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
