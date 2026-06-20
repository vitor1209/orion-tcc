import { styled } from "@mui/material/styles";

export const CardsGrid = styled("div")`
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

export const InstrumentCard = styled("article")`
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

export const CardImageWrapper = styled("div")`
  margin-top: auto;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  min-height: 90px;
  overflow: visible;
`;

export const CardImage = styled("img")`
  width: 100%;
  max-width: 160px;
  object-fit: contain;
  transform: translateY(12px);
`;

export const CardTitle = styled("h2")`
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 1.15rem;
  color: #141625;
  margin: 0;
`;

export const CardDescription = styled("p")`
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 0.98rem;
  line-height: 1.65;
  color: #5b6782;
  margin: 0;
`;
