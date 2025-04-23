import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin_dashboard.css';
import '../User-functionalities/logout.css'
import logo from '../assets/img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export const AdminHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
     const [showLogoutModal, setShowLogoutModal] = useState(false);
   
     const handleToggle = () => {
       setIsOpen(!isOpen);
     };
   
     const handleLogout = () => {
       console.log("User logged out");
       window.location.href = "/login/admin"; 
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
             <Link to="/" id="cap">Home</Link>
             <Link to="/admin-dashboard" id="cap">Dashboard</Link>
                 <Link to="/add_new_client" id="cap">Add New Client</Link>
                 <Link to="/admin-profile" id="cap">Profile</Link>
                 <a href="#logout" id="cap" onClick={(e) => {e.preventDefault(); setShowLogoutModal(true);}} >Logout</a>
           </div>
         </div>
       </nav>
       {/* Logout Confirmation Modal */}
       {showLogoutModal && (
         <div className="modal-overlay">
           <div className="modal-content">
             <h2>Are you sure?</h2>
             <p>Do you really want to logout?</p>
             <div className="modal-buttons">
               <button
                 className="button-no"
                 onClick={() => setShowLogoutModal(false)}
               >
                 No
               </button>
               <button className="button-yes" onClick={handleLogout}>
                 Yes
               </button>
             </div>
           </div>
         </div>
       )}
      </div>
     );
   };
   