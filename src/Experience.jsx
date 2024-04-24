/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { useRef } from "react";
import * as THREE from "three";

export default function Experience() {
  const cubeRef = useRef();
  const sphereRef = useRef();

  const { position } = useControls({
    position: -2,
  });

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />

      <group>
        <mesh ref={sphereRef} position-x={position}>
          <sphereGeometry />
          <meshStandardMaterial color="#82E0AA" />
        </mesh>
        <mesh ref={cubeRef} position-x={2} scale={1.5}>
          <boxGeometry />
          <meshStandardMaterial color="#F9E79F" />
        </mesh>
        <mesh
          position-y={-1}
          rotation-x={THREE.MathUtils.degToRad(-90)}
          scale={10}
        >
          <circleGeometry />
          <meshStandardMaterial color="#5D6D7E" />
        </mesh>
      </group>
    </>
  );
}
