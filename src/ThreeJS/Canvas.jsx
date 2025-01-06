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

function ThreeCanvasComponent( { start, pointerEnabled } ) {
  const spheresData = [
    { color: 'white', roughness: 0.1, metalness: 0.0, position: [0.5, 12, 0] },
    { color: 'white', roughness: 0.2, metalness: 0.0, position: [1, 13, -2] },
    { color: 'white', roughness: 0.1, metalness: 0.0, position: [1.5, 14, 2] },
    { color: 'white', roughness: 0.1, metalness: 0.0, position: [2, 11, 1] },
    { color: 'white', roughness: 0.1, metalness: 0.0, position: [2.5, 15, 0] },
    { color: 'white', roughness: 0.1, metalness: 0.0, position: [3, 11.5, -2] },
    { color: 'gold', roughness: 0.1, metalness: 0.0, position: [3.5, 12.5, 2] },
    { color: 'gold', roughness: 0.1, metalness: 0.0, position: [-0.5, 10.5, 1] },
    { color: 'gold', roughness: 0.1, metalness: 0.0, position: [-1, 14.5, 2] },
    { color: 'gold', roughness: 0.1, metalness: 0.0, position: [-1.5, 10, 1] },
    { color: 'gold', roughness: 0.3, metalness: 0.2, position: [-2, 11.2, 2] },
    { color: 'gold', roughness: 0.3, metalness: 0.2, position: [-2.5, 12.8, 1] },
    { color: 'gold', roughness: 0.3, metalness: 0.2, position: [-3, 10.9, 2] },
    { color: 'white', roughness: 0.3, metalness: 0.2, position: [-3.5, 16.2, 1] },
    { color: 'white', roughness: 0.3, metalness: 0.2, position: [3, 14.3, -1] },
    { color: 'gold', roughness: 0.3, metalness: 0.0, position: [-1, 12.4, -1.5] },
    { color: 'gold', roughness: 0.3, metalness: 0.2, position: [3, 13.6, -2] },
    { color: 'white', roughness: 0.3, metalness: 0.2, position: [-1, 12.7, -2.5] },
    { color: 'white', roughness: 0.3, metalness: 0.2, position: [3, 10.1, -3] },
    { color: 'gold', roughness: 0.3, metalness: 0.0, position: [-3, 11.4, -3.5] },
  ];

  const [isPhysicsActive, setIsPhysicsActive] = useState(false);

  useEffect(() => {
    // Enable physics when the component is in the viewport
    if (start) {
      setIsPhysicsActive(true);
    } else {
      setIsPhysicsActive(false);
    }
  }, [start]);

  return (
    <>
      <Canvas style={{ backgroundColor: "#f9f9f9" }}>
        <Text color="black" anchorX="center" anchorY="middle">
          Eye-Catching 3D Animations
        </Text>
        <EffectComposer disableNormalPass multisampling={0}>
          <N8AO halfRes color="black" aoRadius={2} intensity={1} aoSamples={6} denoiseSamples={4} />
          <Bloom mipmapBlur levels={7} intensity={0.3} />
          <SMAA />
        </EffectComposer>


        <Physics timeStep="vary" gravity={[0, 0, 0]} paused={!isPhysicsActive}>
          {spheresData.map((sphere, index) => (
              <Sphere
              key={index}
              num={index}
              color={sphere.color}
              roughness={sphere.roughness}
              metalness={sphere.metalness}
              position={sphere.position}
              />
          ))}
          <Pointer enabled={pointerEnabled}/>
        </Physics>

        <pointLight />
        <PerspectiveCamera makeDefault fov={50} near={0.1} far={1000} position={[0, 0, 10]} />
        <Environment preset='sunset' background={false} />

      </Canvas>
    </>    
  )
}
export default ThreeCanvasComponent;