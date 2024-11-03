import React from 'react';
import logo from '../../images/logo.png';
import Navigation from '../Navigation/Navigation';
//import './header.css';

function Header() {
  return (
    <div className="header">
      <img src={logo} className="header__logo" alt="Loop Teatral logo"/>
      <p className='header_slogan'>EL TEATRO NO TIENE FRONTERAS</p>
      <Navigation />   
    </div>
  )
}

export default Header;