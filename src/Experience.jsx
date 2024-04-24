/* eslint-disable react/no-unknown-property */
import { Environment, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { Perf } from "r3f-perf";
import * as THREE from "three";
export default function Experience() {
  const cubeRef = useRef();
  const sphereRef = useRef();

  return (
    <>
      {/* posx, posy, negx, negy, posz, negz로 이미지 붙이기 */}
      {/* <Environment
        background
        files={[
          "./Yokohama/posx.jpg",
          "./Yokohama/negx.jpg",
          "./Yokohama/posy.jpg",
          "./Yokohama/negy.jpg",
          "./Yokohama/posz.jpg",
          "./Yokohama/negz.jpg",
        ]}
      /> */}
      {/* 좀 더 선명한 이미지 hdri */}
      {/* <Environment background files="./hdri/lake_pier_4k.hdr" /> */}
      {/* 화질은 구리지만 Three.js에 내장된 프리셋도 있음 */}
      {/* <Environment background preset="sunset" /> */}

      <Perf position="top-left" />
      <OrbitControls enableDamping={false} />
      {/* <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} /> */}

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
