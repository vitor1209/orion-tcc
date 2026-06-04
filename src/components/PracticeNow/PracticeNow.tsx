import React from "react";
import logo from "../../assets/logo-practice.png";
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

/* Ondas sonoras SVG animadas */
const SoundWaves = () => {
  const centerY = 300;

  return (
    <svg
      viewBox="0 0 838 600"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <style>{`
          @keyframes wave1 { 0%,100%{transform:scaleY(1)} 50%{transform:scaleY(0.5)} }
          @keyframes wave2 { 0%,100%{transform:scaleY(0.6)} 50%{transform:scaleY(1)} }
          @keyframes wave3 { 0%,100%{transform:scaleY(0.8)} 33%{transform:scaleY(0.4)} 66%{transform:scaleY(1)} }
          .w1{animation:wave1 2.4s ease-in-out infinite;transform-origin:center}
          .w2{animation:wave2 1.8s ease-in-out infinite;transform-origin:center}
          .w3{animation:wave3 2.1s ease-in-out infinite;transform-origin:center}
          .w4{animation:wave1 2.8s ease-in-out infinite 0.4s;transform-origin:center}
          .w5{animation:wave2 2.2s ease-in-out infinite 0.2s;transform-origin:center}
        `}</style>
      </defs>

      {/* Grupo esquerdo de ondas */}
      {[
        { cx: 60,  h: 220, cls: "w1" },
        { cx: 100, h: 300, cls: "w2" },
        { cx: 140, h: 180, cls: "w3" },
        { cx: 180, h: 260, cls: "w4" },
        { cx: 220, h: 140, cls: "w5" },
        { cx: 260, h: 200, cls: "w1" },
        { cx: 300, h: 320, cls: "w2" },
      ].map((b, i) => (
        <rect
          key={`l${i}`}
          className={b.cls}
          x={b.cx - 14}
          y={centerY - b.h / 2}
          width={28}
          height={b.h}
          rx={14}
          fill="none"
          stroke="rgba(160,140,220,0.35)"
          strokeWidth={2}
        />
      ))}

      {/* Grupo direito de ondas */}
      {[
        { cx: 778, h: 220, cls: "w1" },
        { cx: 738, h: 300, cls: "w3" },
        { cx: 698, h: 180, cls: "w2" },
        { cx: 658, h: 260, cls: "w5" },
        { cx: 618, h: 140, cls: "w4" },
        { cx: 578, h: 200, cls: "w1" },
        { cx: 538, h: 320, cls: "w3" },
      ].map((b, i) => (
        <rect
          key={`r${i}`}
          className={b.cls}
          x={b.cx - 14}
          y={centerY - b.h / 2}
          width={28}
          height={b.h}
          rx={14}
          fill="none"
          stroke="rgba(160,140,220,0.35)"
          strokeWidth={2}
        />
      ))}
    </svg>
  );
};

const PracticeNow: React.FC = () => {
  return (
    <Section id="pratique-agora">
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
