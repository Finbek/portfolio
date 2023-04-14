import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import styled from "styled-components";

import { statementsWhatIDo } from "@/data";
import Desc from "./Desc";
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
    scroll-snap-align: unset;
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
    height: 90%;
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
    scroll-snap-align: center;
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
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    scroll-snap-align: center;
  }
`;
const Img = styled.img`
  width: 500px;
  height: 400px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite alternate;
  transition: opacity 0.2s ease-in-out;
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
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % 12);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Section id="home">
      <Navbar />

      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src="portfolioApp/line.png" />
            <Subtitle>What I do</Subtitle>
          </WhatWeDo>
          <Desc Texts={statementsWhatIDo} />
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
          <Img src={`portfolioApp/Me/${currentImage}.webp`} alt="" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
