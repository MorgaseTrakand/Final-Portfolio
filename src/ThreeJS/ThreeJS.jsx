import ThreeCanvasComponent from "./Canvas";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function ThreeJS() {
  const [start, setStart] = useState(false);
  const [pointerEnabled, setPointerEnabled] = useState(false);

  useGSAP(() => {
    gsap.to('.canvas-container', {
      scrollTrigger: {
        trigger: '.canvas-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 'true',
        pin: true,
      },
      onStart: () => {
        setStart(true)
      },
    })
  })

  return (
    <>
    
      <div className='canvas-container'>
        <div className="pinned-canvas">
          <ThreeCanvasComponent start={start}/>
        </div>
      </div>
    </>    
  )
}
export default ThreeJS;