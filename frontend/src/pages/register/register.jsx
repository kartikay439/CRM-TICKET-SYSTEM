import { React, useState } from 'react';
import "./Register.css";
import {Show_Hide} from './show_hide';
import styled from 'styled-components';
export const Register = () => {
 
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <>
 <StyledWrapper>
      <div className="container" >
  <div className="comp">
      <div className="card">
        <h5 className="register">Register</h5>
        
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
        <button type="submit" className="enter">Enter</button>
      </div>
      <div className="loglink">
          <p>Already have an account ?</p>
          <a href="/login">Login</a>
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
       background-color:#679ef8;
  }
    
  
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 25px;
    height:65vh;
    width: 350px;
    min-height: 450px;
    background: white; 
    border-radius: 12px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px); 
    -webkit-backdrop-filter: blur(10px); 
    border: 2px solid rgb(11, 10, 10);
    padding: 20px;
  }
  `;