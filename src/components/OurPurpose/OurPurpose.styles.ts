import styled from "styled-components";

export const Section = styled.section`
  background-color: #f0f0f0;
  padding: 64px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  text-align: center;
  max-width: 560px;
  margin-bottom: 64px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 16px;
`;

export const Subtitle = styled.p`
  font-size: 0.95rem;
  color: #444;
  line-height: 1.6;

`;

export const Logo = styled.img`
  height: 200px;
  object-fit: contain;
`;

export const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;
  max-width: 760px;
`;

export const FeatureItem = styled.div<{ $reverse: boolean }>`
  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
  align-items: center;
  gap: 40px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const TextBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #111;
`;

export const FeatureDescription = styled.p`
  font-size: 0.875rem;
  color: #555;
  line-height: 1.6;
`;

export const LearnMoreButton = styled.button`
  align-self: flex-start;
  background-color: #111;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #333;
  }
`;

export const ImageBlock = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FeatureImage = styled.img`
  width: 100%;
  max-width: 220px;
  object-fit: contain;
`;
