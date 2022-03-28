import React from "react";
import "./Team.css";

function Team() {
  return (
    <div className="Team" id="team">
      <section type="grid">
        <header className="grid-header in-view" in-view="fade-up">
          <div className="center u-clearfix">
            <p className="section-subhead">
              <span>Meet &amp; Greet</span>
            </p>
            <h2 className="section-title">the Optica Jiit team</h2>
          </div>
        </header>

        <div className="grid-content">
          {/* <div className="center"> */}
          <div className="grid1">
            <div className="grid-list u-clearfix">
              <div className="grid-item">
                <div in-view="fade-up" className="in-view">
                  <figure className="grid-picture wave-container">
                    <img src="ayush.jfif" alt="Gaetan Libertiaux" />
                  </figure>
                  <h2 className="grid-title">
                    Ayush
                    <br /> Singhal
                  </h2>
                  <p className="grid-subtitle">President of JIIT OPTICA</p>
                </div>
              </div>
              <div className="grid-item">
                <div in-view="fade-up" className="in-view">
                  <figure className="grid-picture wave-container">
                    <img src="Anshika.jpeg" alt="Gaetan Libertiaux" />
                  </figure>
                  <h2 className="grid-title">
                   Anshika
                    <br /> Jain
                  </h2>
                  <p className="grid-subtitle">Vice president Of Optica Jiit</p>
                </div>
              </div>
            
              <div className="grid2">
              <div className="grid-item">
                <div in-view="fade-up" className="in-view">
                  <figure className="grid-picture wave-container">
                    <img src="Sparsh.jpg" alt="Gaetan Libertiaux" />
                  </figure>
                  <h2 className="grid-title">
                    Sparsh
                    <br /> Gupta
                  </h2>
                  <p className="grid-subtitle">Treasurer</p>
                </div>
              </div>
              <div className="grid-item">
                <div in-view="fade-up" className="in-view">
                  <figure className="grid-picture wave-container">
                    <img src="Ishan.jpg" alt="Gaetan Libertiaux" />
                  </figure>
                  <h2 className="grid-title">
                   Ishan
                    <br /> Saxena
                  </h2>
                  <p className="grid-subtitle">SECRATARY</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
        {/* </div> */}
      </section>
    </div>
  );
}

export default Team;
