/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./Experience";
import * as THREE from "three";

const onCreated = (state) => {
  /** 배경 설정 방법 2 - renderer 이용하기 */
  // const gl = state.gl;
  // gl.setClearColor("#ff00ff", 1);
  /** 배경 설정 방법 3 - scene으로 설정하기 */
  // const scene = state.scene;
  // scene.background = new THREE.Color("#00ff00");
};

function App() {
  return (
    <>
      <Canvas shadows onCreated={onCreated}>
        {/* 배경 설정 방법 4 - attach attribute 사용하기 */}
        {/* <color args={["yellow"]} attach="background" /> */}
        <Experience></Experience>
      </Canvas>
    </>
  );
}

export default App;
