import React, { useState } from "react";
import { Header_user_dashboard } from "../header";
import { Footer_all } from "../../home/footer_all";
// import { Show_Hide } from "../show_hide.jsx";
import{Rating} from "./rating.jsx";
import "./rating.css";
import trump from "../../assets/img/trump.png";
export const Feedback = () => {
     const [name, setName] = useState("A.K.S THE GREAT");
      const [email, setEmail] = useState("mr.aksthegreat03042004@gmail.com");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback Sended!");
  };
    return(
        <div className="container-feedback">
          <div className="pro_img_container">
              <div className="feedback">
                <form action="" onSubmit={handleSubmit}>
                  <h2>Feedback Form</h2>
                  {/* <p><b>HI DO GIVE US A FEEDBACK TO IMPROOVE OUR SERVICES.</b> </p> */}
                  <div className="data_container">
                  <label htmlFor="Name"><b>Name</b></label>
                  <input  className="input-profile" type="text"  name="name"  placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)}required/>
                  </div>
                  <div className="data_container">
                  <label htmlFor="Email"><b>Email</b></label>
                  <input  className="input-profile" type="email" name="email"placeholder="Enter Your Email address" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                  </div>
                  <div className="rate-us">
                  <p><b>Rate Us-</b></p>
                   <Rating/> 
                   </div>              
                  <p><b>Feel free to add any other comments or suggestions:</b></p>
                  <textarea rows="5"></textarea>
                  <button type="submit">SAVE</button>
                </form>
              </div>
              <img src={trump} id="trump" alt="trump_image" />
              </div>
 <div className="homepage">
        <Header_user_dashboard />
        <Footer_all />
        <Show_Hide />
      </div>
      </div>
)};