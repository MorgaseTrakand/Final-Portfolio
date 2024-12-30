import { useEffect, useState } from 'react';
import gsap from 'gsap';
import './LandingPage.css';
import Header from '../Header/Header';

function LandingPage( { isLoaded } ) {
  useEffect(() => {
    if (isLoaded) {
      const maskElement = document.querySelector('.landing-page');
      const maskBorder = document.querySelector('.mask-border')
      const maskPercentage = { percent: 0 };
      gsap.to(maskPercentage,
        {
          percent: 200,
          duration: 1,
          ease: "power1.inOut",
          onUpdate: () => {
            maskBorder.style.height = `${maskPercentage.percent+0.15}vw`
            maskBorder.style.width = `${maskPercentage.percent+0.15}vw`
            maskElement.style.mask = `radial-gradient(circle, black ${maskPercentage.percent/2}vw, transparent 0vw)`;
            maskElement.style.webkitMask = `radial-gradient(circle, black ${maskPercentage.percent/2}vw, transparent 0vw)`;
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
      gsap.to('.logo', 
        {
          x: 30,
          duration: 0.8,
          autoAlpha: 1
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
                <h2 className="fadetest">
                    A freelance web designer working to construct websites and appealing visual experiences 
                </h2>
            </div>
        </div>
        <div className="scroll-notice"><h1>(scroll to discover)</h1></div>
      </section> 
    </>   
  )
}
export default LandingPage;