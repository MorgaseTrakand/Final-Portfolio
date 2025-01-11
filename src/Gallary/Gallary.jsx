import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import './Gallary.css';
import ProjectButton from './ProjectButton';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Gallary = () => {
      useGSAP(() => {
        gsap.to('.project-container',
          {
            scrollTrigger: {
              trigger: '.gallary-container',
              start: 'top top',
              end: 'bottom bottom',
              pin: '.project-container',
            },
          }
        );
        gsap.fromTo('.project-description',
          {
            autoAlpha: 0,
            bottom: '30px'
          },
          {
            autoAlpha: 1,
            bottom: '40px',
            duration: 0.4,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: '.gallary-container',
              start: 'top top',
              // end: 'bottom bottom',
              toggleActions: "play reverse play reverse"
            }
          }
        )
      })
      
    return (
      <div className='gallary-container'>
        <div className='project-container'>
          <ProjectButton/>
        </div>
      </div>
    );
};

export default Gallary;