/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export default function Experience() {
  // const model = useLoader(GLTFLoader, "./books_with_magnifier.glb");
  const model = useGLTF("./books_with_magnifier.glb");

  return (
    <>
      <Perf position="top-left" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} castShadow />
      <OrbitControls makeDefault />
      <group>
        <primitive object={model.scene} scale={10} position-y={-0.7} />
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
