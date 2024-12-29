import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function CircularText() {

  useGSAP(() => {
    const circularText = document.querySelector('.circular-text');
    circularText.innerHTML = circularText.textContent.replace(/\S|\s/g, match => {
      return match === " " ? `<span>&nbsp;</span>` : `<span>${match}</span>`;
    });
    const elems = circularText.querySelectorAll('span');
    const totalLetters = elems.length;

    for (let i = 0; i < totalLetters; i++) {
      const angle = (360 / totalLetters) * i;
      elems[i].style.transform = `rotate(${angle}deg)`;
    }

    elems.forEach(span => {
      const data = { originValue: 35 };

      gsap.to('.circular-text', {
        keyframes: [
          { rotate: 360, duration: 0.7, ease: "power1.inOut" },
          { rotate: 720, duration: 60 }
        ]
      })
      gsap.fromTo(data, 
        {
          originValue: 35
        },
        {
          originValue: 45,
          duration: 0.8,
        }
      )
      gsap.fromTo(span, 
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.8,
          onUpdate: () => {
            const transformOrigin = `0 ${data.originValue}vh`;
            span.style.transformOrigin = transformOrigin;
            span.style.top = `-${data.originValue}vh`;
          }
        }
      )
    })
  })

  return (
      <h2 className='circular-text' >please wait while this experience loads </h2>
  )
}
export default CircularText;