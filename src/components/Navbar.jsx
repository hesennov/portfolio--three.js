import styled from "styled-components";
import Logo from "./Three-Gplb/Logo";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import ModelDraco from "./Three-Gplb/ModelDraco";

const Section = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  width: 1400px;
  justify-content: space-between;
  align-items: center;
  /* padding: 10px 0; */
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;

  /* gap: 50px;  */
`;
// const Logo = styled.img`
//   height: 150px;
//   background-size: cover;
// `;
const List = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  list-style: none;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const ListItem = styled.li`
  cursor: pointer;
`;
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #000099;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  /* &:hover {
    background-color: 0000b3;
  } */
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  gap: 20px;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          {/* <Logo src="./img/logo2.png" /> */}
          <Canvas camera={{ fov: 60, position: [2, 2, -5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Logo />
            {/* <ModelDraco/> */}
          </Canvas>
        </Links>
        <Icons>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
          <Icon src="./img/search.png" />
          <Button>Hire now</Button>
        </Icons>
      </Container>
    </Section>
  );
};
export default Navbar;
