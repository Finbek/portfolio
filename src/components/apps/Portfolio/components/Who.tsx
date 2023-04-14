import { statementsWhoAmI } from "@/data";
import { scrollToSection } from "@/utils";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import styled from "styled-components";
import Cube from "./Cube";
import Desc from "./Desc";

const Section = styled.div`
  height: 95vh;
  width: 100%;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1200px;
  height: 95vh;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  @media only screen and (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`;
const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.img`
  height: 5px;
`;
const Subtitle = styled.h2`
  color: #da4ea2;
  @media only screen and (max-width: 768px) {
    font-size: 70px;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 50;
  width: 120px;
  padding: 10px;
  border-radius: 5px;
`;

const Who = () => {
  return (
    <Section id="studio">
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src="portfolioApp/line.png" />
            <Subtitle>Who am I? </Subtitle>
          </WhatWeDo>
          <Desc Texts={statementsWhoAmI} />
          <Button
            onClick={() => {
              scrollToSection("works");
            }}
          >
            See my career path
          </Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
