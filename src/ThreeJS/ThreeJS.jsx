import { Canvas, useThree } from '@react-three/fiber';
import './ThreeJS.css';
import { PerspectiveCamera, ContactShadows } from '@react-three/drei';
import Sphere from './Spheres';
import { Environment } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import Pointer from './Pointer'
import { EffectComposer, N8AO, SMAA, Bloom } from '@react-three/postprocessing';
import { Text } from '@react-three/drei';

function ThreeJS() {
  const spheresData = [
    { color: 'white', roughness: 0.1, metalness: 0.0, position: [1, 1, 0] },
    { color: 'white', roughness: 0.2, metalness: 0.0, position: [2, 0, -2] },
    { color: 'white', roughness: 0.1, metalness: 0.0, position: [3, -1, 2] },
    { color: 'white', roughness: 0.1, metalness: 0.0, position: [-1, 2, 1] },
    { color: 'white', roughness: 0.2, metalness: 0.0, position: [1, 1, 0] },
    { color: 'white', roughness: 0.1, metalness: 0.0, position: [2, 0, -2] },
    { color: 'gold', roughness: 0.1, metalness: 0.0, position: [3, -1, 2] },
    { color: 'gold', roughness: 0.1, metalness: 0.0, position: [-1, 2, 1] },
    { color: 'gold', roughness: 0.1, metalness: 0.0, position: [3, -1, 2] },
    { color: 'gold', roughness: 0.1, metalness: 0.0, position: [-1, 2, 1] },
    { color: 'gold', roughness: 0.3, metalness: 0.2, position: [3, -1, 2] },
    { color: 'gold', roughness: 0.3, metalness: 0.2, position: [-1, 2, 1] },
    { color: 'gold', roughness: 0.3, metalness: 0.2, position: [3, -1, 2] },
    { color: 'white', roughness: 0.3, metalness: 0.2, position: [-1, 2, 1] },
    { color: 'white', roughness: 0.3, metalness: 0.2, position: [3, -1, 2] },
    { color: 'gold', roughness: 0.3, metalness: 0.0, position: [-1, 2, 1] },
    { color: 'gold', roughness: 0.3, metalness: 0.2, position: [3, -1, 2] },
    { color: 'white', roughness: 0.3, metalness: 0.2, position: [-1, 2, 1] },
    { color: 'white', roughness: 0.3, metalness: 0.2, position: [3, -1, 2] },
    { color: 'gold', roughness: 0.3, metalness: 0.0, position: [-1, 2, 1] },
  ];

  return (
    <>
      <div className='canvas-container'>
        <Canvas style={{ backgroundColor: "#ededed" }}>
        <Text color="black" anchorX="center" anchorY="middle">
          Eye-Catching 3D Animations
        </Text>
        <EffectComposer disableNormalPass multisampling={0}>
          <N8AO halfRes color="black" aoRadius={2} intensity={1} aoSamples={6} denoiseSamples={4} />
          <Bloom mipmapBlur levels={7} intensity={0.3} />
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
              />
            ))}
            <Pointer />
          </Physics>
          <pointLight />
          <fogExp2 attach="fog" color="black" density={0.01} />
          <PerspectiveCamera makeDefault fov={50} near={0.1} far={1000} position={[0, 0, 10]} />
          <Environment preset='sunset' background={false} />
          <mesh>
            <planeGeometry args={[10, 10]} />
            <shadowMaterial position={[0, 0, 0]}/>
          </mesh>

        </Canvas>
      </div>
    </>    
  )
}
export default ThreeJS;