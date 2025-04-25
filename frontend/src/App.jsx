import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Register } from './pages/register/register';
import { Homepage } from './home/homepage';
import { Login } from './pages/login/login';
import {Forgot_Password} from './pages/forgot_password/forgot_password';
import { Reset_Password } from './pages/reset_password/reset_password';
import {User_dashboard} from './User-functionalities/User-dashboard';
import {Add_new_ticket} from './User-functionalities/add_new_ticket/Add_new_ticket';
import {Profile} from "./User-functionalities/profile/profile";
import { Otp_Verify } from './pages/otp/otp_verify';
import { Email } from './pages/otp/email';
import {Feedback} from './User-functionalities/feedback/feedback';
import {AdminRegister} from './Admin_Pages/AdminRegister';
import {AdminLogin} from './Admin_Pages/AdminLogin';
import {AdminDashboard} from './Admin-functionalities/Admin_dashboard';
import {AdminProfile} from './Admin-functionalities/Admin-profile/Admin_Profile';
import {Add_new_client} from './Admin-functionalities/add_new_client/add_new_client.jsx';
import { Client_Analytics } from './Admin-functionalities/Client_Analytics/client_analytics';
import { Ticket_table_admin} from "../src/Admin-functionalities/add_new_client/ticket_table_admin.jsx";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/ticket-table" element=< Ticket_table_admin />/>

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp-verify" element={<Otp_Verify />} />
          <Route path="/forgot" element={<Forgot_Password />} />
          <Route path="/reset" element={<Reset_Password />} />
          <Route path="/user-dashboard" element={<User_dashboard />} />
          <Route path="/add_new_ticket" element={<Add_new_ticket />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/feedback" element={<Feedback/>} />
          <Route path="/email" element={<Email/>} />
          <Route path="/register/admin" element={<AdminRegister/>} />
          <Route path="/login/admin" element={<AdminLogin/>} />
          <Route path="/admin-dashboard" element={<AdminDashboard/>} />
          <Route path="/admin-profile" element={<AdminProfile/>} />
          <Route path="/add_new_client" element={<Add_new_client/>} />
          <Route path="/client_analytics" element={<Client_Analytics/>}/>
        </Routes>
      </Router>
  );
}

export default App;
