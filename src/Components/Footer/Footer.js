import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="site-footer">
      <h2 className="u-visually-hidden">Footer</h2>
      <div className="footer-credits">
        <div className="center u-clearfix">
          <div className="credits-left">
            <h3>OPTICA SOCETY OF</h3>
            <ul>
              <li>
                <a
                  href="http://www.superbe.be"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="svg svg-superbe">
                    <svg width="72" height="91" className="icon-superbe">
                      {/* <use xlink:href="https://www.kikk.be/2017/files/templates/kikk2017/public/assets/sprite.svg#superbe"></use> */}
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="http://www.google.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="svg svg-dogstudio">
                   
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="credits-right">
            <ul>
              <li>©2017 Optica jiit</li>
              <li>
                <a href="mailto:namangupta990@gmail.com">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      <h4 className="lastTxt">This website has been developed with ❤️ by members of Optica JIIT</h4>
      </div>
    </div>
  );
}

export default Footer;
