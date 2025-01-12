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
        start: 'top center',
        end: 'bottom bottom',
        scrub: true,
        pin: '.pinned-canvas',
      },
    })
    gsap.from('.three-background-text-h1', 
      {
        y: 180,
        duration: 0.5,
        rotation: 8,
        scrollTrigger: {
          trigger: '.canvas-container',
          start: 'top center',
          end: 'bottom bottom',
          toggleActions: 'play reverse play reverse'
        }
      }
    )
    gsap.to({}, {
      scrollTrigger: {
        trigger: '.canvas-container',
        start: 'top center',
        end: 'bottom bottom',
        onEnter: () => {
          setTimeout(() => {
            setCurrentCenter(new THREE.Vector3(0, 0, 0));
          }, 200); // 500ms delay
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
      }
    })
  })

  return (
    <>
    
      <div className='canvas-container'>
        <div className="pinned-canvas">
          <div className="three-background-text">
            <div className="three-background-text-mask">
              <h1 className="three-background-text-h1">Eye-Catching <span className="gold-text">3D Animations</span></h1>
            </div>
          </div>
          <ThreeCanvasComponent currentCenter={currentCenter}/>
        </div>
      </div>
    </>    
  )
}
export default ThreeJS;