import React from "react";
import logo from "../../assets/logo-practice.png";
import ondaSonora from "../../assets/onda-sonora.mp4";
import {
  Section,
  WavesWrapper,
  Content,
  Title,
  Highlight,
  Description,
  LogoImage,
  ButtonsRow,
  PrimaryButton,
  SecondaryButton,
} from "./PracticeNow.styled";

const SoundWaves = () => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: 0.35,
      }}
    >
      <source src={ondaSonora} type="video/mp4" />
    </video>
  );
};

const PracticeNow: React.FC = () => {
  return (
    <Section id="pratique">
      <WavesWrapper>
        <SoundWaves />
      </WavesWrapper>

      <Content>
        <Title variant="h2">
          Pratique <Highlight>agora!</Highlight>
        </Title>

        <Description>
          Escolha seu modo preferido e comece a explorar o
          mundo da música com
        </Description>

        <LogoImage src={logo} alt="Logo Orion" />

        <ButtonsRow>
          <PrimaryButton variant="contained">Modo Guiado</PrimaryButton>
          <SecondaryButton variant="outlined">Modo Livre</SecondaryButton>
        </ButtonsRow>
      </Content>
    </Section>
  );
};

export default PracticeNow;
