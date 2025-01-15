import { useEffect, useState } from 'react';
import gsap from 'gsap';
import DoubleTextAnimation from '../HelperComponents/DoubleTextAnimation';
import './Header.css'

function Header( { isLoaded, id='' } ) {

  return (
    <div className="header" id={id}>
      <div className="header-wrapper">
          <a>
            <DoubleTextAnimation string={'ETHAN SNYDER'} className={"logo"} stagger={0.015}/>
          </a>
          <div className="link-container">
              <div className='navitem nav-item-margin'>
                <a target="_blank" href="https://www.linkedin.com/in/ethan-snyder30/overlay/1736959145455/single-media-viewer/?profileId=ACoAAEb9fHQB2ZaY1h2zgR7gh12vDhx7UoT6lTw">
                  <DoubleTextAnimation string={'Resume'} className={""} stagger={0.025}/>
                </a>
              </div>             
              <div className="contact-button navitem">
                <div className='navitem'>
                  <a href="mailto:edsnyder1@geneva.edu">
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