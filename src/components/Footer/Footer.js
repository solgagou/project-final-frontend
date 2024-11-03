import React from 'react';
import linkedinIcon from '../../images/logo_linkedin.png';
import gitIcon from '../../images/github_white_mark.png';
import emailIcon from '../../images/email_blue_icon.png';

function Footer() {
  return (
    <div className="footer">
      <ul className="footer__menu">
        <li src={linkedinIcon} className="linkedin_icon" alt='linkedin icon'></li> 
        <li src={gitIcon} className="github_icon" alt='git hub icon'></li> 
        <li src={emailIcon} className="email_icon" alt='email icon'></li> 
      </ul>  
    </div>
  )
}

export default Footer