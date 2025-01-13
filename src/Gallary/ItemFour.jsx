import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProjectItemFour = () => {
      useEffect(() => {
        gsap.fromTo(document.querySelector('.project-item-four'),
        {
          autoAlpha: 0
        },
        {
          ease: "power1.out",
          autoAlpha: 1,
          scrollTrigger: {
            trigger: '.gallary-container',
            start: 'top -25%',
            end: 'top -75%',
            scrub: true,
          },
        }
      )
        gsap.fromTo(document.querySelector('.project-item-four'),
        {
          top: 0,
          scale: 1,
          left: 0,
          transformOrigin: "top left",
        },
        {
          ease: "power1.inOut",
          top: '200%',
          scale: 8,
          left: '10%',
          transformOrigin: "top left",
          scrollTrigger: {
            trigger: '.gallary-container',
            start: 'top -25%',
            end: 'top -175%',
            scrub: true,
          },
        }
      )
      })
    return (
        <div className='project-item project-item-four'></div>
    );
};

export default ProjectItemFour;
