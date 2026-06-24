import styled from "styled-components";

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
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 14px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(140px, 1fr));
    gap: 12px;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const InstrumentCard = styled.article`
  position: relative;
  cursor: pointer;
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
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 38px rgba(77, 44, 176, 0.14);
  }
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
