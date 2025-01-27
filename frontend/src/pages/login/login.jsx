import {useState} from 'react';
import styled from 'styled-components';
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/v1/user/signin",
                {
                    email,
                    password,
                }
            )
            if (response.status === 200) {
                navigate("/");
            }
        } catch (error) {
            alert("You are genius");
            console.log(error);
        }
    }

    return (
        <StyledWrapper>
            <div className="container">
                <form className="form-control">
                    <p className="title">Login</p>
                    <div className="input-field">
                        <input required className="input" type="text" onChange={(e) => setEmail(e.target.value)}/>
                        <label className="label" htmlFor="email">Enter Email</label>
                    </div>
                    <div className="input-field">
                        <input
                            required
                            className="input"
                            type={showPassword ? 'text' : 'password'}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="label" htmlFor="password">Enter Password</label>
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                    <div className="forgot">
                        <p>Forgot Your Password ?</p>
                        <a href="/forgot">Sorry I Forgot</a>
                    </div>
                    <button className="submit-btn" onClick={loginHandler}>Sign In</button>
                    <p className="register-link">
                        {/*Don't have an account? */}
                        <a href="/register">Register</a>
                    </p>
                </form>
            </div>
        </StyledWrapper>
    );
};


const StyledWrapper = styled.div`
    .container {
        width: 100%;
        height: 100%;
        background: repeating-radial-gradient(circle, rgb(26, 133, 233), rgb(104, 183, 230) 1em, white 1em, white 2em);
        background-size: 20px 20px;

        @media (min-width: 270px) and (max-width: 400px) {
            height: 150vh;
            width: 150vw;
        }
        @media (min-width: 0px) and (max-width: 270px) {
            height: 400vh;
            width: 400vw;
        }
    }

    .forgot {
        display: flex;
        gap: 5px;
        font-weight: bold;
        transform: translate(15px, 25px);
    }

    .forgot a {
        color: black
    }

    .form-control {

        width: 400px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        padding: 25px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0); /* Semi-transparent background */
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* Subtle shadow */
        backdrop-filter: blur(10px); /* Frosted glass effect */
        -webkit-backdrop-filter: blur(10px); /* Safari support */
        border: 1px solid rgba(255, 255, 255, 0.3); /* Border for glass effect */
    }

    .title {
        font-size: 40px;
        font-weight: 800;
        text-align: center;
        transform: translateY(20px);
    }

    .input-field {
        position: relative;
        width: 100%;
    }

    .input {
        margin-top: 15px;
        width: 100%;
        outline: none;
        border-radius: 8px;
        height: 45px;
        border: 1.5px solid black;
        background: white;
        padding-left: 10px;
    }

    .input:focus {
        border: 1.5px solid white;
    }

    .input-field .label {
        position: absolute;
        top: 25px;
        left: 15px;
        color: black;
        transition: all 0.3s ease;
        pointer-events: none;
        z-index: 2;
    }

    .input-field .input:focus ~ .label,
    .input-field .input:valid ~ .label {
        top: 5px;
        left: 5px;
        font-size: 12px;
        color: white;
        background-color: black;
        padding-left: 5px;
        padding-right: 5px;
    }

    .toggle-password {
        position: absolute;
        right: 10px;
        top: 22px;
        background: black;
        color: white;
        border-radius: 5px;
        height: 30px;
        width: 70px;
        cursor: pointer;
        font-size: 14px;
        outline: none;
        padding: 2px 5px;

        &:hover {
            border: 1px solid white;
        }
    }

    .submit-btn {
        margin-top: 30px;
        height: 55px;
        background: #f2f2f2;
        border-radius: 11px;
        border: 0;
        outline: none;
        color: #ffffff;
        font-size: 18px;
        font-weight: 700;
        background: linear-gradient(180deg, #363636 0%, #1b1b1b 50%, #000000 100%);
        box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #000000;
        transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
        cursor: pointer;
    }

    .submit-btn:hover {
        box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #0000003a;
    }

    .register-link {
        text-align: center;
        margin-top: 15px;
        color: black;
        font-weight: bold;
    }

    .register-link a {
        color: black;
    }
`;
