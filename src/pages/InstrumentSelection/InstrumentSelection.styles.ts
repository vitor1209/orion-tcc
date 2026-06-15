import styled from "styled-components";

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: radial-gradient(circle at top, rgba(124, 92, 255, 0.14), transparent 22%),
    linear-gradient(180deg, #fbfbff 0%, #f4f6ff 100%);
  color: #0f1320;
`;

export const PageInner = styled.div`
  max-width: 1180px;
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
  display: flex;
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
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 16px 36px rgba(95, 74, 248, 0.12);
  }
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
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 24px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const InstrumentCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 22px;
  min-height: 260px;
  padding: 30px;
  border-radius: 28px;
  background: #ffffff;
  border: 1px solid rgba(124, 92, 255, 0.12);
  box-shadow: 0 16px 40px rgba(77, 44, 176, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 24px 52px rgba(77, 44, 176, 0.16);
  }
`;

export const CardIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 78px;
  height: 78px;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(124, 92, 255, 0.12), rgba(196, 140, 255, 0.18));
  color: #6e56ff;
`;

export const CardTitle = styled.h2`
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 1.35rem;
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
