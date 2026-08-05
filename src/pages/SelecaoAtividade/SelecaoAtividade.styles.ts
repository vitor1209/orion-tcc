import {
  Box,
  Chip,
  LinearProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import fundoNotas from "../../assets/images/fundo_notas.png";

export const Page = styled(Box)({
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#ffffff",
  color: "#080a14",
});

export const Layout = styled(Box)({
  minHeight: "100vh",
  width: "100%",
  display: "flex",

  "@media (max-width: 760px)": {
    flexDirection: "column",
  },
});

export const Sidebar = styled(Box)({
  position: "relative",
  flexShrink: 0,
  width: 320,
  minHeight: "100vh",
  boxSizing: "border-box",
  padding: "64px 44px 42px",
  backgroundColor: "#f4f7ff",
  borderRight: "1px solid #dfe4f4",
  overflow: "hidden",

  "@media (max-width: 1024px)": {
    width: 260,
    padding: "44px 28px 36px",
  },

  "@media (max-width: 760px)": {
    width: "100%",
    minHeight: "auto",
    padding: "24px 18px",
    borderRight: 0,
    borderBottom: "1px solid #dfe4f4",
  },
});

export const UserArea = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  gap: 16,
  marginBottom: 86,

  "@media (max-width: 760px)": {
    marginBottom: 28,
  },
});

export const UserAvatar = styled(Box)({
  width: 76,
  height: 76,
  display: "grid",
  placeItems: "center",
  color: "#b8b8bb",
});

export const UserText = styled(Box)({});

export const UserName = styled(Typography)({
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "1.18rem",
  fontWeight: 800,
});

export const EditProfile = styled(Typography)({
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.92rem",
});

export const Filters = styled(Stack)({
  position: "relative",
  zIndex: 1,
  gap: 20,
});

export const FiltersHeader = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 12,
});

export const MobileFiltersToggle = styled("button")({
  display: "none",
  alignItems: "center",
  gap: 6,
  border: "1px solid #8eaaff",
  borderRadius: 999,
  padding: "8px 12px",
  backgroundColor: "#ffffff",
  color: "#5f74bf",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.9rem",
  fontWeight: 700,
  cursor: "pointer",

  "@media (max-width: 760px)": {
    display: "inline-flex",
  },
});

export const FiltersContent = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ open }) => ({
  gap: 20,

  "@media (max-width: 760px)": {
    display: open ? "grid" : "none",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    alignItems: "start",
  },

  "@media (max-width: 520px)": {
    display: open ? "flex" : "none",
  },
}));

export const FiltersTitle = styled(Typography)({
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "1.95rem",
  fontWeight: 800,

  "@media (max-width: 760px)": {
    gridColumn: "1 / -1",
  },
});

export const SearchField = styled(TextField)({
  width: "100%",

  "@media (max-width: 760px)": {
    gridColumn: "1 / -1",
  },

  "& .MuiOutlinedInput-root": {
    height: 38,
    borderRadius: 999,
    backgroundColor: "#ffffff",
    fontFamily: '"Ubuntu", "Inter", sans-serif',
    fontSize: "0.9rem",

    "& fieldset": {
      borderColor: "#82a0ff",
    },
  },

  "& input::placeholder": {
    color: "#7e88a1",
    opacity: 1,
  },
});

export const FilterGroup = styled(Stack)({
  gap: 11,

  "@media (max-width: 760px)": {
    minWidth: 0,
  },
});

export const FilterLabel = styled(Typography)({
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.96rem",
  fontWeight: 800,
});

export const FilterButtons = styled(Stack)({
  gap: 7,
});

export const FilterButton = styled("button", {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ active }) => ({
  width: 128,
  height: 28,
  borderRadius: 999,
  border: "1px solid #82a0ff",
  backgroundColor: active ? "#8eaaff" : "#ffffff",
  color: active ? "#ffffff" : "#667089",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.88rem",
  cursor: "pointer",
  transition: "background-color 0.2s ease, color 0.2s ease, transform 0.2s ease",

  "&:hover": {
    backgroundColor: "#8eaaff",
    color: "#ffffff",
    transform: "translateY(-1px)",
  },

  "&:focus-visible": {
    outline: "3px solid rgba(142, 170, 255, 0.35)",
    outlineOffset: 2,
  },
}));

