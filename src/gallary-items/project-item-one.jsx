import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProjectItemOne = () => {
      useEffect(() => {
        gsap.fromTo(document.querySelector('.project-item-one'),
        {
          autoAlpha: 0,
        },
        {
          ease: "power1.out",
          autoAlpha: 1,
          scrollTrigger: {
            trigger: document.querySelector('.fourth-block'),
            start: 'top 50%',
            end: 'top 0%',
            scrub: true,
          },
        }
      )
        gsap.fromTo(document.querySelector('.project-item-one'),
          {
            top: 0,
            scale: 1, 
            transformOrigin: "top right",
            right: 0,
          },
          {
            ease: "power1.inOut",
            top: '200%',
            scale: 8,
            transformOrigin: "top right",
            right: '10%',
            scrollTrigger: {
              trigger: document.querySelector('.fourth-block'),
              start: 'top 50%',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      })
    return (
        <div className='project-item project-item-one'></div>
    );
};

export default ProjectItemOne;
