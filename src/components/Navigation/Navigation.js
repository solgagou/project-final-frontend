import React from 'react';
import { Link } from 'react-router-dom'; 

function Navigation() {
  return (
    <nav className="menu">
      <ul>
        <li><a href="#main">NUESTRA PROPUESTA</a></li>        
        <li><Link to="/data">OBRAS</Link></li>     
        <li><a href="#footer">CONTACTANOS</a></li>  
      </ul>
    </nav>
  );
}

export default Navigation

