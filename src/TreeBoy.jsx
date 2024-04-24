/* eslint-disable react/no-unknown-property */
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function TreeBoy(props) {
  const treeBoy = useGLTF("./TreeBoy.glb");
  const animations = useAnimations(treeBoy.animations, treeBoy.scene);
  console.log(animations);

  useEffect(() => {
    treeBoy.scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;
      }
    });
  });

  const action = animations.actions.Walk;
  console.log(action);
  action.play();

  window.setTimeout(() => {
    animations.actions.Run.paly();
    animations.actions.Run.crossFadeFrom(animations.actions.walk, 1);
  }, 3000);

  return <primitive object={treeBoy.scene} {...props} />;
}
