/* eslint-disable react/no-unknown-property */
import { OrbitControls, useHelper } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Experience() {
  const cubeRef = useRef();
  const sphereRef = useRef();
  const light = useRef();

  useHelper(light, THREE.DirectionalLightHelper, 1);

  const scene = useThree((state) => state.scene);

  useEffect(() => {
    const helper = new THREE.CameraHelper(light.current.shadow.camera);
    scene.add(helper);

    return () => {
      scene.remmove(helper);
    };
  }, [light.current]);

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
      <directionalLight
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={2}
        shadow-camera-bottom={-2}
        shadow-camera-right={2}
        shadow-camera-left={-2}
        ref={light}
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
      />

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
