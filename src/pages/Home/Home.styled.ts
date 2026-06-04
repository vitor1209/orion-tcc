import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";

export const HeroSection = styled(Box)({
  minHeight: "100vh",
  background: "#020b2d",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 8%",
  overflow: "hidden",

  "@media (max-width: 900px)": {
  flexDirection: "column",
  textAlign: "center",
  paddingTop: "120px",
},
});

export const Content = styled(Box)({
  maxWidth: "600px",
});

export const Title = styled(Typography)({
  fontSize: "4rem",
  fontWeight: 700,
  lineHeight: 1.1,
  color: "#fff",

  "@media (max-width: 768px)": {
  fontSize: "3rem",
},
});

export const GradientText = styled("span")({
  background: "linear-gradient(90deg, #c56fff, #8f7cff)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const Description = styled(Typography)({
  color: "#d9d9d9",
  marginTop: "20px",
  fontSize: "1.2rem",
  lineHeight: 1.6,
});

export const ButtonsContainer = styled(Box)({
  display: "flex",
  gap: "16px",
  marginTop: "40px",
});

export const SecondaryButton = styled(Button)({
  borderRadius: "999px",
  padding: "12px 28px",
  border: "2px solid white",
  color: "white",
});

export const PrimaryButton = styled(Button)({
  borderRadius: "999px",
  padding: "12px 28px",
  background: "linear-gradient(90deg,#b05cff,#8b5cf6)",
  color: "white",

  "&:hover": {
    background: "linear-gradient(90deg,#9d4cff,#7c3aed)",
  },
});

export const HeroImage = styled("img")({
  width: "500px",
  maxWidth: "100%",
});