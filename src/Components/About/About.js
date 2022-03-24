import React, { useEffect } from 'react'
import dots from "../dots-bkgd.7f2f0eb8.svg";
import AOS from 'aos';
import "aos/dist/aos.css";
import './About.css'
function About() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <div className="about" id="about">
      <img src={dots} alt="" class="dots"></img>
      <div className="about__content">
        <div className="content__left">
        <h2 className="MuiTypography-root MuiTypography-h2" id="about">About</h2>
        <p className='MuiTypography-root MuiTypography-body1' id="cont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit optio quae recusandae hic ut repudiandae, porro, fuga pariatur laboriosam labore voluptate, nobis nulla debitis dolorum adipisci quas sit non sequi? &amp; UX.</p>

        </div>
        <div className="content__right">
        {/* <div className="event-sec-right">
          <img src="prom1.jpg" className="central_img1 aos-init aos-animate" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="500" data-aos-duration="600" alt='promo1'/>
        <img src="prom2.png" className="central_img2 aos-init aos-animate" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="1000" data-aos-duration="600"  alt='promo1'/>
        <img src="prom3.png" className="central_img3 aos-init aos-animate" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="1500" data-aos-duration="600"  alt='promo1'/></div> */}

        </div>
      </div>
    </div>

  )
}

export default About