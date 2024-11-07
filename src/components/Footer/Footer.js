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
          <li><img src={linkedinIcon} className="linkedin_icon" alt='linkedin icon'/></li> 
          <li><img src={gitIcon} className="github_icon" alt='git hub icon'/></li> 
          <li><img src={emailIcon} className="email_icon" alt='email icon'/></li> 
        </ul>  
      </div>
    </div>
  )
}

export default Footer