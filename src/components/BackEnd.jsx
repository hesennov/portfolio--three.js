import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Csharp from "./Three-Gplb/Csharp";
const BackEnd = () => {
  return (
    <Canvas camera={{ fov: 8000, position: [5, 2, 5] }}>
      <OrbitControls enableZoom={false} autoRotate />
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
      <Csharp />
    </Canvas>
  );
};
export default BackEnd;
