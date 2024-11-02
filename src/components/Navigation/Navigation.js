import React from 'react';
import { Link } from 'react-router-dom'; 

function Navigation() {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Inicio</Link></li>        
        <li><Link to="/data">Teatro</Link></li>     
        <li><Link to="/about">Sobre mí</Link></li>  
      </ul>
    </nav>
  );
}

export default Navigation