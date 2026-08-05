import styled from "styled-components";
import { CardMedia, Stack, Typography } from "@mui/material";

export const PageWrapper = styled(Stack)`
  && {
    display: block;
  }
  min-height: 100vh;
  background: radial-gradient(circle at top, rgba(124, 92, 255, 0.14), transparent 22%),
    linear-gradient(180deg, #fbfbff 0%, #f4f6ff 100%);
  color: #0f1320;
`;

export const PageInner = styled(Stack)`
  && {
    display: flex;
    flex-direction: column;
  }
  max-width: 960px;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 32px 24px 24px;

  @media (max-width: 520px) {
    padding: 22px 16px 24px;
  }
`;

export const Topbar = styled(Stack)`
  display: flex;
  && {
    flex-direction: row;
  }
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 16px 0 24px;

  @media (max-width: 760px) {
    && {
      flex-direction: column;
    }
    align-items: flex-start;
  }

  @media (max-width: 520px) {
    padding-bottom: 18px;
  }
`;

export const BrandBlock = styled(Stack)`
  && {
    display: block;
  }
  align-items: center;
  gap: 20px;
`;

export const LogoImage = styled(CardMedia)`
  height: 52px;
  object-fit: contain;

  @media (max-width: 520px) {
    height: 44px;
  }
`;

export const Tagline = styled(Typography)`
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 0.85rem;
  line-height: normal;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-weight: 700;
  color: #5f4af8;
  margin: 0;

  @media (max-width: 520px) {
    font-size: 0.68rem;
    letter-spacing: 0.16em;
  }
`;

export const AccentLine = styled(Stack)`
  display: flex;
  && {
    flex-direction: row;
  }
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 36px;

  @media (max-width: 520px) {
    margin-bottom: 22px;
  }

  svg {
    color: #7c5cff;
    min-width: 28px;
  }
`;

export const Content = styled(Stack)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  flex: 1;
  padding-bottom: 40px;

  @media (max-width: 520px) {
    gap: 22px;
    padding-bottom: 28px;
  }
`;

export const WelcomeTitle = styled(Typography)`
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: clamp(2.25rem, 9vw, 4.5rem);
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -0.03em;
  color: #191d2b;
  margin: 0;
`;

export const WelcomeSubtitle = styled(Typography)`
  max-width: 720px;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 1.12rem;
  line-height: 1.9;
  color: #515d7d;
  margin: 0;

  @media (max-width: 520px) {
    font-size: 1rem;
    line-height: 1.65;
  }
`;

export const CardsGrid = styled(Stack)`
  display: flex;
  && {
    flex-direction: row;
  }
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;

  @media (max-width: 520px) {
    gap: 22px;
  }
`;

export const CardImageWrapper = styled(Stack)`
  margin-top: auto;
  display: flex;
  && {
    flex-direction: row;
  }
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  min-height: 90px;
  overflow: visible;
`;

export const CardImage = styled(CardMedia)`
  width: 100%;
  max-width: 160px;
  object-fit: contain;
  transform: translateY(12px);
`;

export const CardTitle = styled(Typography)`
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 1.15rem;
  line-height: normal;
  color: #141625;
  margin: 0;
`;

export const CardDescription = styled(Typography)`
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 0.98rem;
  line-height: 1.65;
  color: #5b6782;
  margin: 0;
`;

export const ModeCard = styled(Stack)`
  width: min(400px, calc(100vw - 32px));
  min-height: 160px;
  height: auto;
  background: white;
  border-radius: 12px;

  position: relative; 
  overflow: hidden;

  display: flex;
  && {
    flex-direction: row;
  }
  justify-content: space-between;
  align-items: flex-start; 

  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: 0.2s;

  @media (max-width: 520px) {
    width: 100%;
    min-height: 170px;
    padding: 20px;
  }
`;

export const SectionTitle = styled(Typography)`
  text-align: center;
  font-size: 3rem;
  line-height: normal;
  font-weight: 700;
  margin-bottom: 60px;
`;

export const CardContent = styled(Stack)`
  max-width: min(245px, calc(100% - 104px)); 
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  z-index: 2;
`;

export const CardIcon = styled(CardMedia)`
  width: 138px;
  height: 138px;
  object-fit: contain;
  flex-shrink: 0;
  pointer-events: none;
  filter: drop-shadow(0 12px 12px rgba(45, 33, 79, 0.18));
  position: absolute;
  right: -6px;
  bottom: -30px;
  z-index: 1;

  @media (max-width: 520px) {
    width: 118px;
    height: 118px;
    right: -8px;
    bottom: -24px;
  }
`;

export const AccentLineFill = styled(Stack)`
  && {
    display: block;
    flex: 1 1 auto;
    min-width: 0;
    height: 6px;
  }
  border-radius: 999px;
  background: linear-gradient(90deg, #a46fff 0%, #7c5cff 100%);
  box-shadow: 0 0 18px rgba(124, 92, 255, 0.2);
`;
