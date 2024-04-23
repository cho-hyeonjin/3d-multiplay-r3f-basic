/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import "./App.css";
import * as THREE from "three";

function App() {
  return (
    <>
      <Canvas>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshBasicMaterial color="#82e0aa" />
        </mesh>

        <mesh position-x={2} scale={1.5}>
          <boxGeometry />
          <meshBasicMaterial color="#E9E79F" />
        </mesh>

        <mesh
          position-y={-1}
          rotation-x={THREE.MathUtils.degToRad(-90)}
          scale={10}
        >
          <circleGeometry />
          <meshBasicMaterial color="#5D6D7E" />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
