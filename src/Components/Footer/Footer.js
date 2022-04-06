// import 'font-awesome/css/font-awesome.min.css'; 
import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="Footer">
      <div className="contactFollowWrapper">
     <div className="contactUs" id="contactus">
     <header className="page-header">
        <div className="center">
          <div className="page-title">
            
            <h2 in-view="fade-right" className="in-view">
          Contact
            </h2>
          </div>
        </div>
      </header>
          <div className="contactBox">
              <div className="opticaLogoDiv">
                  <img className="opticaLogo" alt="logo" src="logo-white.png"/>
                  <ul id="menu">
  <li><a href="https://www.instagram.com/jiitopticachapter/"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a></li>
  <li><a href="https://discord.com/invite/PSYTkga89T"><FontAwesomeIcon icon="fa-brands fa-discord" /></a></li>
  <li><a href="https://www.facebook.com/jiitopticachapter/"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a></li>
  <li><a href="https://www.linkedin.com/company/jiitopticachapter/mycompany/"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a></li>
</ul>
              </div>
              <FontAwesomeIcon icon="fa-brands fa-linkedin" />
              
              <div className="contactUsCards">
                  <div className="card contactCard">
                      <img className="contactImage"  alt="president"src="ayush.jfif"/>
                      <h2 className="name">Ayush Singhal</h2>
                      <p>xxxxxxxxx</p>
                      <p >abc@gmail.com</p>
                  </div>
                  <div className="card contactCard">
                    <img className="contactImage" alt="vice president" src="Anshika.jpeg"/>
                    <h2 className="name" >Anshika</h2>
                    <p>xxxxxxx</p>
                    <p >abc@gmail.com</p>
                  </div>
              </div>
          </div>
      </div>
      <div id="contactus">

      </div>
      </div>
    </div>
  );
}
export default Footer;

