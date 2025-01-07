import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { RigidBody, BallCollider } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';


export default function Sphere({ num, position = [0, 0, 0], color, roughness, metalness, enabled }) {
    const sphere = useRef();
    const api = useRef();

    // useEffect(() => {
    //   api.current.applyImpulse(new THREE.Vector3(0, 100, 0));
    // })

    useFrame(() => {
        if (api.current && enabled) {
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
            position={position}
          >
            <BallCollider args={[0.75]} />
            <mesh ref={sphere} castShadow receiveShadow>
                <sphereGeometry args={[0.75, 64, 64]} />
                <meshStandardMaterial roughness={roughness} metalness={metalness} color={color} />
            </mesh>
          </RigidBody>
        </>
    );
}