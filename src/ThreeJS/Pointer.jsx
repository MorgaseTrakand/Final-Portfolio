import * as THREE from 'three';
import { useRef, useState, useEffect } from 'react';
import { BallCollider, RigidBody } from '@react-three/rapier';
import { useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export default function Pointer() {
  const sphere = useRef();
  const api = useRef();
  const { camera } = useThree();
  const [mouse, setMouse] = useState(new THREE.Vector2());
  const onMouseMove = (event) => {
    // Normalize mouse position to NDC (-1 to 1)
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    setMouse(new THREE.Vector2(x, y));
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  useFrame(() => {
    if (api.current) {
      // Create a raycaster and project mouse position into the scene
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      // Create a plane at z=0 to intersect with the ray
      const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const intersectCoords = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, intersectCoords);

      if (intersectCoords) {
        // Smoothly translate the rigid body to the intersection point
        api.current.setNextKinematicTranslation({ x: intersectCoords.x, y: intersectCoords.y, z: intersectCoords.z });
      }
    }
  });

  return (
    <>
      {/* <EffectComposer>
        <Bloom intensity={0.2} luminanceThreshold={0.1} luminanceSmoothing={0.9} />
      </EffectComposer> */}
      <RigidBody ref={api} colliders={false} type="kinematicPosition" restitution={1.5}>
        <BallCollider args={[1]} />
        <mesh scale={0.2}>
          <sphereGeometry />
          <meshBasicMaterial color={[4, 4, 4]} toneMapped={false} />

        <pointLight intensity={20} distance={20} color={"white"} />
        </mesh>
      </RigidBody>
    </>
  );
}
