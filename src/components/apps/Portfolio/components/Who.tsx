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
  gap: 20px;
  @media only screen and (max-width: 768px) {
    text-align: center;
    align-items: center;
    heigh: 100%;
  }
`;
const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    font-size: 60px;
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
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 50;
  width: 120px;
  padding: 10px;
  border-radius: 5px;
`;

const statements = [
  "I am a dreamer, constantly chasing after new adventures and opportunities to expand my horizons.",
  "I am an explorer, always seeking to discover the hidden gems of life and unravel its mysteries.",
  "I am an artist, expressing my emotions and thoughts through colors, shapes, and textures, creating my own unique masterpiece.",
  "I am a storyteller, narrating my experiences and weaving them into a tapestry of memories that define my journey.",
  "I am a warrior, facing challenges head-on with courage and resilience, never backing down from a battle worth fighting.",
  "I am a teacher, sharing my knowledge and wisdom with others, inspiring and guiding them towards their own paths of growth.",
  "I am a healer, offering comfort and solace to those in need, spreading love and compassion wherever I go.",
  "I am a visionary, envisioning a brighter future and taking bold steps towards turning my dreams into reality.",
  "I am a catalyst for change, challenging the status quo and striving to make a positive impact in the world.",
  "I am a seeker of truth, constantly questioning and exploring the depths of knowledge and wisdom.",
];

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
          <Desc Texts={statements} />
          <Button>See my works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
