import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const NameSpinner = () => {
      useEffect(() => {
       gsap.fromTo('.spinner-animation-container', 
        {
          top: '2em',
          autoAlpha: 0
        },
        {
          top: 0,
          autoAlpha: 1,
          ease: 'power1.inOut',
          duration: 0.4,
          scrollTrigger: {
            trigger: '.gallary-container',
            start: "top top",
            toggleActions: "play none none reverse",
          } 
       })
       gsap.fromTo('.spinner-animation-container',
        {
          top: 0
        },
        {
          top: '-2em',
          ease: "power1.inOut",
          duration: 0.4,
          scrollTrigger: {
            trigger: '.gallary-container',
            start: "top -50%",
            toggleActions: "play none none reverse"
          }
        })
        gsap.fromTo('.spinner-animation-container',
          {
            top: '-2em'
          },
          {
            top: '-4em',
            ease: "power1.inOut",
            duration: 0.4,
            scrollTrigger: {
              trigger: document.querySelector('.fourth-block'),
              start: "bottom 70%",
              end: "bottom 70%",
              toggleActions: "play none none reverse"
            }
          })
          gsap.fromTo('.spinner-animation-container',
            {
              top: '-4em'
            },
            {
              top: '-6em',
              ease: "power1.inOut",
              duration: 0.4,
              scrollTrigger: {
                trigger: document.querySelector('.fourth-block'),
                start: "bottom 40%",
                end: "bottom 40%",
                toggleActions: "play none none reverse",
              }
            })
      })
      
    return (
      <div className='project-name-spinner'>
        <h1 className='invisible'>Old Portfolio Concept</h1>
        <div className='spinner-animation-container'>
          <h1>Old Portfolio Concept</h1>
          <h1>Spotify Stats Project</h1>
          <h1>Work in Progress</h1>
          <h1>Work in Progress</h1>
        </div>
      </div>
    );
};

export default NameSpinner;
