import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import axios from "axios";

export const Header_user_dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const navigate = useNavigate();

    const signout = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/v1/user/signout"); // Removed extra `signout`
            if (response.status === 200) {
                navigate("/");
            }
        } catch (error) {
            alert("Unable to logout:", error.message); // Improved error handling
        }
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
                    <button onClick={signout} id="cap" className="logout-btn">Logout</button> {/* Replaced with button */}
                    <Link to="/feedback" id="cap">Feedback</Link>
                </div>
            </div>
        </nav>
    );
};
