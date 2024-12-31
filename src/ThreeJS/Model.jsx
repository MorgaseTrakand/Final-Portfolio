import { useEffect, useState, useRef } from 'react';
import { MeshTransmissionMaterial, useGLTF, Text, OrbitControls } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

function Model() {
  const { nodes } = useGLTF('Sphere.glb');
  const { viewport } = useThree();
  const mesh = useRef()

  // useFrame(() => {
  //   mesh.current.rotation.z += 0.02
  //   mesh.current.rotation.x += 0.02
  // });

  return (
    <>
      <group scale={viewport.width / 22}>
        <Text fontSize={2} anchorX="center" anchorY="middle" position={[0, 0, -4]}>
          Eye-Catching{'\n'}3D Animations
        </Text>
        <mesh ref={mesh} {...nodes.Sphere} position={[0, 0, 0]} scale={3}>
          <MeshTransmissionMaterial 
              thickness={1}
              roughness={0.1}
              transmission={1}
              ior={1.2}
              chromaticAberration={0.04} 
              backside={false}  
          />
        </mesh>
      </group>
      <OrbitControls />
    </>    
  )
}
export default Model;