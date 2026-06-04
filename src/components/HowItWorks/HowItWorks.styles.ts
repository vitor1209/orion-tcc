import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(180deg, #f6f7fb 0%, #edf0f7 100%);
  color: #172033;
  padding: 96px 24px 120px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(20, 28, 52, 0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(20, 28, 52, 0.06) 1px, transparent 1px);
    background-size: 42px 42px;
    opacity: 0.35;
    pointer-events: none;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1240px;
  margin: 0 auto;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 56px;
`;

export const Eyebrow = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-size: 0.85rem;
  color: #7c5cff;
  margin-bottom: 12px;
`;

export const Title = styled.h2`
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.05;
  font-weight: 700;
  margin: 0 0 12px;
  letter-spacing: -0.04em;
`;

export const Subtitle = styled.p`
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-weight: 400;
  max-width: 720px;
  margin: 0 auto;
  color: #5b6782;
  font-size: 1.02rem;
  line-height: 1.65;
`;

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: stretch;
  gap: 22px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const StepCard = styled.article`
  position: relative;
  background: linear-gradient(180deg, #ffffff 0%, #f5f7ff 100%);
  border: 1px solid #e5e9f5;
  border-radius: 24px;
  padding: 24px;
  min-height: 220px;
  box-shadow:
    0 14px 28px rgba(15, 23, 42, 0.08),
    0 2px 6px rgba(124, 92, 255, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:nth-child(odd) {
    transform: translateY(12px);
  }

  &:nth-child(even) {
    transform: translateY(-12px);
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 18px 32px rgba(15, 23, 42, 0.12),
      0 0 0 1px rgba(124, 92, 255, 0.12);
  }
`;

export const StepNumber = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: linear-gradient(135deg, #c48cff, #7c5cff);
  color: #fff;
  font-weight: 800;
  font-size: 1rem;
  margin-bottom: 18px;
  box-shadow: 0 10px 20px rgba(124, 92, 255, 0.35);
`;

export const StepTitle = styled.h3`
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 1.08rem;
  font-weight: 700;
  margin: 0 0 10px;
  color: #172033;
`;

export const StepDescription = styled.p`
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-weight: 400;
  margin: 0;
  color: #5b6782;
  line-height: 1.6;
  font-size: 0.95rem;
`;
