import React, { useState } from 'react';
import styled from 'styled-components';

export const Forgot_Password = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResend = () => {
    alert('Reset password link resent!');
  };

  return (
      <StyledWrapper>
          <div className="container" >
        <div className="newsletter-form">
          <p className="heading">FORGOT PASSWORD</p>
          <p className="text">
            Enter Your Email Address To Get The Reset Password Link
          </p>
          {!submitted ? (
            <form className="form" onSubmit={handleSubmit}>
              <input
                required
                placeholder="Enter your email address"
                name="email"
                id="email"
                type="email"
              />
              <input defaultValue="Submit" type="submit" />
            </form>
          ) : (
            <div className="resend-container">
              <p className="success-message">Reset password link sent!</p>
              <button className="resend-button" onClick={handleResend}>
                Didn't receive the link? Resend
              </button>
            </div>
          )}
        </div>
        </div>
      </StyledWrapper>
  
  );
};


const StyledWrapper = styled.div`
  .container {
    width: 100%;
    height: 100%;
    background:#679ef8;
    @media (min-width: 270px) and (max-width: 400px) {
      height: 150vh;
      width: 150vw;
    }
    @media (min-width: 0px) and (max-width: 270px) {
      height: 400vh;
      width: 400vw;
    }
  }

  .newsletter-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 16px;
    font-family: Arial, sans-serif;
    background: white; 
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px); 
    border: 2px solid black;
  }

  .heading {
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    color: #000;
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }

  .text {
    text-align: center;
    font-weight: bold;
    color: black;
  }

  .newsletter-form input[type='email'] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid black; 
    border-radius: 8px;
    background-color:white;
    color: black;

    &::placeholder {
      color: black;
    }
    &:focus {
      outline: none;
      border: 1px solid black;
    }
  }

  .newsletter-form input[type='submit'] {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
      background-color: black;
     color: white;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease; /* Smooth hover effect */
    
  }

  .newsletter-form input[type='submit']:hover {
   transform:scale(1.05);
    background-color: black;
     color: white; 
  }

  .resend-container {
    text-align: center;
  }

  .success-message {
    font-weight: bold;
    color: yellow;
    margin-bottom: 10px;
  }

  .resend-button {
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
   background-color: #fff;
     color: #679ef8;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease; /* Smooth hover effect */
  }

  .resend-button:hover {
    background-color: #fff;
    color: #679ef8;
   transform:scale(1.1);
  }
`;
