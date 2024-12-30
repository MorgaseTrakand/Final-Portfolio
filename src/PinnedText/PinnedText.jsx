import { useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function PinnedText() {
  useGSAP(() => {
    
  });

  return (
      <h1 className='pinned-text'>Dedicated to crafting sleek and fluid web experiences, I excel at making beautiful typographical animations . . .</h1>
  )
}
export default PinnedText;