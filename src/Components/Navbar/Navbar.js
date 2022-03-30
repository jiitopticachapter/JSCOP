import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavbarElements';

import { Link } from 'react-router-dom';

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='wrap'>
      <Nav>
        <NavLink to='/'>
          {/* <img src={require('../../public/logo-black.png')} alt='logo' /> */}
        </NavLink>
        <label className='dropdown'>
          <input type="checkbox"></input>
          <span className="menu">
            <span className="hamburger"></span>
          </span>
          <ul>
            <li>
              <Link to='/#landing'>Home</Link>
            </li>
            <li>
              <Link to='/#about'>About</Link>
            </li>
            <li>
              <Link to='/#speakers'>Speakers</Link>
            </li>
            <li>
              <Link to='/#timeline'>Timeline</Link>
            </li>
            <li>
              <Link to='/sponsor'>Sponsors</Link>
            </li>
            <li>
              <Link to='/Gallery'>Gallery</Link>
            </li>
            <li>
              <Link to='/#team'>Our Team</Link>
            </li>
            <li>
              <Link to='/#footer'>Contact Us</Link>
            </li>
            <li>
              <Link to='/Register'>Register</Link>
            </li>
          </ul>
        </label>
        <NavMenu>
          <NavLink to='/#landing' smooth>
            Home
          </NavLink>
          <NavLink to='/#about' smooth>
            About
          </NavLink>
          <NavLink to='/#speakers' smooth>
            Speakers
          </NavLink>
          <NavLink to='/#timeline' smooth>
            Timeline
          </NavLink>
          <NavLink to='/sponsor' smooth>
            Sponsors
          </NavLink>
          <NavLink to='/Gallery' smooth>
            Gallery
          </NavLink>
          <NavLink to='/#team' smooth>
            Our Team
          </NavLink>
          <NavLink to='/#footer' smooth>
            Contact Us
          </NavLink>
          <NavLink to='/Register' smooth>
            Register
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default Navbar;