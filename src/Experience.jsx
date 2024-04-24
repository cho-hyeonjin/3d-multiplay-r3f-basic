/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { Perf } from "r3f-perf";
import * as THREE from "three";
export default function Experience() {
  const cubeRef = useRef();
  const sphereRef = useRef();

  return (
    <>
      <Perf position="top-left" />
      <OrbitControls enableDamping={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />

      <group>
        <mesh ref={sphereRef} position-x={-2}>
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
