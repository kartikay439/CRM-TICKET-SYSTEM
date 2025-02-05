import {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Header} from "../../home/header.jsx";
import {ErrorComponent} from "../error/error.jsx";

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("no");
    const [failed, setFailed] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (failed) {
            const timer = setTimeout(() =>
                setFailed(false),
                5000);
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
console.log("not valid");
            return;

        }


        try {
            console.log("REQUEST SEND");

            const response = await axios.post("/api/v1/user/signin",
                {email, password}
            );
            console.log(response.data)

            if (response.status === 200) {

                if (response.data.statusCode === 200) {
                    setEmail("");
                    setPassword("");
                    navigate("/user-dashboard");
                }
                else {
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
            <Header/>
            <div className="container">
                <form className="form-contro">
                    <p className="title">Login</p>
                    {/*<div className="error-container">*/}
                    {/*    {error && <p className="error-message">{error}</p>}*/}
                    {/*</div>*/}
                    <div className="input-field">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-field">
                        <div className="password-group">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                    <div className="forgot">
                        <p>Forgot Your Password?</p>
                        <a href="/forgot">Sorry I Forgot</a>
                    </div>
                    <button type="submit" className="submit-btn" onClick={loginHandler}>Sign In</button>
                    <p className="register-link">
                        Don t have an account?
                        <a href="/register">Register</a>
                    </p>
                </form>

                {/*<ErrorComponent message="hello" />*/}
                {failed ? <ErrorComponent message={error}/> : <></>}
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
    }

    .form-contro {
        background-color: #679ef8;
        width: 400px;
        padding: 25px;
        border-radius: 12px;
        box-shadow: 0 4px 60px #679ef8;
        backdrop-filter: blur(10px);
        text-align: center;
    }

    .title {
        font-size: 32px;
        font-weight: bold;
    }

    .error-container {
        min-height: 20px; /* Prevents form shifting */
        margin-bottom: 10px;
    }

    .error-message {
        border: #1a1a1a 2px solid;
        color: red;
        font-size: 14px;
    }

    .input-field {
        margin-bottom: 15px;
    }

    .form-control {
        width: 100%;
        height: 45px;
        padding-left: 10px;
        border: 1.5px solid black;
        border-radius: 8px;
        outline: none;
    }

    .password-group {
        display: flex;
        align-items: center;
        position: relative;
    }

    .toggle-password {
        position: absolute;
        right: 10px;
        background: black;
        color: white;
        border-radius: 5px;
        padding: 5px;
        cursor: pointer;
        font-size: 14px;
    }

    .forgot {
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        margin-top: 10px;
    }

    .forgot a {
        color: black;
    }

    .submit-btn {
        width: 100%;
        height: 45px;
        margin-top: 15px;
        background: linear-gradient(180deg, #363636, #000);
        color: #fff;
        border: none;
        border-radius: 12px;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
    }

    .submit-btn:hover {
        box-shadow: 0px 0px 5px 2px #ffffff;
    }

    .register-link {
        margin-top: 15px;
        font-weight: bold;
    }

    .register-link a {
        color: black;
    }


`;
