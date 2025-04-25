import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Header } from "../../home/header.jsx";
import { ErrorComponent } from "../error/error.jsx";

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [failed, setFailed] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (failed) {
            const timer = setTimeout(() => setFailed(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [failed]);

    const validateForm = () => {
        if (!email.includes("@")) {
            setError("Please enter a valid email address.");
            setFailed(true);
            return false;
        }
        if (password.length < 6) {
            setError("Password should be at least 6 characters long.");
            setFailed(true);
            return false;
        }
        setError("");
        return true;
    };

    const loginHandler = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        try {
            const response = await axios.post("/api/v1/user/signin", { email, password });
            if (response.status === 200) {
                if (response.data.statusCode === 200) {
                    setEmail("");
                    setPassword("");
                    navigate("/user-dashboard");
                } else {
                    setFailed(true);
                    setError(response.data.data);
                }
            }
        } catch (err) {
            setFailed(true);
            setError("Login failed. Please try again." + err);
        }
    };

    return (
        <StyledWrapper>
            <Header />
            <div className="login-page">
                <form className="form-container">
                    <h2>Login</h2>
                    <div className="input-group">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <div className="password-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>
                    <div className="forgot-password">
                        <p>Forgot Your Password?</p>
                        <a href="/forgot">Reset it here</a>
                    </div>
                    <button type="submit" className="submit-btn" onClick={loginHandler}>
                        Sign In
                    </button>
                    <div className="admin-link">
                        <button className="admin-btn" onClick={() => navigate("/register/admin")}>
                            Are you an Admin?
                        </button>
                    </div>
                    <p className="register-link">
                        Don’t have an account? <a href="/register">Register</a>
                    </p>
                    {failed && <ErrorComponent message={error} />}
                </form>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .login-page {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background-color: #f0f0f0;
    }

    .form-container {
        background-color: #ffffff;
        width: 400px;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        text-align: center;
    }

    h2 {
        margin-bottom: 20px;
        font-size: 28px;
        font-weight: bold;
        color: #333;
    }

    .input-group {
        margin-bottom: 15px;
        width: 100%;
    }

    input {
        width: 100%;
        padding: 12px;
        border-radius: 8px;
        border: 1px solid #ccc;
        font-size: 16px;
        outline: none;
        background-color: #f9f9f9;
    }

    .password-container {
        position: relative;
    }

    .toggle-password {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        background: transparent;
        border: none;
        cursor: pointer;
        color: #333;
    }

    .forgot-password {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        margin-top: 10px;
    }

    .forgot-password a {
        color: #0066cc;
        text-decoration: none;
    }

    .submit-btn {
        width: 100%;
        padding: 12px;
        background-color: #007bff;
        color: #fff;
        font-size: 18px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .submit-btn:hover {
        background-color: #0056b3;
    }

    .admin-link {
        margin-top: 20px;
    }

    .admin-btn {
        background-color: #ff5722;
        color: #fff;
        padding: 12px;
        width: 100%;
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }

    .admin-btn:hover {
        background-color: #e64a19;
    }

    .register-link {
        margin-top: 15px;
        font-size: 14px;
    }

    .register-link a {
        color: #007bff;
    }
`;

export default Login;
