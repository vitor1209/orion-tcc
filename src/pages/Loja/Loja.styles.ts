import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { keyframes } from "@emotion/react";

import estrelas from "../../assets/images/estrelass.png";

const moverEstrelas = keyframes`
  from {
    background-position: left -80px top -120px;
  }

  to {
    background-position: left 120px top 120px;
  }
`;

const deslizarCamadaEstrelas = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-90px, 70px, 0);
  }
`;

const pulsarEstrelas = keyframes`
  0%, 100% {
    opacity: 0.16;
  }

  50% {
    opacity: 0.3;
  }
`;

export const Page = styled(Box)({
  minHeight: "100vh",
  backgroundColor: "#0C1528",
  color: "#ffffff",
  overflowX: "hidden",
});

export const HeroLoja = styled(Box)({
  position: "relative",
  minHeight: "100vh",
  boxSizing: "border-box",
  padding: "clamp(86px, 11vh, 116px) clamp(20px, 7vw, 96px) 72px",
  backgroundColor: "#0C1528",
  backgroundImage: `url(${estrelas})`,
  backgroundRepeat: "repeat",
  backgroundSize: "560px auto",
  backgroundPosition: "left -80px top -120px",
  overflow: "hidden",
  animation: `${moverEstrelas} 95s linear infinite`,

  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-20%",
    backgroundImage: `
      radial-gradient(circle, rgba(255, 255, 255, 0.9) 0 1px, transparent 1.8px),
      radial-gradient(circle, rgba(190, 207, 255, 0.78) 0 1px, transparent 1.6px)
    `,
    backgroundSize: "320px 320px, 480px 480px",
    backgroundPosition: "20px 40px, 150px 180px",
    opacity: 0.2,
    pointerEvents: "none",
    animation: `${deslizarCamadaEstrelas} 70s linear infinite, ${pulsarEstrelas} 7s ease-in-out infinite`,
  },

  "@media (max-width: 520px)": {
    backgroundSize: "940px auto",
    backgroundPosition: "left -240px top -120px",
  },

  "@media (prefers-reduced-motion: reduce)": {
    animation: "none",

    "&::before": {
      animation: "none",
    },
  },
});

export const Content = styled(Box)({
  position: "relative",
  zIndex: 1,
  width: "100%",
  maxWidth: 1240,
  minHeight: "calc(100vh - 188px)",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "minmax(320px, 1fr) minmax(320px, 520px)",
  alignItems: "center",
  gap: "clamp(44px, 8vw, 100px)",

  "@media (max-width: 900px)": {
    gridTemplateColumns: "1fr",
    textAlign: "center",
  },
});

export const ProductGallery = styled(Box)({
  position: "relative",
  display: "flex",
  minHeight: 640,
  alignItems: "center",
  justifyContent: "center",
  paddingBottom: 96,

  "@media (max-width: 900px)": {
    minHeight: 520,
    paddingBottom: 86,
  },

  "@media (max-width: 520px)": {
    minHeight: 430,
    paddingBottom: 74,
  },
});

export const ImageOrbit = styled(Box)({
  position: "absolute",
  width: "min(560px, 80vw)",
  height: "min(360px, 52vw)",
  border: "2px solid rgba(49, 197, 255, 0.72)",
  borderRadius: "50%",
  transform: "rotate(-15deg)",
  boxShadow:
    "0 0 26px rgba(49, 197, 255, 0.45), inset 0 0 26px rgba(170, 76, 255, 0.2)",
  animation: "orionOrbitFloat 8s ease-in-out infinite",

  "&::before": {
    content: '""',
    position: "absolute",
    inset: "18%",
    border: "2px solid rgba(170, 76, 255, 0.64)",
    borderRadius: "50%",
    transform: "rotate(24deg)",
    boxShadow: "0 0 24px rgba(170, 76, 255, 0.42)",
  },

  "@keyframes orionOrbitFloat": {
    "0%, 100%": {
      transform: "rotate(-15deg) translateY(0)",
    },
    "50%": {
      transform: "rotate(-12deg) translateY(-10px)",
    },
  },
});

export const MainProductImage = styled("img")({
  position: "relative",
  zIndex: 1,
  width: "min(520px, 82vw)",
  maxHeight: 520,
  objectFit: "contain",
  filter: "drop-shadow(0 24px 42px rgba(0, 0, 0, 0.52))",
  animation: "orionProductIn 0.42s ease both",

  "@keyframes orionProductIn": {
    from: {
      opacity: 0,
      transform: "translateY(16px) scale(0.97)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0) scale(1)",
    },
  },
});

export const ThumbCarousel = styled(Box)({
  position: "absolute",
  left: "50%",
  bottom: 8,
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  gap: 12,
  padding: "14px 18px",
  border: "1px solid rgba(255, 255, 255, 0.22)",
  borderRadius: 22,
  backgroundColor: "rgba(255, 255, 255, 0.18)",
  backdropFilter: "blur(14px)",
  boxShadow: "0 18px 34px rgba(0, 0, 0, 0.24)",
  transform: "translateX(-50%)",

  "@media (max-width: 520px)": {
    gap: 8,
    padding: "10px 12px",
  },
});

export const CarouselButton = styled("button")({
  width: 30,
  height: 30,
  border: 0,
  display: "grid",
  placeItems: "center",
  backgroundColor: "transparent",
  color: "#ffffff",
  cursor: "pointer",
  transition: "transform 0.2s ease, color 0.2s ease",

  "&:hover": {
    color: "#c989ff",
    transform: "scale(1.12)",
  },
});

export const ThumbButton = styled("button", {
  shouldForwardProp: (prop) => prop !== "$active",
})<{ $active: boolean }>(({ $active }) => ({
  width: 54,
  height: 54,
  border: $active ? "2px solid #b95cff" : "2px solid transparent",
  borderRadius: 12,
  backgroundColor: "#ffffff",
  overflow: "hidden",
  cursor: "pointer",
  boxShadow: $active ? "0 0 18px rgba(185, 92, 255, 0.48)" : "none",
  transform: $active ? "translateY(-2px)" : "none",
  transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  "&:hover": {
    transform: "translateY(-2px)",
  },

  "@media (max-width: 520px)": {
    width: 46,
    height: 46,
  },
}));

export const ProductInfo = styled(Box)({
  maxWidth: 520,

  "@media (max-width: 900px)": {
    maxWidth: 680,
    margin: "0 auto",
  },
});

export const Title = styled(Typography)({
  marginBottom: 26,
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "clamp(2.45rem, 5vw, 3.35rem)",
  fontWeight: 800,
  color: "#ffffff",
});

export const Description = styled(Typography)({
  marginBottom: 28,
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "clamp(0.98rem, 1.7vw, 1.05rem)",
  lineHeight: 1.48,
  color: "#ffffff",
});

export const MaterialsLabel = styled(Typography)({
  marginBottom: 18,
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "1rem",
  fontWeight: 800,
});

export const MaterialsList = styled(Box)({
  display: "flex",
  gap: "clamp(42px, 7vw, 96px)",
  marginBottom: 50,

  "@media (max-width: 900px)": {
    justifyContent: "center",
  },
});

export const MaterialCircle = styled(Box)({
  width: 48,
  height: 48,
  borderRadius: "50%",
  backgroundColor: "#dedede",
});

export const Price = styled(Box)({
  display: "flex",
  alignItems: "baseline",
  gap: 16,
  marginBottom: 34,
  fontFamily: '"Ubuntu", "Inter", sans-serif',

  "& strong": {
    fontSize: "clamp(2rem, 4vw, 2.8rem)",
    fontWeight: 800,
  },

  "& span": {
    fontSize: "clamp(1.55rem, 3vw, 2.1rem)",
    fontWeight: 500,
  },

  "@media (max-width: 900px)": {
    justifyContent: "center",
  },
});

export const Actions = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 28,
  flexWrap: "wrap",

  "@media (max-width: 900px)": {
    justifyContent: "center",
  },

  "@media (max-width: 520px)": {
    alignItems: "stretch",
    flexDirection: "column",
  },
});

export const QuantityControl = styled(Box)({
  minWidth: 96,
  height: 38,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  border: "2px solid #ffffff",
  borderRadius: 999,
  color: "#ffffff",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontWeight: 800,

  "& button": {
    width: 26,
    height: 26,
    border: 0,
    display: "grid",
    placeItems: "center",
    backgroundColor: "transparent",
    color: "#ffffff",
    cursor: "pointer",
    transition: "transform 0.18s ease",
  },

  "& button:hover": {
    transform: "scale(1.16)",
  },
});

export const BuyButton = styled(Link)({
  minWidth: 220,
  height: 44,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  borderRadius: 999,
  background: "linear-gradient(90deg, #ba4cff, #9e4dff)",
  color: "#ffffff",
  textDecoration: "none",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "1.05rem",
  fontWeight: 800,
  boxShadow: "0 12px 26px rgba(170, 76, 255, 0.34)",
  transition: "transform 0.2s ease, filter 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",

  "&:hover": {
    transform: "translateY(-3px)",
    filter: "brightness(1.06)",
    boxShadow: "0 16px 34px rgba(170, 76, 255, 0.46)",
  },

  "&:active": {
    transform: "translateY(1px)",
    boxShadow: "0 8px 18px rgba(170, 76, 255, 0.28)",
  },

  "@media (max-width: 520px)": {
    width: "100%",
  },
});

export const TrustText = styled(Typography)({
  marginTop: 22,
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.92rem",
  color: "rgba(255, 255, 255, 0.78)",
});

export const BenefitsSection = styled(Box)({
  padding: "80px clamp(20px, 7vw, 96px)",
  backgroundColor: "#ffffff",
  color: "#080a14",
});

export const BenefitsHeader = styled(Box)({
  maxWidth: 820,
  margin: "0 auto 38px",
  textAlign: "center",
});

export const BenefitsEyebrow = styled(Typography)({
  marginBottom: 10,
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.92rem",
  fontWeight: 800,
  letterSpacing: 2,
  textTransform: "uppercase",
  color: "#8b4cff",
});

export const BenefitsTitle = styled(Typography)({
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "clamp(2rem, 4vw, 3rem)",
  fontWeight: 800,
});

export const BenefitsGrid = styled(Box)({
  width: "100%",
  maxWidth: 1120,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: 24,

  "@media (max-width: 860px)": {
    gridTemplateColumns: "1fr",
  },
});

export const BenefitCard = styled(Box)({
  minHeight: 190,
  padding: 28,
  border: "1px solid rgba(142, 170, 255, 0.72)",
  borderRadius: 24,
  background: "linear-gradient(145deg, #ffffff, #f4f6ff)",
  boxShadow: "0 18px 34px rgba(33, 48, 84, 0.1)",
  transition: "transform 0.22s ease, box-shadow 0.22s ease",

  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 24px 44px rgba(33, 48, 84, 0.16)",
  },
});

export const BenefitIcon = styled(Box)({
  width: 54,
  height: 54,
  display: "grid",
  placeItems: "center",
  marginBottom: 22,
  borderRadius: 18,
  backgroundColor: "#efe7ff",
  color: "#9f4cff",
});

export const BenefitTitle = styled(Typography)({
  marginBottom: 12,
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "1.25rem",
  fontWeight: 800,
});

export const BenefitDescription = styled(Typography)({
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.98rem",
  lineHeight: 1.5,
  color: "#4b5568",
});
