import { useState, useRef, useEffect } from "react";
import styled from 'styled-components';
export const Otp_Verify= () => {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30); // Countdown timer (in seconds)
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    if (isResendDisabled && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else if (timer === 0) {
      setIsResendDisabled(false);
    }
  }, [timer, isResendDisabled]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers

    if (value) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input
      if (index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      if (otp[index]) {
        // If there's a value, clear it
        newOtp[index] = "";
      } else if (index > 0) {
        // Move focus to the previous input
        inputRefs.current[index - 1]?.focus();
        newOtp[index - 1] = "";
      }

      setOtp(newOtp);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 4).replace(/[^0-9]/g, "");
    if (pastedData.length === 4) {
      setOtp(pastedData.split(""));
      inputRefs.current[3]?.focus(); // Move to last input after pasting
    }
  };

  const handleResend = () => {
    if (!isResendDisabled) {
      setTimer(30); // Reset timer
      setIsResendDisabled(true);
      console.log("OTP Resent!"); // Replace this with API call to resend OTP
    }
  };

    return(   
               <StyledWrapper>
                 <div className="container">
                 <form className="form">
      <div className="info">
        <span className="title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OTP Verification</span>
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
        <input type="hidden" name="otp" value={otp.join("")} />
      </div>
      <a className="validate" href="#">Verify</a>
      <p className="resend">Didn't recieved the OTP? <br />
        {isResendDisabled ? (
          <span>Resend OTP in {timer}s</span>
        ) : (
          <a className="resend-action" href="#" onClick={handleResend}>
            Resend OTP
          </a>
        )}
      </p>
    </form>
  </div>
      </StyledWrapper>
           
    )};


const StyledWrapper = styled.div`
    width: 100%;
    height: 100%;
     background: #679ef8;
  @media(min-width:270px) and (max-width:400px) {
  height:150vh;
  width:150vw;
}
 @media(min-width:0px) and (max-width:270px) {
  height:400vh;
  width:400vw;
} 
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 20px;
 background: white;  
    backdrop-filter: blur(10px); 
    -webkit-backdrop-filter: blur(10px);
    border: 2px solid black; 
  max-width: 320px;
  border-radius:15px;
}

.info {
  margin-bottom: 10px;
}

.title {
  color: black;
  font-size: 1.5rem;
  line-height: 1.8rem;
  font-weight: 800;
  letter-spacing: -0.025em;
}

.description {
  color: black;
  margin-top: 10px;
  font-size: 15px;
}

.form .inputs {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.form .inputs input {
  height: 2.5em;
  width: 2.5em;
  outline: none;
  text-align: center;
  font-size: 1.5em;
  color: black;
  border-radius: 0.3em;
  border: 1px solid rgba(15, 14, 14, 0.91);
  background-color: rgb(255 255 255 / 0.05);
}


.resend {
  color: black;
  margin-top: 10px;
  font-size: 15px;
  text-align: center;
}

.resend-action {
  text-decoration: none;
  cursor: pointer;
  margin-left: 6px;
  color: black;
  font-weight: 600;
}

.resend-action:hover {
  text-decoration: 1.5px underline black;
  color: black;
}

.validate {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  text-decoration: none;
  background-color: black;
  border:1.5px solid white;
  padding: 10px 20px;
  margin: 8px 0 0 0;
  font-size: 13px;
  font-weight: 600;
  border-radius: 10px;
  transition: .3s ease;
  color:white;
}

.validate:hover {
transform:scale(1.05);
  color:white;

}
`;