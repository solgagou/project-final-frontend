import React from 'react';
import { Link } from 'react-router-dom'; 

function Navigation() {
  return (
   <nav className="nav-menu">
    <ul className="nav-menu__list">
      <li className="nav-menu__item"><a className="nav-menu__link" href="/#main">NUESTRA PROPUESTA</a></li>        
      <li className="nav-menu__item"><Link to="/data" className="nav-menu__link">OBRAS</Link></li>     
      <li className="nav-menu__item"><a className="nav-menu__link" href="#footer">CONTACTANOS</a></li>  
    </ul>
   </nav>
  );
}

export default Navigation

