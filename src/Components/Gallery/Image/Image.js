import React from 'react';
import "./Image.css";

function Image(props) {
  return <div className="imageBox">
      <div className="imageBox__box">
        <img className="imageBox__image" src={props.imageLink} alt="Image"></img>
      </div>
  </div>;
}

export default Image;
