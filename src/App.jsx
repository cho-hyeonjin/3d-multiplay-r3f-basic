import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./Experience";
function App() {
  return (
    <Canvas shadows>
      <Experience />
    </Canvas>
  );
}
export default App;
