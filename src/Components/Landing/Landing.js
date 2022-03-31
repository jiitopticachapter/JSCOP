import React from "react";
import "./Landing.css";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import About from "../About/About";
import Speakers from "../Speaker/Speakers";
import Timeline from "../Timeline/Timeline";
import SponsorsMain from "../Sponsors/SponsorsMain";
import Team from "../Team/Team";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function Landing() {
  return (
    <>
      <div className="home" id="home">
      <Navbar/>
      
      <section id="main" class="grid-container grid-container--home">
  <div>
    <h1 class="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to
    <span class="d-block fs-900 ff-serif text-white">JSCOP</span></h1>
    
    <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
    outer space and not hover kind of on the edge of it. Well sit back, and relax 
    because we’ll give you a truly out of this world experience! </p>
  </div>
  <div>
    <a href="#teams" class="large-button uppercase ff-serif text-dark bg-white">Explore</a>
  </div>
</section>

        {/* <h3 className='landing__Heading'> JSCOP</h3>
            <button className="mv" onclick="parent.location='http://opencon.ieeevit.org/register.html'">Register Now</button> */}
      </div>
      {/* <About /> */}

      <Speakers />
      <Timeline />
      <SponsorsMain />
      <Team />
      <Footer />
    </>
  );
}

export default Landing;
