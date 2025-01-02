import { useEffect, useState } from 'react';
import gsap from 'gsap';
import DoubleTextAnimation from '../HelperComponents/DoubleTextAnimation';
import './Header.css'

function Header( { isLoaded } ) {

  return (
    <div className="header">
      <div className="header-wrapper">
          <a>
            <DoubleTextAnimation string={'ETHAN SNYDER'} className={"logo"} stagger={0.015}/>
          </a>
          <div className="link-container">
              <div className='navitem'>
                <a>
                  <DoubleTextAnimation string={'About'} className={""} stagger={0.03}/>
                </a>
              </div>
              <div className='navitem'>
                <a>
                  <DoubleTextAnimation string={'Work'} className={""} stagger={0.03}/>
                </a>
              </div>              
              <div className="contact-button navitem">
                <div className='navitem'>
                  <a>
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