import React from 'react';
import "../../styles/Footer.scss";


function Footer() {
  return (
    <div className='footer'>
      <div className='footerLogo'> 
        <img src="FooterLogo.png" alt='Logo'/> 
      </div>
      <div className='footerText'>
        © 2020 Kasa. All rights reserved
      </div>
    </div>
  );
}

export default Footer;
