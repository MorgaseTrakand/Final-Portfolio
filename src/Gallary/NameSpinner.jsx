import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const NameSpinner = () => {
      useEffect(() => {
       gsap.fromTo('.spinner-animation-container', 
        {
          top: '1em',
          autoAlpha: 0
        },
        {
          top: 0,
          autoAlpha: 1,
          ease: 'power1.inOut',
          duration: 0.4,
          scrollTrigger: {
            trigger: '.gallary-container',
            start: "top center",
            toggleActions: "play none none reverse",
          } 
       })
       gsap.fromTo('.spinner-animation-container',
        {
          top: 0
        },
        {
          top: '-1.5em',
          ease: "power1.inOut",
          duration: 0.4,
          scrollTrigger: {
            trigger: '.gallary-container',
            start: "top top",
            toggleActions: "play none none reverse"
          }
        })
        gsap.fromTo('.spinner-animation-container',
          {
            top: '-1.5em'
          },
          {
            top: '-3em',
            ease: "power1.inOut",
            duration: 0.4,
            scrollTrigger: {
              trigger: '.gallary-container',
              start: "top -30%",
              toggleActions: "play none none reverse"
            }
          })
          gsap.fromTo('.spinner-animation-container',
            {
              top: '-3em'
            },
            {
              top: '-4.55em',
              ease: "power1.inOut",
              duration: 0.4,
              scrollTrigger: {
                trigger: '.gallary-container',
                start: "top -60%",
                toggleActions: "play none none reverse",
              }
          })
          gsap.fromTo('.spinner-animation-container',
            {
              top: '-4.55em'
            },
            {
              top: '-6.1em',
              autoAlpha: 0,
              ease: "power1.inOut",
              duration: 0.3,
              scrollTrigger: {
                trigger: '.gallary-container',
                start: "top -100%",
                toggleActions: "play none none reverse",
              }
            }
          )
      })
      
    return (
      <div className='project-name-spinner'>
        <h1 className='invisible'>Algorithm Sorting Site</h1>
        <div className='spinner-animation-container'>
          <h1>Old Portfolio Site</h1>
          <h1>Spotify Stats Project</h1>
          <h1>Algorithm Sorting Site</h1>
          <h1>Work in Progress</h1>
        </div>
      </div>
    );
};

export default NameSpinner;
