import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import './ThreeJS.css';
import { Environment } from '@react-three/drei';

function ThreeJS() {

  return (
    <>
      <div className='canvas-container'>
        <Canvas style={{ backgroundColor: "black" }}>
          {/* <directionalLight intensity={3} position{[0, 3, 2]} /> */}
          <Environment preset='city'/>
          <Model />
        </Canvas>
      </div>
    </>    
  )
}
export default ThreeJS;