import { useEffect, useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

function CornerText() {

  useGSAP(() => {
    const cornerTexts = document.querySelectorAll('.corner-text');
    cornerTexts.forEach(element => {
      element.innerHTML = element.textContent.replace(/\S|\s/g, match => {
        return match === " " ? `<span class="corner-text-span">&nbsp;</span>` : `<span class="corner-text-span">${match}</span>`;
      });
    })
    const hiddenCornerTexts = document.querySelectorAll('.hidden-corner-text');
    hiddenCornerTexts.forEach(element => {
      element.innerHTML = element.textContent.replace(/\S|\s/g, match => {
        return match === " " ? `<span>&nbsp;</span>` : `<span class="absolute-hidden-text">${match}</span>`;
      });
    })
    
    gsap.fromTo('.bottom-left-text', 
      {
        y: '-100%'
      },
      {
        y: '0%',
        duration: 0.4,
        delay: 0.2,
        ease: 'power1.inOut',
      }
    );
    gsap.fromTo('.top-right-text', 
      {
        y: '100%'
      },
      {
        y: '0%',
        duration: 0.4,
        delay: 0.4,
        ease: 'power1.inOut',
      }
    );
    gsap.fromTo('.bottom-right-text', 
      {
        y: '-100%'
      },
      {
        y: '0%',
        duration: 0.4,
        delay: 0.6,
        ease: 'power1.inOut',
      }
    );
    const textMasks = document.querySelectorAll('.text-mask');

    textMasks.forEach((element, index) => {
      const spans = element.querySelectorAll('.corner-text-span');
      const absoluteSpans = element.querySelectorAll('.absolute-hidden-text')

      element.addEventListener('mouseenter', () => {
        gsap.to(spans, {
          y: '-100%',
          duration: 0.15, 
          ease: "power1.inOut",
          stagger: 0.01,
        })
        gsap.to(absoluteSpans, {
          y: '-100%',
          duration: 0.15, 
          ease: "power1.inOut",
          stagger: 0.01,
        })
      })
      element.addEventListener('mouseleave', () => {
        gsap.to(spans, {
          y: 0,
          duration: 0.15,
          ease: 'power1.inOut',
          stagger: 0.01
        })
        gsap.to(absoluteSpans, {
          y: 0,
          duration: 0.15,
          ease: 'power1.inOut',
          stagger: 0.01
        })
      })
    })
  })

  return (
    <>
      <div className='text-mask topLeft'>
        <h2 className='corner-text top-left-text'>Design Portfolio 2025</h2>
        <h2 className='hidden-corner-text'>Design Portfolio 2025</h2>
      </div>
      <div className='text-mask bottomLeft'>
        <h2 className='corner-text bottom-left-text'>December 26, 12:25</h2>
        <h2 className='hidden-corner-text'>December 26, 12:25</h2>
      </div>
      <div className='text-mask topRight'>
        <h2 className='corner-text top-right-text'>Crafted with Precision</h2>
        <h2 className='hidden-corner-text'>Crafted with Precision</h2>
      </div>
      <div className='text-mask bottomRight'>
        <h2 className='corner-text bottom-right-text'>Visual Storytelling</h2>
        <h2 className='hidden-corner-text'>Visual Storytelling</h2>
      </div>
    </>
  )
}
export default CornerText;