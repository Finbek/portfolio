import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import styled from "styled-components";

import Navbar from "./Navbar";

const Section = styled.div`
  height: 95vh;
  width: 100%;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 768px) {
    height: 190vh;
  }
`;

const Container = styled.div`
  width: 1200px;

  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
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
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;
const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    align-items: center;
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
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 50;
  width: 100px;
  padding: 10px;
  border-radius: 5px;
`;

const Right = styled.div`
  position: relative;
  flex: 3;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
    height: 100%;
  }
`;
const Img = styled.img`
  width: 700px;
  height: 500px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite alternate;
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
    <Section id="home">
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src="portfolioApp/line.png" />
            <Subtitle>What we do</Subtitle>
          </WhatWeDo>
          <Desc>We enjoy creating ...da.fdsfa.sf.asf</Desc>
          <Button>Lear more</Button>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              {/* @ts-ignore */}
              <Sphere args={[1, 100, 200]} scale={2.6}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
          <Img src="portfolioApp/moon.png" alt="" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
