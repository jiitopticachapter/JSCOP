import React from 'react'
import './Navbar.css'
import logo from './logo-white.png'

function Navbar() {
  return (
    <header className="primary-header flex">
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <button className="mobile-nav-toggle" aria-controls="primary-navigation">
        <span className="sr-only" aria-expanded="false">
          Menu
        </span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          data-visible="false"
          className="primary-navigation underline-indicators flex"
        >
          <li className="active">
            <a
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              href="/"
            >
              Home
            </a>
          </li>
          
          <li>
            <a
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              href="/#speakers"
            >
              Speaker
            </a>
          </li>
          <li>
            <a
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              href="/#timeline"
            >
             Timeline
            </a>
          </li>
          <li>
            <a
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              href="/#faq"
            >
             Faqs
            </a>
          </li>
          <li>
            <a
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              href="/Gallery"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              href="/sponsor"
            >
           Sponsors
            </a>
          </li>
          <li>
            <a
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              href="/#team"
            >
          Team
            </a>
          </li>
         
          
          <li>
            <a
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              href="footer"
            >
             Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar