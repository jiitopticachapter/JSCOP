// import 'font-awesome/css/font-awesome.min.css'; 
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
        <footer>
        <div className="footer-content">
            <h3>Foolish Developer</h3>
            <p>Raj Template is a blog website where you will find great tutorials on web design and development. Here each tutorial is beautifully described step by step with the required source code.</p>
            <ul className="socials">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
            </ul>
        </div>
        <div className="footer-bottom">
            <p>copyright &copy; <a href="#">JIIT OPTICA CHAPTER</a>  </p>
        </div>

    </footer>
     
      
    </div>
  );
}
export default Footer;