export const SidebarNotes = styled(Box)({
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 38,
  height: 210,
  backgroundImage: `url(${fundoNotas})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left bottom",
  backgroundSize: "100% auto",
  opacity: 0.58,
  pointerEvents: "none",

  "@media (max-width: 1024px)": {
    display: "none",
  },
});

export const Main = styled(Box)({
  position: "relative",
  flex: 1,
  minWidth: 0,
  boxSizing: "border-box",
  padding: "52px clamp(28px, 5vw, 82px) 64px",

  "@media (max-width: 1024px)": {
    padding: "42px 28px 56px",
  },

  "@media (max-width: 760px)": {
    padding: "28px 18px 46px",
  },
});

export const TopAction = styled(Box)({
  position: "absolute",
  top: 48,
  right: 44,

  "@media (max-width: 760px)": {
    position: "static",
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
});

export const Content = styled(Stack)({
  width: "100%",
  maxWidth: 1240,
  margin: "0 auto",
});

export const Title = styled(Typography)({
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "clamp(2.2rem, 4vw, 3.15rem)",
  fontWeight: 800,
  marginBottom: 42,
});

export const ProgressArea = styled(Box)({
  display: "grid",
  gridTemplateColumns: "14px minmax(260px, 380px) minmax(220px, 1fr)",
  alignItems: "center",
  gap: 10,
  marginBottom: 54,

  "@media (max-width: 900px)": {
    gridTemplateColumns: "14px 1fr",
  },
});

export const ProgressMarker = styled(Box)({
  width: 1,
  height: 42,
  backgroundColor: "#d8d8d8",
});

export const ProgressText = styled(Box)({});

export const ProgressTitle = styled(Typography)({
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "1.35rem",
  fontWeight: 700,
});

export const ProgressSubtitle = styled(Typography)({
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.9rem",
  color: "#7b7f8c",
});

export const ProgressBarWrapper = styled(Box)({
  position: "relative",
  paddingRight: 24,

  "@media (max-width: 900px)": {
    gridColumn: "1 / -1",
    marginTop: 14,
  },
});

export const ProgressBar = styled(LinearProgress)({
  height: 4,
  backgroundColor: "#7f7f7f",

  "& .MuiLinearProgress-bar": {
    backgroundColor: "#b26cff",
  },
});

export const ProgressDiamond = styled(Box, {
  shouldForwardProp: (prop) => prop !== "progress",
})<{ progress: number }>(({ progress }) => ({
  position: "absolute",
  left: `${progress}%`,
  top: "50%",
  width: 13,
  height: 13,
  backgroundColor: "#7f7f7f",
  transform: "translate(-50%, -50%) rotate(45deg)",
}));

export const ProgressValue = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "progress",
})<{ progress: number }>(({ progress }) => ({
  position: "absolute",
  left: `${progress}%`,
  top: 8,
  transform: "translateX(-50%)",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.72rem",
  color: "#525252",
}));

export const ActivitiesArea = styled(Box)({
  position: "relative",
});

export const ActivitiesScroll = styled(Box)({
  height: "min(620px, calc(100vh - 330px))",
  minHeight: 560,
  overflowY: "auto",
  padding: "10px 18px 12px 0",
  scrollbarColor: "#9db3ff transparent",
  scrollbarWidth: "thin",

  "&::-webkit-scrollbar": {
    width: 10,
  },

  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },

  "&::-webkit-scrollbar-thumb": {
    minHeight: 56,
    borderRadius: 999,
    border: "3px solid #ffffff",
    background: "linear-gradient(180deg, #bba4ff 0%, #8eaaff 100%)",
    cursor: "grab",
  },

  "&::-webkit-scrollbar-thumb:hover": {
    background: "linear-gradient(180deg, #aa7cff 0%, #7f9eff 100%)",
  },

  "&::-webkit-scrollbar-thumb:active": {
    cursor: "grabbing",
  },

  "@media (max-width: 1024px)": {
    height: "auto",
    minHeight: 0,
    overflow: "visible",
    paddingRight: 0,
  },
});

export const ActivitiesGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(230px, 1fr))",
  gap: "30px 26px",
  paddingBottom: 4,

  "@media (max-width: 1280px)": {
    gridTemplateColumns: "repeat(2, minmax(240px, 1fr))",
  },

  "@media (max-width: 760px)": {
    gridTemplateColumns: "1fr",
    gap: 18,
  },
});

export const ActivityCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== "status",
})<{ status: "concluida" | "pendente" }>(({ status }) => ({
  position: "relative",
  minHeight: 150,
  padding: "36px 28px 26px",
  borderRadius: 12,
  border: "1px solid #8ea7ff",
  backgroundColor: status === "concluida" ? "#f8faff" : "#ffffff",
  boxShadow: status === "concluida"
    ? "0 10px 18px rgba(58, 74, 130, 0.24)"
    : "0 8px 15px rgba(58, 74, 130, 0.14)",
  overflow: "hidden",
  cursor: "pointer",
  transition:
    "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",

  "&:hover": {
    transform: "translateY(-3px)",
    borderColor: "#aa4cff",
    boxShadow: "0 16px 30px rgba(58, 74, 130, 0.24)",
  },
}));

export const LevelChip = styled(Chip)({
  position: "absolute",
  top: 10,
  right: 12,
  height: 22,
  border: "1px solid #b26cff",
  backgroundColor: "#ffffff",
  color: "#6f3eff",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.68rem",
  fontWeight: 700,
});

export const ActivityTitle = styled(Typography)({
  maxWidth: 260,
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "1.18rem",
  lineHeight: 1.16,
  fontWeight: 800,
  marginBottom: 18,
});

export const ActivityDescription = styled(Typography)({
  maxWidth: 280,
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.9rem",
  lineHeight: 1.55,
  color: "#707070",
});

export const DoneCorner = styled(Box)({
  position: "absolute",
  right: 0,
  bottom: 0,
  width: 58,
  height: 38,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#ffffff",
  backgroundColor: "#86a2f8",
  borderTopLeftRadius: 18,
});

export const EmptyState = styled(Box)({
  marginTop: 24,
  padding: "28px 24px",
  borderRadius: 14,
  border: "1px dashed #8eaaff",
  backgroundColor: "#f8faff",
  color: "#667089",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "1rem",
  fontWeight: 700,
  textAlign: "center",
});
