import {React} from 'react';
import './homepage.css';
import logo from '../assets/img/logo.png';
import img1 from '../assets/img/Cloud_Hosting_img.png';
import img2 from '../assets/img/Customer_Satisfaction_img.png';
import img3 from '../assets/img/Notification_System_img.png';
import {Footer_all} from './footer_all';
import {Header} from './header';
import {Show_Hide} from './show_hide';
export const Homepage=()=>{
   return (
    <div className="homepage">
              <Header/>
        <div className="content">
          <div className="lineup">
        <img src={logo} alt="brand-image" id="br-img" />
        <p><b>Suvidha</b> is an innovative CRM (Customer Relationship Management) ticket system website designed to enhance customer support and streamline service management. 
        This platform empowers businesses to efficiently manage customer queries, issues, and requests through a centralized system.</p>
        </div>
        <div className="img_box">
<img className="image" src={img1} alt="img1"/>
<img className="image" src={img2} alt="img2"/>
<img className="image" src={img3} alt="img3"/>
        </div>
        
<div className="ltr">
    <h5 >Hosted on a secure and reliable cloud infrastructure.
        Ensures high availability and minimal downtime.</h5>
        <h5>Collects feedback after ticket resolution.
        Improves service quality through customer insights.</h5>
        <h5>Keeps users informed with real-time emails
        Ensures no ticket goes unnoticed or unresolved.</h5>
</div>
<Show_Hide/>
        </div>
      <Footer_all/>

        </div>
      )
    }