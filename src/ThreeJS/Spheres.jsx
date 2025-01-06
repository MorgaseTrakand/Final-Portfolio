import * as THREE from 'three';
import { useRef } from 'react';
import { RigidBody, BallCollider } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';


export default function Sphere({ num, position, color, roughness, metalness }) {
    const sphere = useRef();
    const api = useRef();

    position = [0, 0, 0]; // Default position (can override via props)

    useFrame(() => {
        if (api.current) {
            const currentPosition = api.current.translation();
            const directionToOrigin = new THREE.Vector3(0, 0, 0).sub(currentPosition).normalize();
            const impulseStrength = 1; // Adjust impulse strength
            api.current.applyImpulse(directionToOrigin.multiplyScalar(impulseStrength), true);
        }
    });

    return (
        <>
          <RigidBody
            ref={api}
            colliders={false}
            linearDamping={4}
            angularDamping={1}
            friction={0.1}
          >
            <BallCollider args={[0.75]} />
            <mesh position={position} ref={sphere} castShadow receiveShadow>
                <sphereGeometry args={[0.75, 64, 64]} />
                <meshStandardMaterial roughness={roughness} metalness={metalness} color={color} />
            </mesh>
          </RigidBody>
        </>
    );
}