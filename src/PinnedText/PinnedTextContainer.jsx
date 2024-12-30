  import { useEffect, useState } from 'react';
  import './pinnedText.css';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  import { useGSAP } from '@gsap/react';

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  function PinnedTextContainer() {

    useGSAP(() => {
      const text = document.querySelector('.pinned-text');
      text.innerHTML = text.textContent.split(' ').map(word => {
        return `<span class="word">${word.split('').map(letter => {
          return `<span class="letter">${letter}</span>`;
        }).join('')}</span>`;
      }).join(' ');

      const spans = text.querySelectorAll('span');
      spans.forEach((span, index) => {
        if (index > 82) {
          span.classList.add('gold-highlights');
        }
      })

      gsap.to('.pinned-text-container',
        {
          scrollTrigger: {
            trigger: '.pinned-text-body',
            start: "top top",
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
            anticipatePin: 1
          },
        }
      )
    })
    return (
      <>
        <div className='pinned-text-body'>
          <div className='pinned-text-container'>
            <h1 className='pinned-text'>Dedicated to crafting sleek and fluid web experiences, I excel at making beautiful typographical animations . . .</h1>
          </div>
        </div>
        <div className='onevh'></div>
      </>    
    )
  }
  export default PinnedTextContainer;