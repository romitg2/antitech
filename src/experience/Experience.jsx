/* eslint-disable react/no-unknown-property */
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Experience() {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.y += 0.001;
    meshRef.current.rotation.x += 0.001;
    meshRef.current.rotation.z += 0.001;
  }, []);

  return (
    <>
      <mesh ref={meshRef} position={[2, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}

export default Experience;
