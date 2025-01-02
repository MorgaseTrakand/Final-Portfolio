import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function DoubleTextAnimation({ string, className }) {
  const maskRef = useRef(null);
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);

  useEffect(() => {
    const mask = maskRef.current;
    const firstText = firstTextRef.current;
    const secondText = secondTextRef.current;

    const wrapText = (element) => {
      element.innerHTML = element.textContent.replace(/\S|\s/g, (match) => {
        return match === ' '
          ? `<span style="display: inline-block;">&nbsp;</span>`
          : `<span style="display: inline-block;">${match}</span>`;
      });
    };

    wrapText(firstText);
    wrapText(secondText);

    const firstSpans = firstText.querySelectorAll('span');
    const secondSpans = secondText.querySelectorAll('span');

    // Add event listeners for hover animation
    const handleMouseEnter = () => {
      console.log(firstSpans)
      gsap.to(firstSpans, {
        y: '-100%',
        duration: 0.15,
        ease: 'power1.inOut',
        stagger: 0.01,
      });
      gsap.to(secondSpans, {
        y: '-100%',
        duration: 0.15,
        ease: 'power1.inOut',
        stagger: 0.01,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(firstSpans, {
        y: 0,
        duration: 0.15,
        ease: 'power1.inOut',
        stagger: 0.01,
      });
      gsap.to(secondSpans, {
        y: 0,
        duration: 0.15,
        ease: 'power1.inOut',
        stagger: 0.01,
      });
    };

    mask.addEventListener('mouseenter', handleMouseEnter);
    mask.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup event listeners
    return () => {
      mask.removeEventListener('mouseenter', handleMouseEnter);
      mask.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={maskRef} className="mask" style={{ position: 'relative', overflow: 'hidden' }}>
      <h2 ref={firstTextRef} className={`double-animation-text ${className}`}>
        {string}
      </h2>
      <h2
        ref={secondTextRef}
        className={`double-animation-text ${className}`}
        style={{ position: 'absolute' }}
      >
        {string}
      </h2>
    </div>
  );
}

export default DoubleTextAnimation;