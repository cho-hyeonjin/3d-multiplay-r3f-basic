/* eslint-disable react/no-unknown-property */
import { Float, Html, OrbitControls, Text } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Experience() {
  const cubeRef = useRef();

  return (
    <>
      <OrbitControls enableDamping={true} />

      <Float speed={7} floatIntensity={7}>
        <Text
          font="./fonts/NotoSansKR-Medium.otf"
          fontSize={0.8}
          color="salmon"
          position={[0, 2.4, 0]}
          maxWidth={4}
          textAlign="center"
        >
          R3F & drei
        </Text>
      </Float>

      <Html
        position={[0, 2, 0]}
        wrapperClass="label"
        center
        distanceFactor={10}
      >
        Html이다..!
      </Html>

      <ambientLight intensity={0.2} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />

      <mesh position-x={-2}>
        <Html occlude={[cubeRef]} wrapperClass="label" center>
          동글동글
        </Html>
        <sphereGeometry />
        <meshStandardMaterial color="#82e0aa" />
      </mesh>

      <mesh ref={cubeRef} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="#E9E79F" />
      </mesh>

      <mesh
        position-y={-1}
        rotation-x={THREE.MathUtils.degToRad(-90)}
        scale={10}
      >
        <circleGeometry />
        <meshStandardMaterial color="#5D6D7E" />
      </mesh>
    </>
  );
}

export default Experience;
