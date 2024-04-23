/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./Experience";

function App() {
  return (
    <>
      <Canvas>
        <Experience></Experience>
      </Canvas>
    </>
  );
}

export default App;
