import { useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function PinnedText( { spans } ) {

  useGSAP(() => {
    if (spans && spans.length > 0) {
      gsap.fromTo(spans, 
        {
          rotateX: 90,
          translateY: -30
        },
        {
          rotateX: 0,
          translateY: 0,
          ease: 'power1.out',
          stagger: {
            each: 0.05,
            overlap: 0.5
          },
          scrollTrigger: {
            trigger: '.pinned-text-body',
            start: 'top 20%',
            end: 'bottom bottom',
            scrub: 'true'
          }
        }
      )
    }
  }, [spans]);

  return (
      <h1 className='pinned-text'>Dedicated to crafting sleek and fluid web experiences, I excel at making beautiful typographical animations </h1>
  )
}
export default PinnedText;