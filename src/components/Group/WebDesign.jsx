import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Computer from "../Three-Gplb/Computer";
const WebDesign = () => {
  return (
    // <Canvas>
    //   <OrbitControls
    //     enableZoom={false}
    //     // autoRotate
    //   />
    //   {/* <Stage environment="city" intensity={0.6}> */}
    //   <Computer />
    //   {/* </Stage> */}
    //   <ambientLight intensity={1} />
    //   <directionalLight position={[3, 2, 1]} />
    //   <OrbitControls />
    // </Canvas>
    <Canvas camera={{ fov: 30, position: [5, 2, -1] }}>
      <OrbitControls enableZoom={false} autoRotate  />
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
      <Computer />
    </Canvas>
  );
};
export default WebDesign;
