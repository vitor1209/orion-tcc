import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";

export const Section = styled(Box)({
  position: "relative",
  background: "#020b2d",
  padding: "120px 32px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "800px",

  /* Curva branca no topo */
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-60px",
    left: "-5%",
    width: "110%",
    height: "120px",
    background: "#f0f2f8",
    borderRadius: "0 0 50% 50%",
    zIndex: 1,
  },

  /* Curva branca no rodapé */
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-60px",
    left: "-5%",
    width: "110%",
    height: "120px",
    background: "#f0f2f8",
    borderRadius: "50% 50% 0 0",
    zIndex: 1,
  },
});

export const WavesWrapper = styled(Box)({
  position: "absolute",
  inset: 0,
  zIndex: 0,
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Content = styled(Box)({
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  maxWidth: "560px",
});

export const Title = styled(Typography)({
  fontFamily: "Inter, Arial, sans-serif",
  fontSize: "clamp(2rem, 5vw, 3rem)",
  fontWeight: 700,
  color: "#ffffff",
  marginBottom: "16px",
  lineHeight: 1.2,
});

export const Highlight = styled("span")({
  color: "#a78bfa",
});

export const Description = styled(Typography)({
  fontFamily: "Inter, Arial, sans-serif",
  fontWeight: 400,
  fontSize: "1rem",
  color: "#c0c8e0",
  lineHeight: 1.65,
});

export const LogoImage = styled("img")({
  width: "225px",
  maxWidth: "100%",
  height: "auto",
  marginBottom: "32px",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  objectFit: "contain",
});

export const ButtonsRow = styled(Box)({
  display: "flex",
  gap: "16px",
  justifyContent: "center",
  flexWrap: "wrap",
});

export const PrimaryButton = styled(Button)({
  borderRadius: "999px",
  padding: "11px 28px",
  background: "linear-gradient(90deg, #b05cff, #8b5cf6)",
  color: "#fff",
  fontFamily: "Inter, Arial, sans-serif",
  fontWeight: 500,
  textTransform: "none",
  fontSize: "0.95rem",

  "&:hover": {
    background: "linear-gradient(90deg, #9d4cff, #7c3aed)",
  },
});

export const SecondaryButton = styled(Button)({
  borderRadius: "999px",
  padding: "11px 28px",
  border: "2px solid rgba(255,255,255,0.5)",
  color: "#fff",
  fontFamily: "Inter, Arial, sans-serif",
  fontWeight: 500,
  textTransform: "none",
  fontSize: "0.95rem",

  "&:hover": {
    border: "2px solid #fff",
    background: "rgba(255,255,255,0.06)",
  },
});
