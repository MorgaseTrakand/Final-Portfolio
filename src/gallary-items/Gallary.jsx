import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectItemOne from './project-item-one';
import ProjectItemTwo from './project-item-two';
import ProjectItemThree from './project-item-three';
import ProjectItemFour from './project-item-four';
import ProjectButton from './project-button';
import NameSpinner from './project-name-spinner';
import './Gallary.css';
gsap.registerPlugin(ScrollTrigger);

const Gallary = () => {
      useEffect(() => {
        const blocks = document.querySelectorAll('.block');
        blocks.forEach(block => {
            gsap.fromTo(block, 
              {
                backgroundColor: "#181818",
              },
              {
                backgroundColor: "#0a0a0a",
                scrollTrigger: {
                  trigger: document.querySelector('.fourth-block'),
                  start: 'top bottom',
                  end: 'top 75%',
                  scrub: true,
                }
            })
        })
        const projectItems = document.querySelectorAll('.project-item')
        projectItems.forEach(item => {
          item.addEventListener('mouseenter', () => {
            gsap.to(item, {
              backgroundSize: "102.5%",
              duration: 0.6,
              ease: "power1.out",
            });
          })
        })
        projectItems.forEach(item => {
          item.addEventListener('mouseleave', () => {
            gsap.to(item, {
              backgroundSize: "100%",
              duration: 0.8,
              ease: "power1.out",
            })
          })
        })
        
        gsap.fromTo(document.querySelector('.project-description'),
          {
            autoAlpha: 0,
            bottom: '30px'
          },
          {
            autoAlpha: 1,
            bottom: '40px',
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: document.querySelector('.fourth-block'),
              start: 'top center',
              end: 'top 40%',
              scrub: true,
            }
          }
        )
        gsap.fromTo(document.querySelector('.project-name-spinner'), 
        {
          y: 0,
          autoAlpha: 1,
        },
        {
          x: '10px',
          autoAlpha: 0,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: document.querySelector('.fifth-block'),
            start: "top top",
            end: "top -10%",
            scrub: true,
            toggleActions: "play none none reverse"
          }
        })
        gsap.fromTo(document.querySelector('.project-description'), 
        {
          y: 0,
          autoAlpha: 1,
        },
        {
          y: '10px',
          autoAlpha: 0,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: document.querySelector('.fifth-block'),
            start: "top top",
            end: "top -10%",
            scrub: true,
            toggleActions: "play none none reverse"
          }
        })
        gsap.to(document.querySelector('.project-container'), 
          {
            scrollTrigger: {
              trigger: document.querySelector('.project-container'),
              start: 'top center',
              end: 'bottom -10%',
              scrub: true,
              onEnter: () => {
                document.querySelector('.project-container').style.position = "fixed";
              },
              onEnterBack: () => {
                document.querySelector('.project-container').style.position = "fixed";
              },
              onLeave: () => {
                document.querySelector('.project-container').style.position = "relative";
              },
              onLeaveBack: () => {
                document.querySelector('.project-container').style.position = "relative";
              }
            }
          }
        )
      })
      
    return (
      <div className='project-container'>
          <div className='project-left'>
            <ProjectItemOne />
            <ProjectItemThree />
          </div>
          <div className='project-right'>
            <ProjectItemTwo />
            <ProjectItemFour />
          </div>
          <ProjectButton/>
          <NameSpinner />
      </div>
    );
};

export default Gallary;
