import { scrollToSection } from "@/utils";
import styled from "styled-components";

const Section = styled.div`
  justify-content: center;
  display: flex;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  gap: 150px;
  padding: 10px 0;
  @media only screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  cursor: pointer;
  height: 20px;
`;

const List = styled.ul`
  display: flex;
  gap: 50px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const ListItem = styled.li`
  width: 100%;
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const Icon = styled.img`
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="portfolioApp/codecraft.webp" />
          <List>
            <ListItem onClick={() => scrollToSection("home")}>Home</ListItem>
            <ListItem onClick={() => scrollToSection("studio")}>Me</ListItem>
            <ListItem onClick={() => scrollToSection("skills")}>
              Skills
            </ListItem>
            <ListItem onClick={() => scrollToSection("works")}>Career</ListItem>
            <ListItem onClick={() => scrollToSection("contact")}>
              Contact
            </ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="/portfolioApp/search.png"></Icon>
          <Button onClick={() => scrollToSection("contact")}>Hire now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
