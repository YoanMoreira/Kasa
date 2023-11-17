import React from 'react';
import '../../styles/Navbar.scss';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className='navbarLogo'>
        <img src='logo.png' alt='Logo' />
      </div>
      <ul className='navbarItems'>
        <li>
          <NavLink to="/" className='navbarLink'>Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/about" className='navbarLink'>À propos</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
