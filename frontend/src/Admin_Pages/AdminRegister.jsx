import { React, useState } from 'react';
import styled from 'styled-components';
import './AdminRegister.css';
import { useNavigate } from 'react-router-dom';
export const AdminRegister = () => {
     const [passwordVisible, setPasswordVisible] = useState(false);
     const navigate = useNavigate();
    return(
        <div className="main">
        <StyledWrapper>    
        <form className="form">
          <p id="heading"><b>REGISTER</b></p>
          <div className="field">
            <svg className="input-icon"  width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M16 5.5C16 8.53757 13.5376 11 10.5 11H7V13H5V15L4 16H0V12L5.16351 6.83649C5.0567 6.40863 5 5.96094 5 5.5C5 2.46243 7.46243 0 10.5 0C13.5376 0 16 2.46243 16 5.5ZM13 4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4Z" fill="#000000"></path> </g></svg>
            <input autoComplete="off" placeholder="Secret Code" className="input-field" type="number" />
          </div>
          <div className="field">
            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
            </svg>
            <input autoComplete="off" placeholder="Username" className="input-field" type="text" />
          </div>
          <div className="field">
         <svg
  className="input-icon "
  width={16}
  height={16}
   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#080341"></path>
    </g></svg>
            <input placeholder="Email" className="input-field" type="email" />
          </div>
          <div className="field password-box">
            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
            </svg>
            <input  type={passwordVisible ? "text" : "password"} placeholder="Password" className="input-field" />
            <button 
            type="button" 
            className="password-toggle hover-hide"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? 'Hide' : 'Show'}
          </button>
          </div>
          <div className="btn">
            <button className="button1" onClick={() => navigate('/login/admin')}>Login</button>
            <button className="button2" onClick={() => navigate("/register/admin")}>Register</button>
          </div>
          <button className="button3" onClick={()=> navigate("/forgot")}>Forgot Password</button>
        </form>
      </StyledWrapper>
      </div>
    );
  }
  
  const StyledWrapper = styled.div`

    .form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding-left: 2em;
      padding-right: 2em;
      padding-bottom: 0.4em;
      background-color: white;
      border-radius: 25px;
      transition: .4s ease-in-out;
      border: 2px solid black;
    }
  
    .form:hover {
      transform: scale(1.05);
      border: 2px solid black;
    }
    #heading {
      text-align: center;
      margin-top: 1em;
      color: black
      font-size: 1.2em;
      font-weight: bold;
    }
      .form p b{ font-size:25px;}
  
    .field {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5em;
      border-radius: 25px;
      padding: 0.6em;
      border: 2px solid black;
      outline: none;
      color: black;
      background-color: white;
  
    }
  
    .input-icon {
      height: 1.3em;
      width: 1.3em;
      fill: black;
    }
  
    .input-field {
      background: none;
      border: none;
      outline: none;
      width: 100%;
      color: black;
    }
  
    .form .btn {
      display: flex;
      justify-content: center;
      flex-direction: row;
      margin-top: 2em;
    }
  button a{
  text-decoration: none;
  color:black;
  }
    .button1 {
      padding: 0.5em;
      padding-left: 2.3em;
      padding-right: 2.3em;
      border-radius: 5px;
      margin-right: 0.5em;
      border: 2px solid black;
      outline: none;
      transition: .4s ease-in-out;
      background-color:white;
      color: black;
    }
  
    .button1:hover {
      background-color: white;
      color: black;
    }
  
    .button2 {
      padding: 0.5em;
      padding-left: 2.3em;
      padding-right: 2.3em;
      border-radius: 5px;
      border: 2px solid black;
      outline: none;
      transition: .4s ease-in-out;
      background-color: white;
      color: black;
    }
  
    .button2:hover {
      background-color: white;
      color: black;
    }
  
    .button3 {
      margin-bottom: 3em;
      padding: 0.5em;
      border-radius: 5px;
       border: 2px solid black;
      outline: none;
      transition: .4s ease-in-out;
      background-color: white;
      color: black;
    }
  
    .button3:hover {
      background-color: red;
      color: white;
    }`;