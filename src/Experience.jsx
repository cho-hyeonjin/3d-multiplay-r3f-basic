import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import { useRef } from "react";
export default function Experience() {
  const rb = useRef();

  const jump = () => {
    console.log(rb);
    rb.current.applyImpulse({ x: 0, y: 20, z: 0 });
  };

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <OrbitControls makeDefault />
      <Physics debug>
        <RigidBody ref={rb} colliders="ball" position={[-1.5, 2, 0]}>
          <mesh castShadow onClick={jump}>
            <sphereGeometry />
            <meshStandardMaterial color="#82E0AA" />
          </mesh>
        </RigidBody>
        <RigidBody position={[1.5, 2, 0]}>
          <mesh castShadow>
            <boxGeometry />
            <meshStandardMaterial color="#F9E79F" />
          </mesh>
        </RigidBody>
        <RigidBody type="fixed">
          <mesh position-y={-1}>
            <boxGeometry args={[10, 0.1, 10]} />
            <meshStandardMaterial color="#5D6D7E" />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
}
