import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function CircularText( { isLoaded } ) {
  function getCurrentRotation(el){
    var st = window.getComputedStyle(el, null);
    var tm = st.getPropertyValue("-webkit-transform") ||
             st.getPropertyValue("-moz-transform") ||
             st.getPropertyValue("-ms-transform") ||
             st.getPropertyValue("-o-transform") ||
             st.getPropertyValue("transform") ||
             "none";
    if (tm != "none") {
      var values = tm.split('(')[1].split(')')[0].split(',');
      var angle = Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI));
      return (angle < 0 ? angle + 360 : angle); //adding 360 degrees here when angle < 0 is equivalent to adding (2 * Math.PI) radians before
    }
    return 0;
  }

  useEffect(() => {
    if (isLoaded) {
      gsap.killTweensOf('.circular-text');
      const currentRotation = getCurrentRotation(document.querySelector('.circular-text')) + 360;
      const data = { originValue: 35 };

      gsap.fromTo('.circular-text', 
        {
          rotate: currentRotation,
        },
        {
          duration: 0.5,
          ease: "power1.inOut",
          rotate: currentRotation + 720
        }
      )
      const circularText = document.querySelector('.circular-text');
      const elems = circularText.querySelectorAll('span');
      elems.forEach(span => {
        gsap.fromTo(data,
          {
            originValue: 45
          },
          {
            originValue: 100,
            duration: 0.9,
            ease: "power1.inOut",
            onUpdate: () => {
              const transformOrigin = `0 ${data.originValue}vh`;
              span.style.transformOrigin = transformOrigin;
              span.style.top = `-${data.originValue}vh`;
            }
          }
        )
      })
      // gsap.to('.radial-one', 
      //   {
      //     scale: 20,
      //     duration: 0.5,
      //     ease: "power1.inOut"
      //   }
      // )
    }
  }, [isLoaded])

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

    gsap.to('.circular-text', {
      keyframes: [
        { rotate: 360, duration: 0.7, ease: "power1.inOut" },
        { rotate: 720, duration: 60 }
      ]
    })

    elems.forEach(span => {
      const data = { originValue: 35 };

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