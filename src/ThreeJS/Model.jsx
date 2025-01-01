import { useEffect, useRef } from 'react';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { MeshPhysicalMaterial } from 'three';

function Model() {
  const { nodes: nodes1 } = useGLTF('Cylinder.glb');
  const { nodes: nodes2 } = useGLTF('Cross.glb');
  const mesh = useRef();
  const cross = useRef();

  useEffect(() => {
    if (mesh.current) {
      console.log(nodes1, nodes2)
      const material = new MeshPhysicalMaterial({
        color: '#FFBF44', // Glass color
        metalness: 0,     // Glass is not metallic
        roughness: 1,     // Glass is smooth, low roughness
        opacity: 1,       // Slight opacity to make it look like glass
        clearcoat: 1,     // Add a shiny clearcoat layer on top
        clearcoatRoughness: 0, // Smooth clearcoat
      });

      mesh.current.material = material;
      cross.current.material = material;
    }
  }, [nodes1]);

  return (
    <>
      <group>
        <mesh ref={mesh} {...nodes1.Cylinder} position={[12, -4, 5]} scale={2.25} />
      </group>

      <group>
        <mesh ref={cross} {...nodes2.Cylinder004} position={[-12, 4, 5]} scale={1.25} />
      </group>
      <OrbitControls />
    </>
  );
}

export default Model;