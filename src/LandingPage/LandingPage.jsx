import { useEffect, useState } from 'react';
import gsap from 'gsap';
import './LandingPage.css';
import Header from '../Header/Header';
import ScrollNotice from './ScrollNotice';
import DoubleTextAnimation from '../HelperComponents/DoubleTextAnimation';
import { useGSAP } from '@gsap/react';

function LandingPage( { isLoaded } ) {
  useGSAP(() => {
    gsap.fromTo('.landingpage-secondary-text', 
      {
        autoAlpha: 1,
        filter: 'blur(0px)',
        scale: 1
      },
      {
        autoAlpha: 0,
        scale: 0.8,
        filter: 'blur(5px)',
        scrollTrigger: {
          trigger: ".landing-page",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      }
    );
    const scrollNotice = document.querySelector('.scroll-notice');
    gsap.fromTo('.mask', 
      {
        scale: 1
      },
      {
        scale: 0.5,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: ".landing-page",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      }
    );
    gsap.fromTo('.topline', 
      {
        x: 0,
        filter: 'blur(0px)',
      },
      {
        x: 300,
        filter: 'blur(5px)',
        scrollTrigger: {
          trigger: ".landing-page",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      }
    );
    gsap.fromTo('.bottomline', 
      {
        x: 0,
        filter: 'blur(0px)',
      },
      {
        x: -300,
        filter: 'blur(5px)',
        scrollTrigger: {
          trigger: ".landing-page",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      }
    )
  })
  useEffect(() => {
    if (isLoaded) {
      document.querySelector('.landing-page').style.pointerEvents = "all";
      const maskElement = document.querySelector('.landing-page');
      const maskBorder = document.querySelector('.mask-border')
      const maskPercentage = { percent: 0 };
      gsap.to(maskPercentage,
        {
          percent: 200,
          duration: 1,
          ease: "power1.inOut",
          onUpdate: () => {
            maskBorder.style.height = `${maskPercentage.percent+0.15}vmax`
            maskBorder.style.width = `${maskPercentage.percent+0.15}vmax`
            maskElement.style.mask = `radial-gradient(circle, black ${maskPercentage.percent/2}vmax, transparent 0vmax)`;
            maskElement.style.webkitMask = `radial-gradient(circle, black ${maskPercentage.percent/2}vmax, transparent 0vmax)`;
          }
        }
      )

      gsap.from('.topline',
        {
          y: 180,
          duration: 0.8,
          rotation: 8,
        }
      )
      gsap.from('.bottomline',
        {
          y: -180,
          duration: 0.8,
          rotation: 8,
        }
      )
      gsap.from('.text-container2',
        {
          y: 20, 
          duration: 0.8,
          autoAlpha: 0,
          ease: "power1.inOut"
        }
      )
      gsap.from('.scroll-notice', 
        {
          y: '-8vh',
          duration: 0.8,
          rotation: 8,
        }
      )
    }
  }, [isLoaded])
  return (
    <>
      <section className="landing-page">
        <Header />
        <div className="top-half">
            <div className="text-container">
                <div className="border">
                    <h1 className="topline"><span className="left">Redefining</span> the standards</h1>
                </div>
                <div className="border">
                    <h1 className="bottomline">for excellent <span className="right">web design</span></h1>
                </div>
            </div>
        </div>
        <div className="bottom-half">
            <div className="text-container2">
                <h2 className="landingpage-secondary-text">
                    A freelance web designer working to construct websites and appealing visual experiences 
                </h2>
            </div>
        </div>
        <div className='absolutely-positioned'>
          <DoubleTextAnimation string={'(scroll to discover)'} className={"scroll-notice"}/>
        </div>
      </section> 
    </>   
  )
}
export default LandingPage;