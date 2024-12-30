import { useEffect, useState } from 'react';
import gsap from 'gsap';

function Header( { isLoaded } ) {

  return (
    <div className="header">
      <div className="header-wrapper">
          <a href="index.html"><div className="logo cursor-scale small">ETHAN SNYDER</div></a>
          <div className="link-container">
              <div className="navitem cursor-scale small"><a href="#">About</a></div>
              <div className="navitem cursor-scale small"><a href="#">Work</a></div>
              <div className="contact-button navitem">
                  <a href="#">Contact</a>
              </div>
          </div>
      </div>
  </div>
  )
}
export default Header;