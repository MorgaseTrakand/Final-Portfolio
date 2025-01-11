import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProjectButton = () => {
      useEffect(() => {
        const timeline = gsap.timeline(
          {
            scrollTrigger: {
              trigger: ".gallary-container",
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            },
          }
        )
        timeline.to('.top', {
          width: '90%',
          ease: 'none'
        })
        .to('.right', {
          height: '90%',
          ease: 'none'
        })
        .to('.bottom', {
          width: '90%',
          ease: 'none'
        }) 
        .to('.left', {
          height: '90%',
          ease: 'none'
        })
      })
      
    return (
      <button className='project-description'>
        <div className="cover"></div>
        <h1>Projects</h1>
        <span className="top"></span>
        <span className="right"></span>
        <span className="bottom"></span>
        <span className="left"></span>
      </button>
    );
};

export default ProjectButton;
