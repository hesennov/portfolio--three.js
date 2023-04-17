import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
const Cube = () => {
  const textRef = useRef();

  useFrame(state=>(textRef.current.position.x = Math.sin(state.clock.elapsedTime) *2))


  return (
    <mesh>
      <boxGeometry 
      //olcu 
    //   args={[2, 2, 2]}
       /> 
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["blue"]} />
          <Text ref={textRef}  color="#fff">
            Hesennov
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};
export default Cube;
