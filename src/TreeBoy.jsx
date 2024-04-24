import { useAnimations, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect } from "react";
export default function TreeBoy(props) {
  const treeBoy = useGLTF("./TreeBoy.glb");
  const animations = useAnimations(treeBoy.animations, treeBoy.scene);

  const { animationName } = useControls({
    animationName: { options: animations.names },
  });
  useEffect(() => {
    treeBoy.scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;
      }
    });
  }, [treeBoy]);
  useEffect(() => {
    console.log(animationName);
    const action = animations.actions[animationName];
    action.reset().fadeIn(0.5).play();
    return () => {
      action.fadeOut(0.5);
    };
  }, [animationName]);

  return <primitive object={treeBoy.scene} {...props} />;
}
