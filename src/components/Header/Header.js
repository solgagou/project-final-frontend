import React from 'react';
import logo from '../../images/logo.png';
import Navigation from '../Navigation/Navigation';
//import './header.css';

function Header() {
  return (
    <div className="header">
      <img src={logo} className="header__logo" alt="Loop Teatral logo"/>
      <Navigation />   
    </div>
  )
}

export default Header;