import React from 'react'
import './Navbar.css'
import logo from './logo-white.png'
import { NavLink } from 'react-router-dom'

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
            <NavLink
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to="/"
            >
              Home
            </NavLink>
          </li>
          
          <li>
            <NavLink
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to="/#speakers"
            >
              Speaker
            </NavLink>
          </li>
          <li>
            <NavLink
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to="/#timeline"
            >
             Timeline
            </NavLink>
          </li>
          <li>
            <NavLink
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to="/#faq"
            >
             Faqs
            </NavLink>
          </li>
          <li>
            <NavLink
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to="/Gallery"
            >
              Gallery
            </NavLink>
          </li>
          
          <li>
            <NavLink
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to="/sponsor"
            >
           Sponsors
            </NavLink>
          </li>
          
          
          <li>
            <NavLink
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to="/#team"
            >
          Team
            </NavLink>
          </li>
          <li>
            <NavLink
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to="footer"
            >
             Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar