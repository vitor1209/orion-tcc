import { Button, Chip, Paper, Slider, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import fundoNotas from "../../assets/images/fundo_notas.png";
import partitura from "../../assets/images/partitura.png";
import pianoAlt from "../../assets/images/pianoAlt.png";

export const partituraImage = partitura;
export const pianoImage = pianoAlt;

export const Page = styled(Stack)({
  minHeight: "100dvh",
  width: "100%",
  backgroundColor: "#ffffff",

  "& > footer": {
    width: "100%",
    flexShrink: 0,
  },
});

export const ActivityArea = styled(Stack)(({ theme }) => ({
  flex: "1 0 auto",
  minHeight: "100dvh",
  flexDirection: "row",
  borderTop: "1px solid #9ca3af",
  borderBottom: "none",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const Sidebar = styled(Stack)(({ theme }) => ({
  width: "clamp(250px, 25vw, 360px)",
  flexShrink: 0,
  padding: "clamp(76px, 11vh, 118px) 54px 56px",
  borderRight: "1px solid #d8dce6",
  backgroundColor: "#f6f8ff",
  overflow: "hidden",

  "&::before": {
    content: '""',
    order: 2,
    display: "block",
    width: "calc(100% + 108px)",
    height: "clamp(170px, 20vh, 220px)",
    margin: "clamp(92px, 12vh, 128px) -54px clamp(54px, 7vh, 72px)",
    flexShrink: 0,
    backgroundImage: `url(${fundoNotas})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "112% auto",
  },

  [theme.breakpoints.down("lg")]: {
    paddingInline: 42,

    "&::before": {
      width: "calc(100% + 84px)",
      marginInline: -42,
    },
  },

  [theme.breakpoints.between("sm", "md")]: {
    width: 210,
    paddingInline: 28,

    "&::before": {
      width: "calc(100% + 56px)",
      marginInline: -28,
    },
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    minHeight: 520,
    padding: "34px 32px",
    borderRight: 0,
    borderBottom: "1px solid #d8dce6",

    "&::before": {
      width: "calc(100% + 64px)",
      height: 150,
      margin: "74px -32px 44px",
      backgroundSize: "min(420px, 100%) auto",
    },
  },
}));

export const AdjustmentsPanel = styled(Stack)({
  order: 1,
  width: "fit-content",
  minWidth: 190,
  gap: 24,
  color: "#0d0f18",
});

export const AdjustmentsTitle = styled(Typography)({
  fontSize: "1.3rem",
  fontWeight: 800,
  lineHeight: 1,
});

export const ControlGroup = styled(Stack)({
  gap: 6,
});

export const ControlLabel = styled(Typography)({
  color: "#171923",
  fontSize: "1.05rem",
  fontWeight: 700,
});

export const ControlHint = styled(Typography)({
  color: "#777b87",
  fontSize: "0.88rem",
  lineHeight: 1,
});

export const VolumeSlider = styled(Slider)({
  width: 156,
  height: 4,
  padding: "10px 0 2px",
  color: "#9b72ff",

  "& .MuiSlider-rail": {
    backgroundColor: "#8ea5ff",
    opacity: 1,
  },

  "& .MuiSlider-track": {
    border: 0,
    background: "linear-gradient(90deg, #c65cff, #8a88ff)",
  },

  "& .MuiSlider-thumb": {
    width: 15,
    height: 15,
    boxShadow: "none",
    backgroundColor: "#a26dff",

    "&:hover, &.Mui-focusVisible": {
      boxShadow: "0 0 0 6px rgba(162, 109, 255, 0.14)",
    },
  },
});

export const OctaveOptions = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  gap: 12,
  marginTop: 2,
});

export const OctaveButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ active }) => ({
  minWidth: 55,
  height: 22,
  padding: 0,
  borderRadius: 999,
  color: "#ffffff",
  background: active
    ? "linear-gradient(90deg, #bb69ff, #8588ff)"
    : "rgba(154, 142, 255, 0.55)",
  fontSize: "0.74rem",
  fontWeight: 800,
  lineHeight: 1,
  textTransform: "none",

  "&:hover": {
    background: active
      ? "linear-gradient(90deg, #ad58f7, #747cff)"
      : "rgba(154, 142, 255, 0.72)",
  },
}));

export const LevelPanel = styled(Stack)({
  order: 3,
  flexShrink: 0,
  marginTop: 180,
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
  paddingLeft: 0,

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
  padding: "clamp(40px, 5vh, 72px) clamp(36px, 4vw, 72px) 48px",

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
  height: 25,
  marginLeft: 1,
  borderRadius: 999,
  color: "#ffffff",
  background: "linear-gradient(90deg, #bb69ff, #8588ff)",
  fontSize: "0.72rem",
  fontWeight: 700,

  "& .MuiChip-label": {
    paddingInline: 12,
  },
});

export const ActivityCard = styled(Paper)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  minHeight: "clamp(360px, 43vh, 490px)",
  marginTop: "clamp(42px, 5vh, 64px)",
  padding: "clamp(28px, 2.5vw, 42px) clamp(36px, 5vw, 64px) 78px",
  overflow: "hidden",
  border: "1px solid #ececf1",
  borderRadius: 9,
  backgroundColor: "#ffffff",
  boxShadow: "0 3px 14px rgba(28, 31, 43, 0.1)",

  [theme.breakpoints.down("sm")]: {
    marginTop: 34,
    padding: "24px 24px 72px",
  },
}));

export const Eyebrow = styled(Typography)({
  color: "#777b87",
  fontSize: "0.82rem",
  marginBottom: 7,
});

export const CardTitle = styled(Typography)({
  color: "#080a11",
  fontSize: "clamp(1.45rem, 1.7vw, 1.85rem)",
  fontWeight: 700,
  lineHeight: 1.2,
  marginBottom: 12,
});

export const Description = styled(Typography)({
  color: "#777b87",
  fontSize: "clamp(0.82rem, 0.86vw, 0.95rem)",
  lineHeight: 1.5,
  marginBottom: "clamp(20px, 3vh, 30px)",
});

export const ScoreImage = styled("img")(({ theme }) => ({
  width: "min(100%, 730px)",
  height: "auto",
  alignSelf: "center",
  objectFit: "contain",
  marginBottom: "clamp(48px, 7vh, 72px)",

  [theme.breakpoints.down("sm")]: {
    marginBottom: 38,
  },
}));

export const PianoImage = styled("img")({
  width: "min(52%, 430px)",
  minWidth: 260,
  height: "auto",
  alignSelf: "center",
  objectFit: "contain",
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
