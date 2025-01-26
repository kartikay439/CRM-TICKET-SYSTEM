import {useState } from 'react';
import "./register.css";
import {Show_Hide} from './show_hide.jsx';
import styled from 'styled-components';
import axios from "axios";
import {useNavigate} from "react-router-dom";
export const Register = () => {
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const navigate =useNavigate();


  const submit =async (e)=>{

    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/user/signup", {
        email: email,
        password: password,
        name: name,
      });
      console.log(response.status);

      if (response.status === 200) {
        navigate("/verify");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Signup failed. Please try again.");
    }
  };

  const hasAccess = async () => {
    try {
      const response = await axios.get("/api/v1/user/hasAccess")
      console.log(response.status);
      navigate("/");

    }catch(error){
      console.log("Error during signup:", error);
      alert("good bye tata");
      navigate("/login");
    }


  }

  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <>
 <StyledWrapper>
      <div className="container" >
  <div className="comp">
      <div className="card">
        <a className="register">Register</a>
        
        <div className="inputBox1">
          <input type="text" onChange={(e)=>{
            setEmail(e.target.value);
          }} required="required"/>
          <span className="user">Email</span>
        </div>

        <div className="inputBox">
          <input onChange={(e)=>{setName(e.target.value)}} type="text" required="required"/>
          <span>Username</span>
        </div>

        <div className="inputBox password-box">
          <input
              onChange={(e) => setPassword(e.target.value)}
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

        <button className="enter" onClick={submit}>Enter</button>
        <div className="loglink">
          <p>Already have an account ?</p>
          <a onClick={hasAccess}>Login</a>
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