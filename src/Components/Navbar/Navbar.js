import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';

const Navbar = () => {
  return (
    <div className='wrap'>
      <Nav>
        <NavLink to='/'>
          {/* <img src={require('../../public/logo-black.png')} alt='logo' /> */}
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='#landing' smooth>
          Home
          </NavLink>
          <NavLink to='#about' smooth>
        About
          </NavLink>
          <NavLink to='#speakers' smooth>
       Speakers
          </NavLink>
          <NavLink to='#timeline' smooth>
           Timeline
          </NavLink>
          <NavLink to='/sponsor' smooth>
          Sponsors
          </NavLink>
          <NavLink to='/Gallery' smooth>
          Gallery
          </NavLink>
          <NavLink to='#team' smooth>
         Our Team
          </NavLink>
          <NavLink to='#footer' smooth>
         Contact Us
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default Navbar;