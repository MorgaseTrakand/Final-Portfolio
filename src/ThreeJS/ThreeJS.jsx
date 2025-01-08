import ThreeCanvasComponent from "./Canvas";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import * as THREE from 'three';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function ThreeJS() {
  const [currentCenter, setCurrentCenter] = useState(new THREE.Vector3(0, 9, 0));
  const [pointerEnabled, setPointerEnabled] = useState(false);

  useGSAP(() => {
    gsap.to('.canvas-container', {
      scrollTrigger: {
        trigger: '.canvas-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 'true',
        pin: '.pinned-canvas',
        onEnter: () => {
        setCurrentCenter(new THREE.Vector3(0, 0, 0))
      },
      onEnterBack: () => {
        setCurrentCenter(new THREE.Vector3(0, 0, 0))
      },
      onLeave: () => {
        setCurrentCenter(new THREE.Vector3(0, 9, 0))
      },
      onLeaveBack: () => {
        setCurrentCenter(new THREE.Vector3(0, -9, 0))
      }
      },
    })
  })

  return (
    <>
    
      <div className='canvas-container'>
        <div className="pinned-canvas">
          <ThreeCanvasComponent currentCenter={currentCenter}/>
        </div>
      </div>
    </>    
  )
}
export default ThreeJS;