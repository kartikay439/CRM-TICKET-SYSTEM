import { React, useState } from 'react';
import "./Register.css";
import {Show_Hide} from './show_hide';

export const Register = () => {
 
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <>
 <div className="container">
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
    <Show_Hide/>
    </>
  );
};
