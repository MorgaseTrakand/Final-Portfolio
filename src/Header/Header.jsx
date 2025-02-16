import { useEffect, useState } from 'react';
import gsap from 'gsap';
import DoubleTextAnimation from '../HelperComponents/DoubleTextAnimation';
import './Header.css'

function Header( { isLoaded, id='' } ) {

  return (
    <div className="header" id={id}>
      <div className="header-wrapper">
          <DoubleTextAnimation string={'ETHAN SNYDER'} className={"logo"} stagger={0.015}/>
          <div className="link-container">
              <div className='navitem nav-item-margin'>
                <a aria-label='Link to Resume' target="_blank" href="https://github.com/MorgaseTrakand/Final-Portfolio/blob/main/public/Ethan-Snyder-Resume.pdf">
                  <DoubleTextAnimation string={'Resume'} className={"resume"} stagger={0.025}/>
                </a>
              </div>             
              <div className="contact-button navitem">
                <div className='navitem'>
                  <a aria-label='Email mailto Link' href="mailto:edsnyder1@geneva.edu">
                    <DoubleTextAnimation string={'Contact'} className={""} stagger={0.025}/>
                  </a>
              </div>
              </div>
          </div>
      </div>
  </div>
  )
}
export default Header;