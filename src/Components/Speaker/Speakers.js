import React from "react";

import "./Speaker.css";

function Speakers() {
  return (
    <div className="Speakers" id="speakers">
      <section type="whats-new" in-view="fade-up" className="in-view">
        <header className="section-header">
          <div className="center">
            <p className="section-subhead">JSCOP  2022</p>
            <h2 className="section-title">
              who’s New <br />
              <span>this year?</span>
            </h2>
          </div>
        </header>
        <section className="post_content">

        <div className="center">
        <div className="post">
    <div className="speakers__left">
      <img src="no-dp.png" className="post-picture" alt="" />
    </div>
    <div className="speakers__right">
      <span className="post-title">TBA....</span>
      <p className="post-subtitle"> </p>
    </div>
    </div>
    <div className="post">
    <div className="speakers__left">
      <img src="no-dp.png" className="post-picture" alt="" />
    </div>
    <div className="speakers__right">
      <span className="post-title">TBA....</span>
      <p className="post-subtitle"> </p>
    </div>
    </div>
    <div className="post">
    <div className="speakers__left">
      <img src="no-dp.png" className="post-picture" alt="" />
    </div>
    <div className="speakers__right">
      <span className="post-title">TBA....</span>
      <p className="post-subtitle"> </p>
    </div>
    </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Speakers;
