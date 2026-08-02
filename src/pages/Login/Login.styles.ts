import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { keyframes } from "@emotion/react";

import constelacaoOrion from "../../assets/images/constelacao_orion.png";
import estrelas from "../../assets/images/estrelass.png";
import logo from "../../assets/images/logo.png";
import lua from "../../assets/images/lua.png";

export const imagemConstelacao = constelacaoOrion;
export const imagemLua = lua;
export const imagemLogo = logo;

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
    opacity: 0.28;
  }

  50% {
    opacity: 0.46;
  }
`;

const flutuarAstro = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(0, -12px, 0);
  }
`;

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
    url(${estrelas})
  `,
  backgroundRepeat: "repeat",
  backgroundSize: "1120px auto",
  backgroundPosition: "left -80px top -120px",
  animation: `${moverEstrelas} 95s linear infinite`,

  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-20%",
    backgroundImage: `
      radial-gradient(circle, rgba(255, 255, 255, 0.95) 0 1px, transparent 1.8px),
      radial-gradient(circle, rgba(190, 207, 255, 0.85) 0 1px, transparent 1.6px)
    `,
    backgroundSize: "320px 320px, 480px 480px",
    backgroundPosition: "20px 40px, 150px 180px",
    opacity: 0.2,
    pointerEvents: "none",
    animation: `${deslizarCamadaEstrelas} 70s linear infinite, ${pulsarEstrelas} 7s ease-in-out infinite`,
  },

  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 48% 44%, rgba(139, 92, 246, 0.16), transparent 34%), radial-gradient(circle at 20% 22%, rgba(255, 255, 255, 0.08), transparent 22%)",
    pointerEvents: "none",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "104px 18px 56px",
    alignItems: "flex-start",
    backgroundSize: "940px auto",
    backgroundPosition: "left -240px top -120px",

    "&::before": {
      backgroundSize: "360px 360px, 540px 540px",
      opacity: 0.16,
    },
  },

  "@media (prefers-reduced-motion: reduce)": {
    animation: "none",

    "&::before": {
      animation: "none",
    },
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
  opacity: 0.72,
  pointerEvents: "none",
  animation: `${flutuarAstro} 8s ease-in-out infinite`,

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

  "@media (prefers-reduced-motion: reduce)": {
    animation: "none",
  },
}));

export const Lua = styled("img")(({ theme }) => ({
  position: "absolute",
  right: "8%",
  bottom: "13%",
  width: "clamp(170px, 16vw, 250px)",
  opacity: 0.7,
  pointerEvents: "none",
  animation: `${flutuarAstro} 9s ease-in-out infinite reverse`,

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

  "@media (prefers-reduced-motion: reduce)": {
    animation: "none",
  },
}));

export const CartaoLogin = styled(Stack)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  width: "min(100%, 500px)",
  minHeight: 540,
  alignItems: "center",
  padding: "34px 52px 44px",
  border: "1px solid rgba(206, 216, 255, 0.72)",
  borderRadius: 36,
  backgroundColor: "rgba(255, 255, 255, 0.78)",
  backgroundImage: `url(${estrelas})`,
  backgroundRepeat: "repeat",
  backgroundSize: "1180px auto",
  backgroundPosition: "center",
  backdropFilter: "blur(20px)",
  boxShadow:
    "0 34px 100px rgba(0, 0, 0, 0.34), inset 0 1px 0 rgba(255, 255, 255, 0.94)",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.56), transparent 42%), radial-gradient(circle at top left, rgba(190, 116, 255, 0.24), transparent 34%), radial-gradient(circle at bottom right, rgba(120, 148, 255, 0.2), transparent 30%)",
    pointerEvents: "none",
  },

  "& > *": {
    position: "relative",
    zIndex: 1,
  },

  [theme.breakpoints.down("md")]: {
    width: "min(100%, 460px)",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    minHeight: "auto",
    padding: "28px 22px 36px",
    borderRadius: 28,
  },
}));

export const Abas = styled(Box)({
  width: "100%",
  maxWidth: 340,
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  padding: 5,
  borderRadius: 999,
  backgroundColor: "rgba(219, 222, 230, 0.72)",
  marginBottom: 30,
  boxShadow: "inset 0 2px 10px rgba(15, 23, 42, 0.1)",
});

export const Aba = styled("button", {
  shouldForwardProp: (prop) => prop !== "selecionada",
})<{ selecionada?: boolean }>(({ selecionada }) => ({
  height: 42,
  border: 0,
  borderRadius: 999,
  color: selecionada ? "#ffffff" : "#9a5cff",
  background: selecionada ? "linear-gradient(90deg, #b55cff, #8b5cf6)" : "transparent",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.95rem",
  fontWeight: 800,
  cursor: "pointer",
  boxShadow: selecionada ? "0 8px 18px rgba(139, 92, 246, 0.28)" : "none",
  transition: "background-color 0.2s ease, color 0.2s ease",

  "&:hover": {
    color: selecionada ? "#ffffff" : "#7c3aed",
    backgroundColor: selecionada ? undefined : "rgba(255, 255, 255, 0.48)",
  },
}));

export const Logo = styled("img")({
  width: 132,
  height: "auto",
  objectFit: "contain",
  marginBottom: 20,
});

export const CabecalhoLogin = styled(Stack)({
  alignItems: "center",
  textAlign: "center",
  gap: 8,
  marginBottom: 30,
});

export const TituloLogin = styled(Typography)({
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  color: "#101322",
  fontSize: "clamp(1.45rem, 4vw, 1.9rem)",
  fontWeight: 800,
  lineHeight: 1.15,
});

export const SubtituloLogin = styled(Typography)({
  maxWidth: 340,
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  color: "#4f5668",
  fontSize: "clamp(0.94rem, 2.4vw, 1.02rem)",
  lineHeight: 1.55,
});

export const Formulario = styled("form")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 18,
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
  height: 50,
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
  marginTop: 12,
  textAlign: "right",
  color: "#5e3bb8",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.86rem",
  fontWeight: 700,
  textDecoration: "none",

  "&:hover": {
    textDecoration: "underline",
  },
});

export const AreaEntrar = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  marginTop: 18,

  "& .MuiButtonBase-root": {
    width: "100%",
    minHeight: 50,
    padding: "12px 42px",
    background: "#AA4CFF",
    fontSize: "1.05rem",
    fontWeight: 800,
    boxShadow: "0 16px 32px rgba(146, 63, 231, 0.34)",

    "&:hover": {
      background: "#AA4CFF",
      filter: "brightness(0.95)",
    },
  },

  "& .MuiButtonBase-root:disabled, & .MuiButtonBase-root.Mui-disabled": {
    background: "#C27DFF !important",
    color: "rgba(255, 255, 255, 0.82) !important",
    boxShadow: "none",
    filter: "none",
    opacity: 0.72,
    cursor: "not-allowed",
  },

  [theme.breakpoints.down("sm")]: {
    marginTop: 18,

    "& .MuiButtonBase-root": {
      width: "100%",
    },
  },
}));
