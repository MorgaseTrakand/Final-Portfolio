import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProjectItemTwo = () => {
      useEffect(() => {
        gsap.fromTo(document.querySelector('.project-item-two'),
        {
          autoAlpha: 0
        },
        {
          ease: "power1.out",
          autoAlpha: 1,
          scrollTrigger: {
            trigger: '.gallary-container',
            start: 'top 25%',
            end: 'top -25%',
            scrub: true,
          },
        }
      )
        gsap.fromTo(document.querySelector('.project-item-two'),
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
            start: 'top 25%',
            end: 'top -125%',
            scrub: true,
          },
        }
      )
      })
    return (
        <div className='project-item project-item-two'></div>
    );
};

export default ProjectItemTwo;
