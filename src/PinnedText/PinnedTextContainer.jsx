  import { useEffect, useState } from 'react';
  import './pinnedText.css';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  import PinnedText from './PinnedText';
  import { useGSAP } from '@gsap/react';

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  function PinnedTextContainer() {
    const [spans, setSpans] = useState(null);

    useGSAP(() => {
      const text = document.querySelector('.pinned-text');
      text.innerHTML = text.textContent.split(' ').map(word => {
        return `<span class="word">${word.split('').map(letter => {
          return `<span class="letter">${letter}</span>`;
        }).join('')}</span>`;
      }).join(' ');
      text.innerHTML += `<span class="word">
        <span class="letter">.</span>&nbsp;
        <span class="letter">.</span>&nbsp;
        <span class="letter">.</span>
      </span>`;
      const currentSpans = text.querySelectorAll('span');
      currentSpans.forEach((span, index) => {
        if (index > 82) {
          span.classList.add('gold-highlights');
        }
      })
      setSpans(gsap.utils.toArray('.letter'))
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
            <PinnedText spans={spans}/>
          </div>
        </div>
        <div className='onevh'></div>
      </>    
    )
  }
  export default PinnedTextContainer;