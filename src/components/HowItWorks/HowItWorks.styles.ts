import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(246, 247, 251, 0.92) 0%, rgba(237, 240, 247, 0.96) 100%),
    linear-gradient(180deg, rgba(124, 92, 255, 0.10) 0%, rgba(124, 92, 255, 0.00) 45%);
  color: #172033;
  padding: 300px 20px 0px;
  height: 140vh;
`;

export const BackgroundLayer = styled.div`
  position: absolute;
  inset: 0;
  background-image: url("../../assets/fundo_partitura.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.10;
  pointer-events: none;
`;

export const WaveLayer = styled.svg`
  position: absolute;
  left: 0;
  right: 0;
  top: -10px;
  width: 100%;
  height: auto;
  opacity: 1;
  pointer-events: none;
  z-index: 0;
`;

export const Container = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1240px;
  margin: 0 auto;

`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 48px;
  position: relative;
  z-index: 1;
`;

export const Eyebrow = styled.p`
  text-transform: uppercase;
  font-family: "Ubuntu", Arial, Helvetica, sans-serif;
  letter-spacing: 0.25em;
  font-weight: 600;
  font-size: 0.85rem;
  color: #7c5cff;
  margin-bottom: 12px;
`;

export const Title = styled.h2`
  font-family: "Ubuntu", Arial, Helvetica, sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.05;
  font-weight: 700;
  margin: 0 0 12px;
  letter-spacing: -0.04em;
`;

export const Subtitle = styled.p`
  font-family: "Ubuntu", Arial, Helvetica, sans-serif;
  font-weight: 400;
  max-width: 720px;
  margin: 0 auto;
  color: #5b6782;
  font-size: 1.02rem;
  line-height: 1.65;
`;

export const StepsGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
  // flex-wrap: wrap;
  position: relative;
  z-index: 1;
  
`;

export const StepCard = styled.article`
  position: relative;
  flex: 1 1 210px;
  max-width: 290px;
  min-height: 190px;
  background: linear-gradient(180deg, #ffffff 0%, #f5f7ff 100%);
  border: 1px solid #e5e9f5;
  border-radius: 24px;
  padding: 20px;
  padding-top: 60px;
  // margin-left: 12px;
  // margin-right: 50px;
  box-shadow:
    0 14px 28px rgba(15, 23, 42, 0.08),
    0 2px 6px rgba(124, 92, 255, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:nth-child(1) {
    transform: scale(1.20);
    min-height: 240px;
  }

  &:nth-child(2) {
    // transform: scale(1.10);
    min-height: 220px;
  }

  &:nth-child(3) {
    transform: scale(1.00);
    min-height: 200px;
  }

  &:nth-child(4) {
    transform: scale(0.91);
    min-height: 190px;
  }

  &:hover {
    transform: translateY(-4px) scale(1.25);
    box-shadow:
      0 18px 32px rgba(15, 23, 42, 0.12),
      0 0 0 1px rgba(124, 92, 255, 0.12);
  }
`;

export const StepNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  // coloca a div no meio em cima
  position: absolute;
  top: -24px; 
  left: 50%;
  transform: translateX(-50%);

  width: 48px;
  height: 48px;
  margin: 0 auto 18px;
  border-radius: 14px;
  background: linear-gradient(135deg, #c48cff, #7c5cff);
  color: #fff;
  font-weight: 300;
  font-size: 1.25rem;
  margin-bottom: 18px;
  box-shadow: 0 10px 20px rgba(124, 92, 255, 0.35);
  padding: 0 40px 0 40px;
`;

export const StepTitle = styled.h3`
  font-family: "Ubuntu", Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0 10px;
  color: #172033;
`;

export const StepDescription = styled.p`
  font-family: "Ubuntu", Arial, Helvetica, sans-serif;
  font-weight: 400;
  margin: 0;
  color: #5b6782;
  line-height: 1.6;
  font-size: 0.95rem;
`;
