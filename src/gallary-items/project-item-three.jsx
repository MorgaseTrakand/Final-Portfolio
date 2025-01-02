import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProjectItemThree = () => {
      useEffect(() => {
        gsap.fromTo(document.querySelector('.project-item-three'),
        {
          autoAlpha: 0
        },
        {
          ease: "power1.out",
          autoAlpha: 1,
          scrollTrigger: {
            trigger: document.querySelector('.fourth-block'),
            start: 'top 0%',
            end: 'top -50%',
            scrub: true,
          },
        }
      )
        gsap.fromTo(document.querySelector('.project-item-three'),
        {
          top: 0,
          scale: 1,
          right: 0,
          transformOrigin: "top right",
        },
        {
          ease: "power1.inOut",
          top: '200%',
          scale: 8,
          right: '10%',
          transformOrigin: "top right",
          scrollTrigger: {
            trigger: document.querySelector('.fourth-block'),
            start: 'top 0%',
            end: 'top -150%',
            scrub: true,
          },
        }
      )
      })
    return (
        <div className='project-item project-item-three'></div>
    );
};

export default ProjectItemThree;
