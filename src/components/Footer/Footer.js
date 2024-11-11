import React from 'react';
import linkedinIcon from '../../images/logo_linkedin.png';
import gitIcon from '../../images/github_white_mark.png';
import emailIcon from '../../images/email_blue_icon.png';

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className='footer__info'>
        <p className='footer__copyright'>2024 @ Loop Teatral | Sol Gago</p>
        <ul className="footer__icons">
        <li>
    <a href="https://www.linkedin.com/in/solgagou/" target="_blank" rel="noopener noreferrer">
      <img src={linkedinIcon} className="linkedin_icon" alt="LinkedIn icon" />
    </a>
  </li>
  <li>
    <a href="https://github.com/solgagou" target="_blank" rel="noopener noreferrer">
      <img src={gitIcon} className="github_icon" alt="GitHub icon" />
    </a>
  </li>
  <li>
    <a href="mailto:solgagou@gmail.com" target="_blank" rel="noopener noreferrer">
      <img src={emailIcon} className="email_icon" alt="Email icon" />
    </a>
  </li>
        </ul>  
      </div>
    </div>
  )
}

export default Footer