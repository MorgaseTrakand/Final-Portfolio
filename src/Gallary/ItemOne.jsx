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
            trigger: '.gallary-container',
            start: 'top center',
            end: 'top top',
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
              trigger: '.gallary-container',
              start: 'top center',
              end: 'top -100%',
              scrub: true,
            },
          }
        )
      })
    return (
        <div aria-label='Old Portfolio Website Image' className='project-item project-item-one'></div>
    );
};

export default ProjectItemOne;
