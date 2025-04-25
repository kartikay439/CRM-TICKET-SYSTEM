import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Admin_dashboard.css';
import '../User-functionalities/logout.css'
import logo from '../assets/img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from "axios";
export const AdminHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
     const [showLogoutModal, setShowLogoutModal] = useState(false);
   
     const handleToggle = () => {
       setIsOpen(!isOpen);
     };
const  navigate = useNavigate();
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
       <div className="homepage">
       <nav className="custom-nav-admin">
         <div className="nav-container">
           <div className="brand">
             <a href="#home">
               <img src={logo} alt="logo" className="hlogo" />
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
             <Link to="/admin-dashboard" id="cap">Dashboard</Link>
                 <Link to="/add_new_client" id="cap">Add New Client</Link>
                 <Link to="/ticket-table" id="cap">Tickets</Link>
                 <Link to="/client_analytics" id="cap">Client Analytics</Link>
                 {/*<Link to="/admin-profile" id="cap">Profile</Link>*/}
                 <a href="#logout" id="cap" onClick={(e) => {e.preventDefault(); setShowLogoutModal(true);}} >Logout</a>
           </div>
         </div>
       </nav>
       {/* Logout Confirmation Modal */}
           {showLogoutModal && (
                   <div className="modal-content">
                       <h2>Are you sure?</h2>
                       <p>Do you really want to logout?</p>
                       <div className="modal-buttons">
                           <button className="button-no" onClick={() => setShowLogoutModal(false)}>
                               No
                           </button>
                           <button className="button-yes" onClick={signout}>
                               Yes
                           </button>
                       </div>
                   </div>
           )}

      </div>
     );
   };
   