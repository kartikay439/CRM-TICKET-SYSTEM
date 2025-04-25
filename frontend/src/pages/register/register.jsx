import { useState } from 'react';
import { Show_Hide } from './show_hide.jsx';
import { Header } from "../../home/header.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './register.css';  // Importing the CSS file

export const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/v1/user/signup", {
                email: email,
                password: password,
                name: name,
            });
            console.log(response.status);
            if (response.status === 200) {
                navigate("/otp-verify");
            }
        } catch (error) {
            console.error("Error during signup:", error);
            alert("Signup failed. Please try again.");
        }
    };

    const hasAccess = async () => {
        try {
            const response = await axios.get("/api/v1/user/hasAccess");
            console.log(response.status);
            if (response.data.statusCode === 200) {
                navigate("/user-dashboard");
            } else {
                navigate("/login");
            }
        } catch (error) {
            console.log("Error during signup:", error);
            alert("Goodbye, Tata!");
            navigate("/login");
        }
    }

    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <>
            <Header />
            <div className="container-register-user">
                <div className="card">
                    <h1 className="register">Register</h1>

                    <div className="inputBox1">
                        <input type="text" onChange={(e) => setEmail(e.target.value)} required="required"/>
                        <span className="user">Email</span>
                    </div>

                    <div className="inputBox">
                        <input type="text" onChange={(e) => setName(e.target.value)} required="required"/>
                        <span>Username</span>
                    </div>

                    <div className="inputBox password-box">
                        <input
                            type={passwordVisible ? "text" : "password"}
                            onChange={(e) => setPassword(e.target.value)}
                            required="required"
                        />
                        <span>Password</span>
                        <button
                            type="button"
                            className="password-toggle"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                        >
                            {passwordVisible ? 'Hide' : 'Show'}
                        </button>
                    </div>

                    <button className="enter" onClick={submit}>Enter</button>

                    <div onClick={hasAccess} className="loglink">
                        <h1>
                            Already have an account? Login
                        </h1>
                    </div>
                    <button className="admin-goto" onClick={() => navigate("/register/admin")}>Are You Admin</button>
                    <h1></h1>
                </div>
            </div>
            <Show_Hide />
        </>
    );
};
