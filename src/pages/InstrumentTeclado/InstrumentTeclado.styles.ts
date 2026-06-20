import styled from "styled-components";
import { motion } from "framer-motion";


export const PageWrapper = styled.div`
  min-height: 100vh;
  background: radial-gradient(circle at top, rgba(124, 92, 255, 0.14), transparent 22%),
    linear-gradient(180deg, #fbfbff 0%, #f4f6ff 100%);
  color: #0f1320;
`;

export const PageInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 32px 24px 24px;
`;

export const Topbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 16px 0 24px;

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const BrandBlock = styled.div`
  display: block;
  align-items: center;
  gap: 20px;
`;

export const LogoImage = styled.img`
  height: 52px;
  object-fit: contain;
`;

export const Tagline = styled.p`
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-weight: 700;
  color: #5f4af8;
  margin: 0;
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: 1px solid rgba(95, 74, 248, 0.18);
  background: #ffffff;
  color: #2d214f;
  border-radius: 999px;
  padding: 12px 20px;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
`;

export const AccentLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 36px;

  div {
    flex: 1;
    height: 6px;
    border-radius: 999px;
    background: linear-gradient(90deg, #a46fff 0%, #7c5cff 100%);
    box-shadow: 0 0 18px rgba(124, 92, 255, 0.2);
  }

  svg {
    color: #7c5cff;
    min-width: 28px;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 40px;
`;

export const WelcomeTitle = styled.h1`
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: clamp(2.8rem, 4vw, 4.5rem);
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -0.03em;
  color: #191d2b;
  margin: 0;
`;

export const WelcomeSubtitle = styled.p`
  max-width: 720px;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 1.12rem;
  line-height: 1.9;
  color: #515d7d;
  margin: 0;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 320px));
  justify-content: center;
  gap: 14px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 12px;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const InstrumentCard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 3px;
  min-height: 220px;
  padding: 30px 24px 14px 24px;
  border-radius: 24px;
  background: #ffffff;
  border: 1px solid rgba(124, 92, 255, 0.14);
  box-shadow: 0 12px 24px rgba(77, 44, 176, 0.08);
  overflow: visible;
`;

export const CardImageWrapper = styled.div`
  margin-top: auto;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  min-height: 90px;
  overflow: visible;
`;

export const CardImage = styled.img`
  width: 100%;
  max-width: 160px;
  object-fit: contain;
  transform: translateY(12px);
`;

export const CardTitle = styled.h2`
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 1.15rem;
  color: #141625;
  margin: 0;
`;

export const CardDescription = styled.p`
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 0.98rem;
  line-height: 1.65;
  color: #5b6782;
  margin: 0;
`;

export const LevelSelectorWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 820px;
  margin: 40px auto 0;
`;

export const LevelLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 5px;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    #b06cff 0%,
    #9d75ff 40%,
    #8ea2ff 100%
  );
  transform: translateY(-50%);
`;

export const LevelEndDot = styled.div`
  position: absolute;
  right: -4px;
  top: 50%;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #8ea2ff;
  transform: translateY(-50%);
`;

export const LevelsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 24px;
  z-index: 2;

  @media (max-width: 768px) {
    gap: 12px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const LevelOption = styled.div`
  position: relative;
  background: #E7E9ED;
  border-radius: 999px;
`;

export const ActivePill = styled(motion.div)`
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background: linear-gradient(
    135deg,
    #b56eff 0%,
    #9747ff 100%
  );

  box-shadow: 0 10px 24px rgba(151, 71, 255, 0.3);
`;

interface LevelButtonProps {
  $active: boolean;
}

export const LevelButton = styled.button<LevelButtonProps>`
  position: relative;
  z-index: 2;

  min-width: 170px;
  height: 52px;

  border-radius: 999px;
  border: none;

  background: transparent;

  color: ${({ $active }) =>
    $active ? "#fff" : "#000"};

  font-family: "Inter";
  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;

  transition: color 0.2s ease,
              transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const ContinueButton = styled.button`
  align-self: center;

  min-width: 200px;
  height: 58px;

  border: none;
  border-radius: 999px;

  background: linear-gradient(
    135deg,
    #b56eff 0%,
    #9747ff 100%
  );

  color: white;

  font-family: "Inter";
  font-size: 1rem;
  font-weight: 700;

  cursor: pointer;

  box-shadow: 0 12px 24px rgba(151, 71, 255, 0.25);

  transition: all 0.25s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 16px 30px rgba(151, 71, 255, 0.35);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }
`;