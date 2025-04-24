import { useState, useRef, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const Otp_Verify = () => {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");


  const navigate = useNavigate();

  useEffect(() => {
    if (isResendDisabled && timer > 0) {
      const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setIsResendDisabled(false);
    }
  }, [timer, isResendDisabled]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < otp.length - 1) inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      if (otp[index]) {
        newOtp[index] = "";
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
        newOtp[index - 1] = "";
      }
      setOtp(newOtp);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const data = e.clipboardData.getData("text").slice(0, 4).replace(/[^0-9]/g, "");
    if (data.length === 4) {
      setOtp(data.split(""));
      inputRefs.current[3]?.focus();
    }
  };

  const handleResend = () => {
    if (!isResendDisabled) {
      setTimer(30);
      setIsResendDisabled(true);
      console.log("OTP Resent!"); // Replace with actual resend logic
    }
  };

  const handleSubmitVerify = async (e) => {
    e.preventDefault();

    const enteredOtp = otp.join("");

    if (!enteredOtp || enteredOtp.length < 4) {
      setErrorMessage("Please enter complete 4-digit OTP.");
      return;
    }

    try {
      const response = await axios.post("/api/v1/user/verify", { otp: enteredOtp });

      if (response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      if (error.isAxiosError) {
        const { response } = error;

        if (response) {
          const { status } = response;

          if (status === 400) {
            setErrorMessage("Incorrect OTP. Please try again.");
          } else if (status === 401) {
            setErrorMessage("Unauthorized. Please log in again.");
          } else if (status === 404) {
            setErrorMessage("User not found.");
          } else {
            setErrorMessage("Something went wrong. Try again later.");
          }
        } else {
          setErrorMessage("Network error. Please check your internet.");
        }
      } else {
        setErrorMessage("Unexpected error occurred.");
      }

      console.error("OTP verification error:", error);
    }
  };


  return (
      <StyledWrapper>
        <div className="container">
          <form className="form" onSubmit={handleSubmitVerify}>
            <div className="info">
              <span className="title">OTP Verification</span>
              <p className="description">Please enter the code we have sent you.</p>
            </div>
            <div className="inputs" onPaste={handlePaste}>
              {otp.map((digit, index) => (
                  <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="tel"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                  />
              ))}
            </div>
            {errorMessage && <p style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</p>}

            <button type="submit" className="validate">Verify</button>
            <p className="resend">
              {"Didn't receive the OTP?"} <br />
              {isResendDisabled ? (
                  <span>Resend OTP in {timer}s</span>
              ) : (
                  <a className="resend-action" onClick={handleResend}>Resend OTP</a>
              )}
            </p>
          </form>
        </div>
      </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #679ef8;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  .form {
    background: white;
    border: 2px solid black;
    border-radius: 15px;
    padding: 20px;
    max-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 10px;
  }

  .description {
    font-size: 15px;
    margin-bottom: 15px;
  }

  .inputs {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
  }

  .inputs input {
    width: 2.5em;
    height: 2.5em;
    font-size: 1.5em;
    text-align: center;
    border: 1px solid black;
    border-radius: 5px;
  }

  .validate {
    background-color: black;
    color: white;
    padding: 10px 20px;
    border: 1.5px solid white;
    border-radius: 10px;
    font-weight: 600;
    transition: 0.3s ease;
    cursor: pointer;
  }

  .validate:hover {
    transform: scale(1.05);
  }

  .resend {
    margin-top: 10px;
    text-align: center;
  }

  .resend-action {
    cursor: pointer;
    font-weight: 600;
    text-decoration: underline;
  }
`;
