import React, { useState } from "react";
import { Header_user_dashboard } from "../header";
import { Footer_all } from "../../home/footer_all";
import { Show_Hide } from "../show_hide.jsx";
import './profile.css';
import user_image from "../../assets/img/user_details.png";
import user_delete from "../../assets/img/user_delete.png";
// import user_protected from "../../assets/img/password_protection.jpeg";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export const Profile = () => {
  const [name, setName] = useState("A.K.S THE GREAT");
  const [email, setEmail] = useState("mr.aksthegreat03042004@gmail.com");
  const [password, setpassword] = useState("S9n2k@sh58");
  const [isEmailChanged, setIsEmailChanged] = useState(false);


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value !== "mr.aksthegreat03042004@gmail.com") {
      setIsEmailChanged(true);
    } else {
      setIsEmailChanged(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated!");
  };
  const handledelete = (e) => {
    e.preventDefault();
    alert("Profile Deleted!");
  };
  const handleSubmitPassword = (e) => {
    e.preventDefault();
    alert("Password updated!");
  };
  return (
    <div className="comp-profile">
    <div className="container-profile">
      <div className="pro_img_container">
          <img src={user_image} id="user_img" alt="user_image" />
      <div className="profile">
        <form action="" onSubmit={handleSubmit}>
          <h2>Profile Information</h2>
          <p>Update your account's profile information and email address.</p>

          <label htmlFor="Name"><b>Name</b></label>
          <input  className="input-profile" type="text"  name="name"  placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)}required/>

          <label htmlFor="Email"><b>Email</b></label>
          <input  className="input-profile" type="email" name="email"placeholder="Enter Your Email address" value={email} onChange={handleEmailChange} required/>

          {isEmailChanged && (
            <p>
              <a href="/otp-verify">Verify Email Address</a>
            </p>
          )}
          <button type="submit">SAVE</button>
        </form>
      </div>
      </div>
      <div className="pro_img_container">
      {/* <img src={user_protected} id="user_protected" alt="user_protected" /> */}
      <DotLottieReact
      src="https://lottie.host/1d0d9219-887b-484b-99d7-6de194ae26dc/DMMxyjigsj.lottie"
      loop
      autoplay
      id="user_protected" 
      alt="user_protected_animation"
      style={{ width: '300px', height: '300px' }}
    />
      <div className="profile-password">
        <form action="" onSubmit={handleSubmitPassword}>
          <h2>Update Password</h2>
          <p>Ensure your account is using a long, random password to stay secure.</p>

          <label htmlFor="Current Password"><b>Current Password</b></label>
          <input className="input-profile" type="text"  name="password"  placeholder="Enter Your Password" value={password} onChange={(e) => setpassword(e.target.value)}required/>

          <label htmlFor="New Password"><b>New Password</b></label>
          <input className="input-profile" type="text" name="new_password"placeholder="Enter New Password"  required/>

          <label htmlFor="Confirm Password"><b>New Password</b></label>
          <input className="input-profile" type="text" name="confirm_password"placeholder="Enter Confirm Password"  required/>

          <button type="submit">SAVE</button>
        </form>
      </div>
      </div>
      <div className="pro_img_container">
      <img src={user_delete} id="user_delete" alt="user_delete" />
      <div className="profile-delete">
  <form action="" onSubmit={handledelete}>
    <h2>Delete Account</h2>
    <p>Permanently delete your account.</p>
    <p>
      Once your account is deleted, all of its resources and data will be 
      permanently deleted. Before deleting your account, please download 
      any data or information that you wish to retain.
    </p>
    <button type="delete">DELETE</button>
  </form>
</div>
</div>
      <div className="homepage">
        <Header_user_dashboard />
        <Footer_all />
        <Show_Hide />
      </div>
    </div>
    </div>
  );
};
