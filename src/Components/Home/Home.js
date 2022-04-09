import React from "react";
import "./Home.css";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import About from "../About/About";
import Speakers from "../Speaker/Speakers";
import Timeline from "../Timeline/Timeline";
import SponsorsMain from "../Sponsors/SponsorsMain";
import Team from "../Team/Team";
import Footer from "../Footer/Footer";
// import astro from "astro.png";
import earth from "./images/earth.png";
import planet from "./images/p-3.png";
import Faq from "../Faq/Faq";
import Events from "../Events/Events";

function Home() {
  return (
    <>
      <div className="home" id="home">
        {/* <Navbar/> */}

        <section id="main" className="grid-container grid-container--home">
          <img src={earth} alt="logo" className="p-1" />

          <img src="asto.png" alt="logo" className="m" />

          <div className="jscop">
            <h2 in-view="fade-right" className="landing__Heading">
              JSCOP 4.O
            </h2>
            <h4 className="dates">7-8 May 2022</h4>
            <br />
            <button id="pulse" className="mv2">Register Now</button>
          </div>

          {/* <div id="object2"></div> */}

          <img src={planet} alt="logo" className="p-3" />
        </section>

        {/* <h3 classNameName='Home__Heading'> JSCOP</h3>
            <button classNameName="mv" onclick="parent.location='http://opencon.ieeevit.org/register.html'">Register Now</button> */}
      </div>
      {/* <About /> */}

      <Speakers />
      <Events/>
      <Timeline />

      <Team />
      <Faq />
      <SponsorsMain />
      <Footer />
    </>
  );
}

export default Home;
