import React from "react";
import "./Speakers.css";

function Speakers() {
  return (
    <div className="Speakers">
      <section type="whats-new" in-view="fade-up" className="in-view">
        <header className="section-header">
          <div className="center">
            <p className="section-subhead">JSCOP festival 2022</p>
            <h2 className="section-title">
              what’s New <br />
              <span>this year?</span>
            </h2>
          </div>
        </header>
        <section type="portals">
          <div className="center u-clearfix">
            <div className="post in-view" type="vertical" in-view="fade-up">
              <a
                href="https://www.JSCOP.be/2022/en/JSCOP-pro"
                className="post-mobile-link"
                aria-hidden="true"
              >
                <span className="u-visually-hidden">JSCOP.Pro</span>
              </a>
              <div className="post-inner">
                <div className="post-picture">
                  <figure className="wave-container">
                    <img
                      src="https://www.JSCOP.be/2022/files/templates/JSCOP2022/public/assets//images/portals/JSCOP-pro.jpg"
                      alt="JSCOP.Pro"
                      style={{opacity: 1}}
                    />
                    <canvas
                      className="image-canvas"
                      width="590"
                      height="714"
                      style={{opacity: 0}}
                    ></canvas>
                    <canvas
                      className="image-canvas"
                      width="590"
                      height="714"
                      style={{opacity: 0}}
                    ></canvas>
                    <canvas
                      className="image-canvas"
                      width="590"
                      height="714"
                      style={{opacity: 0}}
                    ></canvas>
                  </figure>
                  {/* <div
                    className="bubble small-bubble-left bubble-anim4 bubble-size8"
                    style={{top: "511px" , left:" -22px"}}
                  ></div>
                  <div
                    className="bubble small-bubble-left bubble-anim5 bubble-size2"
                    style={{top: "511px" , left:" 17px"}}
                  ></div>
                  <div
                    className="bubble medium-bubble-left bubble-anim6 bubble-size3"
                    style={{top: "490px", left:" 6px"}}
                  ></div>
                  <div
                    className="bubble medium-bubble-left bubble-anim7 bubble-size4"
                    style={{top: "511px" , left: "-11px"}}
                  ></div>
                  <div
                    className="bubble small-bubble-left bubble-anim8 bubble-size5"
                    style={{top: "499px" , left: "13px"}}
                  ></div>
                  <div
                    className="bubble small-bubble-left bubble-anim9 bubble-size6"
                    style={{top: "510px", left: "-11px"}}
                  ></div> */}
                </div>
                <div
                  className="post-content"
                  smooth-scroll='{"speed": 0.05, "ease": 0.06}'
                  style={{transform:`translateX(${0}px) translateY(${29.08}px)`}}>
                  <h3 className="post-title">JSCOP.Pro</h3>
                  <p className="post-subtitle">
                    <span>
                      <span className="post-date">Nov 02 - 04</span>, Place d’Armes{" "}
                    </span>
                  </p>
                  <p className="post-text">
                    The Pro Village is the best way to network and make new
                    business connections at the JSCOP Festival.
                  </p>
                  <a
                    href="https://www.JSCOP.be/2022/en/JSCOP-pro"
                    className="post-button-site"
                    type="button"
                    layout="handwritten"
                  >
                    More details&nbsp;&nbsp;&nbsp;+
                    <span className="svg svg-handwritten-underline">
                      <svg
                        width="107"
                        height="10"
                        className="icon-handwritten-underline"
                      >
                        {/* <a xlink:href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/664131/underline.svg'"></a> */}
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="post in-view" type="vertical" in-view="fade-up">
              <a
                href="https://www.JSCOP.be/2022/en/program/conferences?filter=design"
                className="post-mobile-link"
                aria-hidden="true"
              >
                <span className="u-visually-hidden">JSCOP.Design</span>
              </a>
              <div className="post-inner">
                <div className="post-picture">
                  <figure className="wave-container">
                    <img
                      src="https://www.JSCOP.be/2022/files/templates/JSCOP2022/public/assets//images/portals/JSCOP_design-home.jpg"
                      alt="JSCOP.Design"
                    />
                  </figure>
                  <div
                    className="bubble medium-bubble-right bubble-anim3 bubble-size7"
                    style={{top:" 1px", left:" 365px"}}
                  ></div>
                  <div
                    className="bubble small-bubble-right bubble-anim4 bubble-size8"
                    style={{top: "9px", left: "352px"}}
                  ></div>
                  <div
                    className="bubble small-bubble-right bubble-anim5 bubble-size2"
                    style={{top: "-3px", left: "390px"}}
                  ></div>
                  <div
                    className="bubble medium-bubble-right bubble-anim6 bubble-size3"
                    style={{top: "-1px", left:"372px"}}
                  ></div>
                  <div
                    className="bubble medium-bubble-right bubble-anim7 bubble-size4"
                    style={{top: "19px", left: "379px"}}
                  ></div>
                  <div
                    className="bubble medium-bubble-right bubble-anim8 bubble-size5"
                    style={{top: "-14px", left: "360px"}}
                  ></div>
                </div>
                <div
                  className="post-content"
                  smooth-scroll='{"speed": 0.05, "ease": 0.06}'
                  style={{transform:`translateX(${0}px) translateY(${84.29}px)`}}
                >
                  <h3 className="post-title">JSCOP.Design</h3>
                  <p className="post-subtitle">
                    <span>
                      <span className="post-date">Nov 02 - 03th</span>, Palais des
                      Congrès{" "}
                    </span>
                  </p>
                  <p className="post-text">
                    The round of JSCOP.Design lectures will feature designers who
                    will present an overview of contemporary graphic creation,
                    UX Design, digital projects and scenography.
                  </p>
                  <a
                    href="https://www.JSCOP.be/2022/en/program/conferences?filter=design"
                    className="post-button-site"
                    type="button"
                    layout="handwritten"
                  >
                    More details&nbsp;&nbsp;&nbsp;+
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Speakers;
