import { useGLTF } from "@react-three/drei";

/* eslint-disable react/no-unknown-property */
export default function Girl(props) {
  const girl = useGLTF("./character3.glb");

  return <primitive object={girl.scene} {...props} />;
}
