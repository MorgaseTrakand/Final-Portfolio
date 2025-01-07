import { Canvas, useThree } from '@react-three/fiber';
import './ThreeJS.css';
import { PerspectiveCamera, ContactShadows } from '@react-three/drei';
import Sphere from './Spheres';
import { Environment } from '@react-three/drei';
import { Physics, RigidBody } from '@react-three/rapier';
import Pointer from './Pointer'
import { EffectComposer, N8AO, SMAA, Bloom } from '@react-three/postprocessing';
import { Text } from '@react-three/drei';
import { useState, useEffect } from 'react';

function ThreeCanvasComponent( { start } ) {
  const spheresData = [
    { color: 'white', roughness: 0.1, metalness: 0.0, position: [0.5, -8, 0] },
    { color: 'white', roughness: 0.2, metalness: 0.0, position: [1, -8, 2] },
    { color: 'white', roughness: 0.1, metalness: 0.0, position: [1.5, -8, 3] },
    { color: 'white', roughness: 0.1, metalness: 0.0, position: [2, -8, 1] },
    { color: 'white', roughness: 0.1, metalness: 0.0, position: [2.5, -8, 0] },
    { color: 'white', roughness: 0.1, metalness: 0.0, position: [3, -8, 0.5] },
    { color: 'gold', roughness: 0.1, metalness: 0.0, position: [3.5, -8, 2] },
    { color: 'gold', roughness: 0.1, metalness: 0.0, position: [-0.5, -10, 1] },
    { color: 'gold', roughness: 0.1, metalness: 0.0, position: [-1, -10, 2] },
    { color: 'gold', roughness: 0.1, metalness: 0.0, position: [-1.5, -12, 1] },
    { color: 'gold', roughness: 0.3, metalness: 0.2, position: [-2, -8, 2] },
    { color: 'gold', roughness: 0.3, metalness: 0.2, position: [-2.5, -8, 1] },
    { color: 'gold', roughness: 0.3, metalness: 0.2, position: [-1, -8, 2] },
    { color: 'white', roughness: 0.3, metalness: 0.2, position: [-1, -14, 1] },
    { color: 'white', roughness: 0.3, metalness: 0.2, position: [1, -14, 0] },
    { color: 'gold', roughness: 0.3, metalness: 0.0, position: [-1, -12, 1] },
    { color: 'gold', roughness: 0.3, metalness: 0.2, position: [1, -8, 0] },
    { color: 'white', roughness: 0.3, metalness: 0.2, position: [-1, -8, 0.5] },
    { color: 'white', roughness: 0.3, metalness: 0.2, position: [1, -8, 1] },
    { color: 'gold', roughness: 0.3, metalness: 0.0, position: [-3, -8, 0] },
  ];

  return (
    <>
      <Canvas style={{ backgroundColor: "#f9f9f9" }}>
        <Text color="black" anchorX="center" anchorY="middle">
          Eye-Catching 3D Animations
        </Text>
        <EffectComposer disableNormalPass multisampling={0}>
          <N8AO halfRes color="black" aoRadius={2} intensity={1} aoSamples={6} denoiseSamples={4} />
          <Bloom mipmapBlur levels={7} intensity={0.2} />
          <SMAA />
        </EffectComposer>


        <Physics timeStep="vary" gravity={[0, 0, 0]}>
          {spheresData.map((sphere, index) => (
              <Sphere
              key={index}
              num={index}
              color={sphere.color}
              roughness={sphere.roughness}
              metalness={sphere.metalness}
              position={sphere.position}
              enabled={start}
              />
          ))}
          <Pointer/>
        </Physics>

        {/* <pointLight /> */}
        <PerspectiveCamera makeDefault fov={50} near={0.1} far={1000} position={[0, 0, 10]} />
        <Environment preset='sunset' background={false} intensity={0.3}/>

      </Canvas>
    </>    
  )
}
export default ThreeCanvasComponent;