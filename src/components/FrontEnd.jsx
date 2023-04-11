import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "./Three-Gplb/React";
const FrontEnd = () => {
  return (
    <Canvas camera={{ fov: 70, position: [5, 2, -1] }}>
      <OrbitControls enableZoom={false} autoRotate />
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
      <React />
    </Canvas>
  );
};
export default FrontEnd;
