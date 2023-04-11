import styled from "styled-components";
import Navbar from "./Navbar";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    height: 140vh;
  }
`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 7px;
`;

const Subtitle = styled.h2`
  color: blue;
`;

const Desc = styled.p`
  font-size: 24px;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #000099;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 700px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>I am Hasan Hasanov</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What We Do</Subtitle>
          </WhatWeDo>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            animi ipsa assumenda ea magni tempore?
          </Desc>
          <Button> Leran more</Button>
        </Left>
        <Right>
          {/* 3d modal. */}
          <Canvas
          // camera={{ fov: 25, position: [5, 5, 5] }}
          >
            <OrbitControls
              enableZoom={false}
              // autoRotate
            />
            <ambientLight intensity={1} />
            <directionalLight position={[1, 2, 3]} />
            <Sphere args={[1, 200, 100]} scale={2.5}>
              <MeshDistortMaterial
                color="#000033"
                attach="material"
                distort={0.4}
                speed={2}
              />
            </Sphere>
          </Canvas>
          {/* <Img src="./img/moon.png" /> */}
          <Img src="./img/HarryPotter.png" />
        </Right>
      </Container>
    </Section>
  );
};
export default Hero;
