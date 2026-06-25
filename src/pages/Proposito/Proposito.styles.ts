import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Page = styled(Box)({
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top right, rgba(124, 92, 255, 0.16), transparent 28%), linear-gradient(180deg, #fbfbff 0%, #f1f3fb 100%)",
  color: "#121624",
});

export const Hero = styled(Container)(({ theme }) => ({
  minHeight: "100vh",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 42,
  paddingTop: 48,
  paddingBottom: 72,

  [theme.breakpoints.down("md")]: {
    paddingTop: 32,
    paddingBottom: 48,
  },
}));

export const Topbar = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 24,
});

export const Header = styled(Stack)({
  maxWidth: 760,
  gap: 16,
});

export const Eyebrow = styled(Typography)({
  color: "#7c5cff",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.9rem",
  fontWeight: 700,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
});

export const Title = styled(Typography)(({ theme }) => ({
  color: "#111426",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "clamp(2.8rem, 5vw, 5.25rem)",
  fontWeight: 700,
  lineHeight: 0.98,
  letterSpacing: "-0.05em",

  [theme.breakpoints.down("sm")]: {
    fontSize: "2.4rem",
  },
}));

export const Subtitle = styled(Typography)({
  maxWidth: 720,
  color: "#536078",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "1.2rem",
  lineHeight: 1.75,
});

export const ContentGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "minmax(230px, 0.75fr) minmax(0, 1.35fr)",
  gap: 28,
  alignItems: "stretch",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const TopicList = styled(Stack)({
  gap: 14,
});

export const TopicButton = styled("button", {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ active }) => ({
  width: "100%",
  border: active ? "1px solid rgba(124, 92, 255, 0.55)" : "1px solid #e4e7f1",
  borderRadius: 18,
  padding: "18px 20px",
  background: active
    ? "linear-gradient(135deg, rgba(176, 108, 255, 0.16), rgba(142, 162, 255, 0.16))"
    : "#ffffff",
  color: active ? "#2d214f" : "#293044",
  boxShadow: active ? "0 16px 34px rgba(124, 92, 255, 0.14)" : "0 10px 24px rgba(35, 42, 70, 0.06)",
  cursor: "pointer",
  textAlign: "left",
  transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",

  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 18px 38px rgba(124, 92, 255, 0.13)",
    borderColor: "rgba(124, 92, 255, 0.45)",
  },
}));

export const TopicNumber = styled(Typography)({
  color: "#8b78ff",
  fontSize: "0.75rem",
  fontWeight: 800,
  letterSpacing: "0.18em",
  marginBottom: 8,
  textTransform: "uppercase",
});

export const TopicName = styled(Typography)({
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "1.08rem",
  fontWeight: 700,
});

export const DetailCard = styled(Stack)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  minHeight: 520,
  border: "1px solid #e7e9f2",
  borderRadius: 28,
  padding: "clamp(28px, 4vw, 52px)",
  background: "rgba(255, 255, 255, 0.86)",
  boxShadow: "0 24px 60px rgba(38, 44, 70, 0.12)",
  backdropFilter: "blur(10px)",

  [theme.breakpoints.down("sm")]: {
    minHeight: "auto",
  },
}));

export const DetailImage = styled("img")(({ theme }) => ({
  position: "absolute",
  right: -18,
  bottom: -22,
  width: "min(34vw, 310px)",
  opacity: 0.16,
  pointerEvents: "none",

  [theme.breakpoints.down("md")]: {
    width: 240,
  },
}));

export const DetailContent = styled(Stack)({
  position: "relative",
  zIndex: 1,
  maxWidth: 760,
  gap: 20,
});

export const DetailEyebrow = styled(Typography)({
  width: "fit-content",
  borderRadius: 999,
  padding: "7px 14px",
  color: "#ffffff",
  background: "linear-gradient(90deg, #bb69ff, #8588ff)",
  fontSize: "0.74rem",
  fontWeight: 800,
});

export const DetailTitle = styled(Typography)({
  color: "#080a13",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "clamp(2rem, 3vw, 3.4rem)",
  fontWeight: 700,
  lineHeight: 1.05,
});

export const DetailSummary = styled(Typography)({
  color: "#4f5a73",
  fontSize: "1.1rem",
  lineHeight: 1.75,
});

export const ParagraphList = styled(Stack)({
  gap: 14,
  marginTop: 8,
});

export const Paragraph = styled(Typography)({
  color: "#5d6577",
  fontSize: "0.98rem",
  lineHeight: 1.75,
});

export const Highlights = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: 12,
  marginTop: 18,

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const Highlight = styled(Stack)({
  minHeight: 92,
  justifyContent: "center",
  borderRadius: 18,
  padding: "16px",
  background: "linear-gradient(180deg, #ffffff, #f5f6ff)",
  border: "1px solid #eceeff",
  color: "#252b42",
  fontWeight: 700,
});
