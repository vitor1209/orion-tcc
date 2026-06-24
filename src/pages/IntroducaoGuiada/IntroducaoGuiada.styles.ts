import { Button, Chip, Paper, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import fundoNotas from "../../assets/images/fundo_notas.png";

export const Page = styled(Stack)({
  minHeight: "100dvh",
  width: "100%",
  backgroundColor: "#ffffff",

  "& > footer": {
    width: "100%",
    flexShrink: 0,
  },
});

export const LessonArea = styled(Stack)(({ theme }) => ({
  flex: "1 0 auto",
  minHeight: "clamp(520px, 68vh, 780px)",
  flexDirection: "row",
  borderTop: "1px solid #9ca3af",
  borderBottom: "none",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const Sidebar = styled(Stack)(({ theme }) => ({
  width: "clamp(240px, 25vw, 360px)",
  flexShrink: 0,
  padding: "clamp(150px, 22vh, 230px) 32px 40px",
  borderRight: "1px solid #d8dce6",
  backgroundColor: "#f6f8ff",
  overflow: "hidden",

  "&::before": {
    content: '""',
    order: 1,
    display: "block",
    width: "calc(100% + 64px)",
    height: "clamp(170px, 20vh, 220px)",
    margin: "0 -32px clamp(48px, 7vh, 70px)",
    flexShrink: 0,
    backgroundImage: `url(${fundoNotas})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "112% auto",
  },

  [theme.breakpoints.between("sm", "md")]: {
    width: 180,
    paddingInline: 24,

    "&::before": {
      width: "calc(100% + 48px)",
      marginInline: -24,
    },
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    minHeight: 420,
    padding: "28px 24px",
    borderRight: 0,
    borderBottom: "1px solid #d8dce6",

    "&::before": {
      width: "calc(100% + 48px)",
      height: 150,
      margin: "0 -24px 34px",
      backgroundSize: "min(420px, 100%) auto",
    },
  },
}));

export const LevelPanel = styled(Stack)({
  order: 2,
  flexShrink: 0,
});

export const LevelTitle = styled(Typography)({
  color: "#0d0f18",
  fontSize: "1.1rem",
  fontWeight: 700,
  marginBottom: 12,
});

export const LessonList = styled(Stack)({
  position: "relative",
  gap: 10,

  "&::before": {
    content: '""',
    position: "absolute",
    top: 11,
    bottom: 9,
    left: 20,
    width: 1,
    backgroundColor: "#aaa2ff",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    left: 16.5,
    bottom: -1,
    width: 7,
    height: 7,
    backgroundColor: "#8e82ff",
    transform: "rotate(45deg)",
  },
});

export const LessonItem = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ active }) => ({
  position: "relative",
  flexDirection: "row",
  alignItems: "center",
  gap: 10,
  minHeight: 22,
  paddingLeft: 12,
  color: active ? "#171923" : "#3f4452",
  fontSize: "0.95rem",
  lineHeight: 1.2,

  "& svg": {
    position: "relative",
    zIndex: 1,
    flexShrink: 0,
    color: active ? "#8e7cff" : "#858a97",
    backgroundColor: "#f6f8ff",
    strokeWidth: active ? 2.6 : 2,
  },
}));

export const Main = styled(Stack)(({ theme }) => ({
  width: "100%",
  maxWidth: 1280,
  minWidth: 0,
  margin: "0 auto",
  padding: "clamp(40px, 5vh, 72px) clamp(36px, 4vw, 72px) 54px",

  [theme.breakpoints.down("sm")]: {
    padding: "28px 18px 36px",
  },
}));

export const Header = styled(Stack)({
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: 24,
});

export const HeadingGroup = styled(Stack)({
  gap: 10,
});

export const TitleRow = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  gap: 18,
});

export const TitleMarker = styled(Stack)({
  width: 1,
  height: 38,
  flexShrink: 0,
  backgroundColor: "#d3d5dc",
});

export const Title = styled(Typography)(({ theme }) => ({
  color: "#05060a",
  fontSize: "clamp(2rem, 2.35vw, 2.8rem)",
  fontWeight: 700,
  lineHeight: 1.1,

  [theme.breakpoints.down("sm")]: {
    fontSize: "1.65rem",
  },
}));

export const LevelChip = styled(Chip)({
  width: "fit-content",
  height: 23,
  marginLeft: 1,
  borderRadius: 999,
  color: "#ffffff",
  background: "linear-gradient(90deg, #bb69ff, #8588ff)",
  fontSize: "0.66rem",
  fontWeight: 700,

  "& .MuiChip-label": {
    paddingInline: 12,
  },
});

export const BackButton = styled(Button)({
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  minWidth: 0,
  padding: "12px 20px",
  border: "1px solid rgba(95, 74, 248, 0.18)",
  color: "#2d214f",
  borderRadius: 999,
  backgroundColor: "#ffffff",
  fontFamily: '"Inter", Arial, Helvetica, sans-serif',
  fontSize: "0.95rem",
  fontWeight: 700,
  lineHeight: "normal",
  textTransform: "none",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",

  "&:hover": {
    backgroundColor: "#ffffff",
    transform: "translateY(-1px)",
    boxShadow: "0 16px 36px rgba(95, 74, 248, 0.12)",
  },
});

export const TheoryCard = styled(Paper)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  height: "clamp(430px, 52vh, 600px)",
  marginTop: "clamp(42px, 5vh, 64px)",
  padding: "clamp(28px, 2.5vw, 42px) 30px 58px clamp(38px, 4vw, 64px)",
  overflow: "hidden",
  border: "1px solid #ececf1",
  borderRadius: 9,
  backgroundColor: "#ffffff",
  boxShadow: "0 3px 14px rgba(28, 31, 43, 0.1)",

  [theme.breakpoints.down("sm")]: {
    marginTop: 34,
    padding: "24px 28px 64px 24px",
  },
}));

export const Eyebrow = styled(Typography)({
  color: "#777b87",
  fontSize: "0.75rem",
  marginBottom: 7,
});

export const CardTitle = styled(Typography)({
  color: "#080a11",
  fontSize: "clamp(1.3rem, 1.5vw, 1.65rem)",
  fontWeight: 700,
  lineHeight: 1.2,
  marginBottom: 16,
});

export const Copy = styled(Stack)({
  flex: 1,
  minHeight: 0,
  maxWidth: "none",
  gap: 20,
  paddingRight: 32,
  overflowY: "scroll",
  overscrollBehavior: "contain",
  scrollbarWidth: "thin",
  scrollbarColor: "#8a87ff transparent",

  "&::-webkit-scrollbar": {
    width: 4,
  },

  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
    borderRadius: 999,
  },

  "&::-webkit-scrollbar-thumb": {
    borderRadius: 999,
    background: "linear-gradient(180deg, #dc66ff 0%, #7d8dff 100%)",
  },
});

export const Paragraph = styled(Typography)({
  color: "#60636c",
  fontSize: "clamp(0.76rem, 0.8vw, 0.9rem)",
  lineHeight: 1.55,
});

export const NextButton = styled(Button)({
  position: "absolute",
  right: 30,
  bottom: 16,
  minWidth: 64,
  width: 64,
  height: 54,
  padding: 0,
  borderRadius: 12,
  color: "#ffffff",
  background: "linear-gradient(135deg, #b365ff, #858aff)",
  boxShadow: "none",

  "&:hover": {
    background: "linear-gradient(135deg, #a853f4, #7178f4)",
    boxShadow: "none",
  },
});
