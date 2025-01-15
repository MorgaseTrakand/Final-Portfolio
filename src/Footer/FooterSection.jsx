import './footer.css';
import Header from '../Header/Header';
import Footer from './Footer';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function FooterSection() {

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
          toggleActions: 'play reverse play reverse'
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
          start: 'top top',
          toggleActions: 'play reverse play reverse'
        }
      }
    );
    gsap.fromTo('.footer-top-line', 
      {
        y: 180,
        rotation: 8,
      },
      {
        y: 0,
        rotation: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.footer-displaced-top',
          start: 'top top',
          toggleActions: 'play reverse play reverse'
        }
      }
    )
    gsap.fromTo('.footer-bottom-line', 
      {
        y: -180,
        rotation: 8,
      },
      {
        y: 0,
        rotation: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.footer-displaced-top',
          start: 'top 1%',
          toggleActions: 'play reverse play reverse'
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
              <Footer></Footer>
            </div>
          </div>
        </div>
      </div>    
  )
}
export default FooterSection;