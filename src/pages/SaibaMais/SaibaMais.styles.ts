import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
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
    opacity: 0.18;
  }

  50% {
    opacity: 0.34;
  }
`;

export const Page = styled(Box)({
  minHeight: "100vh",
  backgroundColor: "#ffffff",
  color: "#080a14",
  overflowX: "hidden",
});

export const Hero = styled(Box)({
  position: "relative",
  minHeight: "100vh",
  boxSizing: "border-box",
  padding: "clamp(96px, 12vh, 124px) clamp(20px, 7vw, 96px) 96px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#0d1428",
  backgroundImage: `url(${estrelas})`,
  backgroundRepeat: "repeat",
  backgroundSize: "560px auto",
  backgroundPosition: "left -80px top -120px",
  color: "#ffffff",
  textAlign: "center",
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

  "@media (prefers-reduced-motion: reduce)": {
    animation: "none",

    "&::before": {
      animation: "none",
    },
  },
});

export const HeroCopy = styled(Box)({
  position: "relative",
  zIndex: 1,
  maxWidth: 760,
  margin: "0 auto",
});

export const HeroTitle = styled(Typography)({
  marginBottom: 22,
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "clamp(2.25rem, 4.6vw, 4rem)",
  lineHeight: 1.04,
  fontWeight: 800,
  letterSpacing: "-0.04em",
});

export const HeroDescription = styled(Typography)({
  maxWidth: 620,
  marginBottom: 30,
  marginLeft: "auto",
  marginRight: "auto",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "clamp(0.98rem, 1.42vw, 1.08rem)",
  lineHeight: 1.58,
  color: "rgba(255, 255, 255, 0.78)",
});

export const HeroDivider = styled(Box)({
  position: "absolute",
  zIndex: 1,
  left: "50%",
  bottom: 42,
  width: "min(420px, 54vw)",
  height: 2,
  borderRadius: 999,
  backgroundColor: "rgba(168, 116, 255, 0.78)",
  boxShadow: "0 0 26px rgba(168, 116, 255, 0.35)",
  transform: "translateX(-50%)",
  transformOrigin: "center",
});

export const Actions = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 16,
  flexWrap: "wrap",

  "@media (max-width: 520px)": {
    flexDirection: "column",
    alignItems: "stretch",
  },
});

export const CtaActions = styled(Actions)({
  justifyContent: "center",
});

export const PillarsSection = styled(Box)({
  padding: "96px clamp(20px, 7vw, 96px)",
  backgroundColor: "#f6f7fb",
});

export const SectionHeader = styled(Box)({
  maxWidth: 780,
  margin: "0 auto 46px",
  textAlign: "center",
});

export const SectionEyebrow = styled(Typography)({
  marginBottom: 10,
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.84rem",
  fontWeight: 800,
  letterSpacing: 2,
  textTransform: "uppercase",
  color: "#8b4cff",
});

export const SectionTitle = styled(Typography)({
  marginBottom: 16,
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "clamp(1.85rem, 3.8vw, 3rem)",
  lineHeight: 1.08,
  fontWeight: 800,
  letterSpacing: "-0.032em",
});

export const SectionDescription = styled(Typography)({
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "clamp(0.96rem, 1.45vw, 1.05rem)",
  lineHeight: 1.62,
  color: "#4f5870",
});

export const PillarsGrid = styled(Box)({
  maxWidth: 1160,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: 24,

  "@media (max-width: 920px)": {
    gridTemplateColumns: "1fr",
  },
});

export const PillarCard = styled(Box)({
  minHeight: 390,
  padding: 26,
  border: "1px solid rgba(142, 170, 255, 0.62)",
  borderRadius: 30,
  backgroundColor: "#ffffff",
  boxShadow: "0 16px 34px rgba(33, 48, 84, 0.08)",
  transition:
    "transform 0.24s ease, box-shadow 0.24s ease, border-color 0.24s ease",

  "&:hover": {
    transform: "translateY(-7px)",
    borderColor: "#a874ff",
    boxShadow: "0 22px 42px rgba(33, 48, 84, 0.13)",
  },

  "&:hover img": {
    transform: "scale(1.05)",
  },
});

export const PillarImageFrame = styled(Box)({
  height: 176,
  display: "grid",
  placeItems: "center",
  marginBottom: 24,
  borderRadius: 24,
  backgroundColor: "#f3f5ff",
  overflow: "hidden",
});

export const PillarImage = styled("img")({
  width: "82%",
  height: 142,
  objectFit: "contain",
  transition: "transform 0.24s ease",
});

export const PillarTitle = styled(Typography)({
  marginBottom: 10,
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "1.32rem",
  fontWeight: 800,
});

export const PillarDescription = styled(Typography)({
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.96rem",
  lineHeight: 1.55,
  color: "#4f5870",
});

export const JourneySection = styled(Box)({
  padding: "96px clamp(20px, 7vw, 96px)",
  display: "grid",
  gridTemplateColumns: "minmax(0, 0.9fr) minmax(320px, 1fr)",
  gap: "clamp(36px, 7vw, 86px)",
  alignItems: "center",
  backgroundColor: "#ffffff",

  "@media (max-width: 860px)": {
    gridTemplateColumns: "1fr",
  },
});

export const JourneyContent = styled(Box)({
  maxWidth: 540,
});

export const StepList = styled(Box)({
  position: "relative",
  display: "grid",
  gap: 18,
  paddingLeft: 18,

  "&::before": {
    content: '""',
    position: "absolute",
    left: 45,
    top: 28,
    bottom: 28,
    width: 2,
    borderRadius: 999,
    backgroundColor: "#dfe5ff",
  },

  "@media (max-width: 520px)": {
    paddingLeft: 0,

    "&::before": {
      display: "none",
    },
  },
});

export const StepItem = styled(Box)({
  position: "relative",
  display: "grid",
  gridTemplateColumns: "54px 1fr",
  alignItems: "center",
  gap: 22,
  padding: "22px 24px",
  border: "1px solid #dfe5ff",
  borderRadius: 24,
  backgroundColor: "#f6f8ff",
  boxShadow: "0 14px 26px rgba(33, 48, 84, 0.07)",

  "@media (max-width: 520px)": {
    gridTemplateColumns: "1fr",
  },
});

export const StepNumber = styled("span")({
  position: "relative",
  zIndex: 1,
  width: 54,
  height: 54,
  display: "grid",
  placeItems: "center",
  borderRadius: "50%",
  backgroundColor: "#a874ff",
  color: "#ffffff",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontWeight: 800,
  boxShadow: "0 0 0 8px #f6f8ff",
});

export const StepText = styled(Typography)({
  margin: 0,
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "1.02rem",
  color: "#273044",
});

export const FinalCta = styled(Box)({
  position: "relative",
  margin: "0 clamp(20px, 7vw, 96px) 92px",
  padding: "48px clamp(24px, 6vw, 64px)",
  border: "1px solid rgba(168, 116, 255, 0.26)",
  borderRadius: 34,
  backgroundColor: "#0d1428",
  color: "#ffffff",
  textAlign: "center",
  boxShadow: "0 22px 48px rgba(13, 20, 40, 0.18)",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 50% 0%, rgba(168, 116, 255, 0.18), transparent 38%)",
    pointerEvents: "none",
  },

  "& > *": {
    position: "relative",
    zIndex: 1,
  },
});

export const CtaTitle = styled(Typography)({
  maxWidth: 620,
  margin: "0 auto 12px",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "clamp(1.45rem, 2.8vw, 2.2rem)",
  lineHeight: 1.15,
  fontWeight: 800,
});

export const CtaDescription = styled(Typography)({
  maxWidth: 520,
  margin: "0 auto 26px",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.98rem",
  lineHeight: 1.55,
  color: "rgba(255, 255, 255, 0.74)",
});
