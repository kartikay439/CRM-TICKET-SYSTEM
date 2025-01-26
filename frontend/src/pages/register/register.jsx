import { React, useState } from 'react';
import "./register.css";
import {Show_Hide} from './show_hide.jsx';
import styled from 'styled-components';
export const Register = () => {
 
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <>
 <StyledWrapper>
      <div className="container" >
  <div className="comp">
      <div className="card">
        <a className="register">Register</a>
        
        <div className="inputBox1">
          <input type="text" required="required"/>
          <span className="user">Email</span>
        </div>

        <div className="inputBox">
          <input type="text" required="required"/>
          <span>Username</span>
        </div>

        <div className="inputBox password-box">
          <input 
            type={passwordVisible ? "text" : "password"} 
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

        <button className="enter">Enter</button>
        <div className="loglink">
          <p>Already have an account ?</p>
          <a href="/login">Login</a>
        </div>
      </div>
    </div>
    </div>
    </StyledWrapper>
    <Show_Hide/>
    </>
  );
};

const StyledWrapper = styled.div`
  .container {
    width: 100%;
    height: 100%;
     background: repeating-radial-gradient(circle, rgb(26, 133, 233), rgb(104, 183, 230) 1em, white 1em, white 2em);
      background-size: 20px 20px;
  }
    
  
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 35px;
    width: 350px;
    min-height: 450px;
    background: rgba(255, 255, 255, 0); /* Semi-transparent background */
    border-radius: 12px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    backdrop-filter: blur(10px); /* Frosted glass effect */
    -webkit-backdrop-filter: blur(10px); /* Safari support */
    border: 1px solid rgba(255, 255, 255, 0.3); /* Border for glass effect */
    padding: 20px;
  }
  `;