import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import './Gallary.css';
import ProjectButton from './ProjectButton';
import NameSpinner from './NameSpinner';
import ProjectItemOne from './ItemOne';
import ProjectItemTwo from './ItemTwo';
import ProjectItemThree from './ItemThree';
import ProjectItemFour from './ItemFour';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Gallary = () => {
      useGSAP(() => {
        gsap.to('.project-container',
          {
            scrollTrigger: {
              trigger: '.gallary-container',
              start: 'top center',
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
            duration: 0.3,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: '.gallary-container',
              start: 'top center',
              end: 'bottom bottom',
              toggleActions: "play reverse play reverse"
            }
          }
        )
      })
      
    return (
      <div className='gallary-container'>
        <div className='project-container'>
          <div className='project-left'>
            <a target='_blank' href="https://portfolio-site-4tfl.onrender.com"><ProjectItemOne/></a>
            <a target='_blank' href="https://algorithm-visualizer-losf.onrender.com"><ProjectItemThree/></a>
          </div>
          <div className='project-right'>
            <a target='_blank' href=""><ProjectItemTwo/></a>
            <a target='_blank' href=""><ProjectItemFour/></a>
          </div>
          <ProjectButton/>
          <NameSpinner/>
        </div>
      </div>
    );
};

export default Gallary;