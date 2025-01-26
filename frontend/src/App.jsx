import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Register } from './pages/register/register.jsx';
import { Homepage } from './home/homepage.jsx';
import { Login } from './pages/login/login.jsx';
import {Forgot_Password} from './pages/forgot_password/forgot_password.jsx';
import { Reset_Password } from './pages/reset_password/reset_password.jsx';
import {User_dashboard} from './User-functionalities/User-dashboard.jsx';
import {Add_new_ticket} from './User-functionalities/add_new_ticket/Add_new_ticket.jsx';
import './App.css';
import {Verify} from "./pages/verify/verify.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot_Password />} />
        <Route path="/reset" element={<Reset_Password />} />
        <Route path="/user-dashboard" element={<User_dashboard />} />
        <Route path="/add_new_ticket" element={<Add_new_ticket />} />
      </Routes>
    </Router>
  );
}

export default App;
