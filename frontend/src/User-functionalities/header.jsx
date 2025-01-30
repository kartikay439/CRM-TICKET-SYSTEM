import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import logo from '../assets/img/logo.png';
import axios from "axios";
import "./ticket_table.css"

// eslint-disable-next-line react/prop-types
export const Header_user_dashboard = ({dashboardView, profileView, feedbackForm, ticketForm}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const navigate = useNavigate();
    const setAllFalse = () => {
        dashboardView(false);
        profileView(false);
        feedbackForm(false);
        ticketForm(false);
    }

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
                        <img src={logo} alt="logo" className="logo"/>
                    </a>
                </div>
                <button
                    className="toggle-btn togbtn"
                    onClick={handleToggle}
                    aria-label="Toggle navigation"
                >
                    &#9776;
                </button>
                <div className="navItem">
                    <button className="nav-item" onClick={
                        () => {
                            setAllFalse();
                        }}>Home
                    </button>
                    <button className="nav-item" onClick={
                        () => {
                            setAllFalse();
                            dashboardView(true)
                        }}


                    >Dashboard
                    </button>
                    <button className="nav-item"
                            onClick={
                                () => {
                                    setAllFalse();
                                    ticketForm(true)
                                }}

                    >Add New Ticket
                    </button>
                    <button className="nav-item" onClick={
                        () => {
                            setAllFalse();
                            profileView(true)
                        }}>Profile
                    </button>
                    <button className="nav-item" onClick={signout}>Logout</button>
                    <button className="nav-item" onClick={
                        () => {
                            setAllFalse();
                            feedbackForm(true)
                        }}>Feedback</button>
                </div>
            </div>
        </nav>
    );
};
