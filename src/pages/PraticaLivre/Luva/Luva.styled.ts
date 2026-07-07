import { Stack, styled, Typography } from "@mui/material";

export const ModalCard = styled(Stack)({
  zIndex: 1,
  minHeight: "calc(100vh - 20%)",
  boxSizing: "border-box",
  backgroundColor: "#ffffff",
  borderRadius: "20px",
  padding: "40px",
  margin: "40px auto",
  width: "60vw",
  maxWidth: "75vw",
  boxShadow: "0 4px 32px rgba(0,0,0,0.08)",

  "@media (max-width: 900px)": {
    minHeight: "calc(100vh - 40px)",
    margin: "20px 16px",
    padding: "24px",
  },
});


export const EyebrowLabel = styled(Typography)({
  fontWeight: 600,
  fontSize: "0.75rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#8f7cff",
  marginBottom: "8px",
});

export const PageTitle = styled(Typography)({
  fontFamily: "Ubuntu, Arial, sans-serif",
  fontSize: "1.75rem",
  fontWeight: 700,
  color: "#111111",
  lineHeight: 1.2,
  marginBottom: "8px",

  "@media (max-width: 600px)": {
    fontSize: "1.4rem",
  },
});

export const PageSubtitle = styled(Typography)({
  fontSize: "0.9rem",
  color: "#888888",
  lineHeight: 1.6,
  marginBottom: "24px",
});
