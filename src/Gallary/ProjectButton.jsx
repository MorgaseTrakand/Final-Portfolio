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
              start: "top center",
              end: "bottom bottom",
              scrub: true,
            },
          }
        )
        timeline.to('.top', {
          width: '90%',
          ease: 'none'
        })
        .to('.right-progress', {
          height: '90%',
          ease: 'none'
        })
        .to('.bottom', {
          width: '90%',
          ease: 'none'
        }) 
        .to('.left-progress', {
          height: '90%',
          ease: 'none'
        })
      })
      
    return (
      <button className='project-description'>
        <div className="cover"></div>
        <h1>Projects</h1>
        <span className="top"></span>
        <span className="right-progress"></span>
        <span className="bottom"></span>
        <span className="left-progress"></span>
      </button>
    );
};

export default ProjectButton;
