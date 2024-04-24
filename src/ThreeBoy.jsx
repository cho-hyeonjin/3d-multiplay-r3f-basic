/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

function TreeBoy(props) {
  const treeBoy = useGLTF("./TreeBoy.glb");
  return <primitive object={treeBoy.scene} {...props} />;
}

export default TreeBoy;
