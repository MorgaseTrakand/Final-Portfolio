import { useEffect, useState } from 'react';
import gsap from 'gsap';

function ScrollNotice() {
  useEffect(() => {
    const scrollNotice = document.querySelector('.scroll-notice');
    const scrollHidden = document.querySelector('.scroll-hidden');
    scrollNotice.innerHTML = scrollNotice.textContent.replace(/\S|\s/g, match => {
      return match === " " ? `<span>&nbsp;</span>` : `<span>${match}</span>`;
    });
    scrollHidden.innerHTML = scrollNotice.textContent.replace(/\S|\s/g, match => {
      return match === " " ? `<span>&nbsp;</span>` : `<span>${match}</span>`;
    });

    const noticeSpans = scrollNotice.querySelectorAll('span');
    const hiddenSpans = scrollHidden.querySelectorAll('span');

    const textMask = document.querySelector('.scroll-text-mask');

    textMask.addEventListener('mouseenter', () => {
      gsap.to(noticeSpans, {
        y: '-100%',
        duration: 0.15, 
        ease: "power1.inOut",
        stagger: 0.01,
      })
      gsap.to(hiddenSpans, {
        y: '-100%',
        duration: 0.15, 
        ease: "power1.inOut",
        stagger: 0.01,
      })
    })
    textMask.addEventListener('mouseleave', () => {
      gsap.to(noticeSpans, {
        y: 0,
        duration: 0.15,
        ease: 'power1.inOut',
        stagger: 0.01
      })
      gsap.to(hiddenSpans, {
        y: 0,
        duration: 0.15,
        ease: 'power1.inOut',
        stagger: 0.01
      })
    })
  })

  return (
    <> 
    <div className='absolutely-positioned'>
      <div className="scroll-text-mask">
        <h1 className='scroll-notice'>(scroll to discover)</h1>
        <h1 className='scroll-hidden'>(scroll to discover)</h1>
      </div>
    </div>
    </>   
  )
}
export default ScrollNotice;