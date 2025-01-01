import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import './ThreeJS.css';
import { Environment, PerspectiveCamera } from '@react-three/drei';

function ThreeJS() {

  return (
    <>
      <div className='canvas-container'>
        <Canvas style={{ backgroundColor: "white" }}>
          <PerspectiveCamera makeDefault fov={70} near={0.1} far={1000} position={[0, 0, -10]} />
          <directionalLight intensity={3} position={[0, 3, 2]} />
          <Environment preset='warehouse' background={false} />
          <Model />
        </Canvas>
      </div>
    </>    
  )
}
export default ThreeJS;