import React from 'react'
import "./Landing.css"
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import About from '../About/About'
import Speakers from '../Speaker/Speakers'
import Timeline from '../Timeline/Timeline'
import SponsorsMain from '../Sponsors/SponsorsMain'
import Team from '../Team/Team'
import Footer from '../Footer/Footer'

function Landing() {
  
  return (
    <>
      <div className='landing' id="home">
        <ParallaxProvider>
          <Parallax speed={-50}>
            <section className="star-animation">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </section>
            {/* <img className='landing__Heading' src="JSCOP@4x.png" alt="" /> */}
          </Parallax>
        </ParallaxProvider>
            <h3 className='landing__Heading'> JSCOP</h3>
            <button class="mv" onclick="parent.location='http://opencon.ieeevit.org/register.html'">Register Now</button>
      </div>
       <About />
     <Speakers />
      <Timeline />
      <SponsorsMain />
      <Team />
      <Footer />
    </>
  )
}

export default Landing