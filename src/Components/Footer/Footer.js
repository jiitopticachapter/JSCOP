import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import 'font-awesome/css/font-awesome.min.css'; 
import { faHome } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Footer.css";

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
              <div className="ieeeLogoDiv">
                  <img className="ieeeLogo" alt="logo" src="logo-white.png"/>
                  <ul id="menu">
  <li><a href="#"><span class="fa fa-at"></span></a></li>
  <li><a href="#"><span class="fa fa-odnoklassniki"></span></a></li>
  <li><a href="#"><span class="fa fa-linkedin"></span></a></li>
  <li><a href="#"><span class="fa fa-phone"></span></a></li>
</ul>
              </div>
            
              
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

