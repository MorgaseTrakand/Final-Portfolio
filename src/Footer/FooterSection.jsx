import './footer.css';
import Header from '../Header/Header';
import Footer from './Footer';
import MobileFooter from './MobileFooter';
import gsap from 'gsap';
import { useEffect, useState } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function FooterSection() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setMobile(true);
    }
  })

  useGSAP(() => {
    gsap.fromTo('#footer-header',
      {
        autoAlpha: 0,
        y: '-12vh'
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.4,
        delay: 0.2,
        scrollTrigger: {
          trigger: '.footer-displaced-top',
          start: 'top top',
          toggleActions: 'play reverse play reverse',
        },
        onComplete: () => {
          console.log('wtf')
        }
      }
    );
    gsap.fromTo('footer',
      {
        autoAlpha: 0,
        y: '12vh'
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.4,
        scrollTrigger: {
          trigger: '.footer-displaced-top',
          start: 'bottom bottom',
          toggleActions: 'play reverse play reverse',
        }
      }
    );
    let heightDisplacement = 180; 
    if (window.innerWidth > 1900) {
      heightDisplacement = 250;
    }
    gsap.fromTo('.footer-top-line', 
      {
        y: heightDisplacement,
        rotation: 8,
      },
      {
        y: 0,
        rotation: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.footer-displaced-top',
          start: 'bottom bottom',
          toggleActions: 'play reverse play reverse'
        }
      }
    )
    gsap.fromTo('.footer-bottom-line', 
      {
        y: -heightDisplacement,
        rotation: 8,
      },
      {
        y: 0,
        rotation: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.footer-displaced-top',
          start: 'bottom bottom',
          toggleActions: 'play reverse play reverse',
        }
      }
    )
  })

  return (
      <div className='footer-body'>
        <div className='footer-displaced-top'>
          <div className='relative-wrapper'>
            <div className='header-absolute'>
              <div className='header-relative'>
                <Header id='footer-header'></Header>
              </div>
            </div>
            <div className='final-cta-container'>
                <div>
                  <div className='border'>
                    <h1 className='footer-top-line'><span className='gold-text'>Let's</span> Create</h1>
                  </div>
                  <div className='border'>
                    <h1 className='footer-bottom-line'>Something <span className='gold-text'>Special</span></h1>
                  </div>
                </div>
            </div>
            <div className='footer-container'>
              {!mobile && <Footer/>}
              {mobile && <MobileFooter/>}
            </div>
          </div>
        </div>
      </div>    
  )
}
export default FooterSection;