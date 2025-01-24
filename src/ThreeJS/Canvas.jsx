import { Canvas} from '@react-three/fiber';
import './ThreeJS.css';
import { PerspectiveCamera, Environment} from '@react-three/drei';
import Sphere from './Spheres';
import { Physics } from '@react-three/rapier';
import Pointer from './Pointer'
import LoaderModule from './Loader';
import { Suspense } from 'react';

function ThreeCanvasComponent( { currentCenter, setSceneLoaded } ) {
  const spheresData = [
    { color: '#ffbf44', roughness: 0.2, metalness: 0.0, position: [0.5, -8, 0] },
    { color: 'white', roughness: 0.2, metalness: 0.0, position: [1, -8, 2] },
    { color: 'white', roughness: 0.1, metalness: 0.0, position: [1.5, -8, 3] },
    { color: 'white', roughness: 0.1, metalness: 0.0, position: [2, -8, 1] },
    { color: 'white', roughness: 0.1, metalness: 0.0, position: [2.5, -8, 0] },
    { color: 'white', roughness: 0.1, metalness: 0.0, position: [3, -8, 0.5] },
    { color: '#ffbf44', roughness: 0.1, metalness: 0.0, position: [3.5, -8, 2] },
    { color: '#ffbf44', roughness: 0.1, metalness: 0.0, position: [-0.5, -10, 1] },
    { color: '#ffbf44', roughness: 0.1, metalness: 0.0, position: [-1, -10, 2] },
    { color: '#ffbf44', roughness: 0.1, metalness: 0.0, position: [-1.5, -12, 1] },
    { color: '#ffbf44', roughness: 0.3, metalness: 0.0, position: [-2, -8, 2] },
    { color: '#ffbf44', roughness: 0.3, metalness: 0.0, position: [-2.5, -8, 1] },
    { color: '#ffbf44', roughness: 0.3, metalness: 0.0, position: [-1, -8, 2] },
    { color: 'white', roughness: 0.3, metalness: 0.0, position: [-1, -14, 1] },
    { color: 'white', roughness: 0.3, metalness: 0.0, position: [1, -14, 0] },
    { color: '#ffbf44', roughness: 0.3, metalness: 0.0, position: [-1, -12, 1] },
    { color: '#ffbf44', roughness: 0.3, metalness: 0.0, position: [1, -8, 0] },
    { color: 'white', roughness: 0.3, metalness: 0.0, position: [-1, -8, 0.5] },
    { color: 'white', roughness: 0.3, metalness: 0.0, position: [1, -8, 1] },
    { color: '#ffbf44', roughness: 0.3, metalness: 0.0, position: [-3, -8, 0] },
  ];

  return (
    <>
      <Canvas style={{ backgroundColor: "transparent" }}>
        <Suspense fallback={<LoaderModule setSceneLoaded={setSceneLoaded}/>}>
          <Physics gravity={[0, 0, 0]}>
            {spheresData.map((sphere, index) => (
                <Sphere
                key={index}
                num={index}
                color={sphere.color}
                roughness={sphere.roughness}
                metalness={sphere.metalness}
                position={sphere.position}
                currentCenter={currentCenter}
                />
            ))}
            <Pointer/>
          </Physics>

          {/* <pointLight /> */}
          <PerspectiveCamera makeDefault fov={50} near={0.1} far={1000} position={[0, 0, 10]} />
          <Environment preset='sunset' background={false} intensity={0.3}/>
        </Suspense>
      </Canvas>
    </>    
  )
}
export default ThreeCanvasComponent;