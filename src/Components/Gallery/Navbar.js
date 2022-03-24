import React from "react";

function Navbar() {
  return (
    <div>
      <div className="button_gallery">
        <div className="social-links">
          <div className="year-btn flex-center" id="year">
            <div></div>
            <span>2018</span>
          </div>

          <div className="year-btn flex-center" id="year">
            <span>2019</span>
          </div>

          <div className="year-btn flex-center" id="year">
            <span>2020</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
