import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  width: 1400px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const Logo = styled.img`
  height: 50px;
  background-size: cover;
`;
const List = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  list-style: none;
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
  gap: 20px;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo2.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button>Hire now</Button>
        </Icons>
      </Container>
    </Section>
  );
};
export default Navbar;
