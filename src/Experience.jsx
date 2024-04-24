/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { useRef } from "react";
import * as THREE from "three";

export default function Experience() {
  const cubeRef = useRef();
  const sphereRef = useRef();

  const {
    position,
    color: x,
    visible,
    select,
  } = useControls({
    position: {
      value: -2,
      min: -2,
      max: 2,
      step: 0.01,
    },
    color: "#ff0000",
    visible: true,
    select: {
      options: ["CASE1", "CASE2", "CASE3"],
    },
  });

  console.log(select);

  return (
    <>
      {<Perf position="bottom-left" />}

      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />

      <group>
        <mesh castShadow receiveShadow ref={sphereRef} position-x={position}>
          <sphereGeometry />
          <meshStandardMaterial color={x} visible={visible} />
        </mesh>
        <mesh castShadow ref={cubeRef} position-x={2} scale={1.5}>
          <boxGeometry />
          <meshStandardMaterial color="#F9E79F" />
        </mesh>
        <mesh
          receiveShadow
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
