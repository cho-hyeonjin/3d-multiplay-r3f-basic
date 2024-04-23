/* eslint-disable react/no-unknown-property */
import { Html, OrbitControls } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Experience() {
  const cubeRef = useRef();

  // useFrame((state, delta) => {
  //   cubeRef.current.rotation.y += delta;
  // });

  // /** 카메라 꺼내기 */
  // useFrame((state, delta) => {
  //   const angle = state.clock.elapsedTime;

  //   state.camera.position.x = Math.sin(angle) * 8;
  //   state.camera.position.z = Math.cos(angle) * 8;
  //   state.camera.lookAt(0, 0, 0);
  // });

  return (
    <>
      <OrbitControls enableDamping={true} />

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
