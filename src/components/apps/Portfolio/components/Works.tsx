import styled from "styled-components";
import IphoneFrame from "./IphoneFrame";

const Section = styled.div`
  height: 95vh;

  width: 100%;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    height: 190vh;
    scroll-snap-align: unset;
  }
`;

const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    scroll-snap-align: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  width: fit-content;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px white;
  }

  ::after {
    content: "${(props: any) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
  width: fit-content;
  align-items: center;
  justify-content: center;
  display: flex;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    scroll-snap-align: center;
  }
`;

const data = ["Nota AI", "Zala Inc", "Ezar Inc"];
const Works = () => {
  //function to change the iphone frame
  const changeIphone = (item: string) => {
    const iphone = document.getElementById("iphone-frame");
    if (!iphone) {
      return;
    }
    switch (item) {
      case "Nota AI":
        iphone.style.background = "url(/portfolioApp/nota.gif)";
        iphone.style.backgroundRepeat = "no-repeat";
        iphone.style.backgroundSize = "cover";
        break;
      case "Zala Inc":
        iphone.style.backgroundImage = "url(/portfolioApp/zala.gif)";
        iphone.style.backgroundRepeat = "no-repeat";
        iphone.style.backgroundSize = "cover";
        break;
      case "Ezar Inc":
        iphone.style.backgroundImage = "url(/portfolioApp/ezar.gif)";
        iphone.style.backgroundRepeat = "no-repeat";
        iphone.style.backgroundSize = "cover";

        break;
      default:
        iphone.style.background = "black";
    }
  };
  return (
    <Section id="works">
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem
                key={item}
                //@ts-ignore
                text={item}
                onMouseOver={() => changeIphone(item)}
                onMouseLeave={() => changeIphone("")}
              >
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          <IphoneFrame />
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
