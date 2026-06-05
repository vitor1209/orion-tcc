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
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 2.1rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 16px;
`;

export const Subtitle = styled.p`
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 1rem;
  color: #444;
  line-height: 1.7;

`;

export const Logo = styled.img`
  height: 75px;
  object-fit: contain;
`;

export const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  width: 100%;
  max-width: 1080px;
`;

export const FeatureItem = styled.div<{ $reverse: boolean }>`
  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
  align-items: center;
  gap: 64px;
  padding: 10px 0;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const TextBlock = styled.div`
  flex: 1.15;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FeatureTitle = styled.h3`
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: #111;
`;

export const FeatureDescription = styled.p`
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 1rem;
  color: #555;
  line-height: 1.75;
`;

export const LearnMoreButton = styled.button`
  align-self: flex-start;
  background-color: #111;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 0.95rem;
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
  max-width: 320px;
  object-fit: contain;
`;
