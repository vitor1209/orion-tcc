import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

import constelacaoOrion from "../../assets/images/constelacao_orion.png";
import estrelas from "../../assets/images/estrelass.png";
import logo from "../../assets/images/logo.png";
import lua from "../../assets/images/lua.png";

export const imagemConstelacao = constelacaoOrion;
export const imagemLua = lua;
export const imagemLogo = logo;

export const PaginaLogin = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: "100dvh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  padding: "112px 24px 72px",
  backgroundColor: "#101728",
  backgroundImage: `
    url(${estrelas}),
    url(${estrelas})
  `,
  backgroundRepeat: "repeat, repeat",
  backgroundSize: "760px auto, 980px auto",
  backgroundPosition: "left -80px top -120px, right -120px bottom -160px",

  [theme.breakpoints.down("sm")]: {
    padding: "104px 18px 56px",
    alignItems: "flex-start",
    backgroundSize: "680px auto, 820px auto",
    backgroundPosition: "left -180px top -120px, right -220px bottom -140px",
  },
}));

export const BotaoVoltarWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 30,
  right: 42,
  zIndex: 4,

  [theme.breakpoints.down("sm")]: {
    top: 20,
    right: 18,
  },
}));

export const Constelacao = styled("img")(({ theme }) => ({
  position: "absolute",
  left: "7%",
  top: "20%",
  width: "clamp(180px, 18vw, 260px)",
  opacity: 0.92,
  pointerEvents: "none",

  [theme.breakpoints.down("md")]: {
    left: "4%",
    top: "18%",
    width: 170,
  },

  [theme.breakpoints.down("sm")]: {
    opacity: 0.24,
    width: 150,
    left: -22,
    top: 112,
  },
}));

export const Lua = styled("img")(({ theme }) => ({
  position: "absolute",
  right: "8%",
  bottom: "13%",
  width: "clamp(170px, 16vw, 250px)",
  opacity: 0.88,
  pointerEvents: "none",

  [theme.breakpoints.down("md")]: {
    right: "4%",
    width: 170,
  },

  [theme.breakpoints.down("sm")]: {
    opacity: 0.22,
    width: 150,
    right: -28,
    bottom: 24,
  },
}));

export const CartaoLogin = styled(Stack)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  width: "min(100%, 470px)",
  minHeight: 470,
  alignItems: "center",
  padding: "32px 48px 40px",
  border: "1px solid rgba(148, 163, 255, 0.95)",
  borderRadius: 34,
  backgroundColor: "rgba(246, 247, 251, 0.94)",
  backgroundImage: `url(${estrelas})`,
  backgroundRepeat: "repeat",
  backgroundSize: "920px auto",
  backgroundPosition: "center",
  boxShadow:
    "0 30px 90px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    background:
      "radial-gradient(circle at top left, rgba(190, 116, 255, 0.22), transparent 34%), radial-gradient(circle at bottom right, rgba(120, 148, 255, 0.18), transparent 30%)",
    pointerEvents: "none",
  },

  "& > *": {
    position: "relative",
    zIndex: 1,
  },

  [theme.breakpoints.down("md")]: {
    width: "min(100%, 440px)",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    minHeight: "auto",
    padding: "28px 22px 34px",
    borderRadius: 24,
  },
}));

export const Abas = styled(Box)({
  width: "min(100%, 310px)",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  padding: 5,
  borderRadius: 999,
  backgroundColor: "rgba(219, 222, 230, 0.9)",
  marginBottom: 34,
  boxShadow: "inset 0 2px 8px rgba(15, 23, 42, 0.08)",
});

export const AbaAtiva = styled("button")({
  height: 40,
  border: 0,
  borderRadius: 999,
  color: "#ffffff",
  background: "linear-gradient(90deg, #b55cff, #8b5cf6)",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.95rem",
  fontWeight: 800,
  cursor: "pointer",
  boxShadow: "0 8px 18px rgba(139, 92, 246, 0.28)",
});

export const Aba = styled("button")({
  height: 40,
  border: 0,
  borderRadius: 999,
  color: "#9a5cff",
  background: "transparent",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.95rem",
  fontWeight: 800,
  cursor: "pointer",
  transition: "background-color 0.2s ease, color 0.2s ease",

  "&:hover": {
    color: "#7c3aed",
    backgroundColor: "rgba(255, 255, 255, 0.48)",
  },
});

export const Logo = styled("img")({
  width: 156,
  height: "auto",
  objectFit: "contain",
  marginBottom: 34,
});

export const Formulario = styled("form")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 24,
});

export const GrupoCampo = styled(Box)({
  width: "100%",
});

export const Rotulo = styled("label")({
  display: "block",
  marginBottom: 10,
  color: "#050505",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "1rem",
  fontWeight: 700,
});

export const CampoSenha = styled(Box)({
  position: "relative",
});

export const Campo = styled("input")({
  width: "100%",
  height: 46,
  boxSizing: "border-box",
  border: "1.5px solid #bd72ff",
  borderRadius: 999,
  padding: "0 48px 0 24px",
  outline: "none",
  backgroundColor: "rgba(255, 255, 255, 0.64)",
  color: "#202434",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.95rem",

  "&::placeholder": {
    color: "#9b9ba5",
  },

  "&:focus": {
    backgroundColor: "#ffffff",
    borderColor: "#9b5cff",
    boxShadow: "0 0 0 4px rgba(192, 108, 255, 0.16)",
  },
});

export const IconeSenha = styled(Box)({
  position: "absolute",
  right: 18,
  top: "50%",
  display: "inline-flex",
  transform: "translateY(-50%)",
  color: "#111111",
  pointerEvents: "none",
});

export const EsqueceuSenha = styled("a")({
  display: "block",
  marginTop: 10,
  textAlign: "center",
  color: "#333333",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.78rem",
  textDecoration: "none",
});

export const AreaEntrar = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  marginTop: 32,

  "& .MuiButtonBase-root": {
    minWidth: 200,
    minHeight: 46,
    padding: "10px 42px",
    fontSize: "1.05rem",
    fontWeight: 800,
    boxShadow: "0 14px 28px rgba(146, 63, 231, 0.34)",
  },

  [theme.breakpoints.down("sm")]: {
    marginTop: 22,

    "& .MuiButtonBase-root": {
      width: "min(100%, 210px)",
    },
  },
}));
