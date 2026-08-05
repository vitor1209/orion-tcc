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

const surgirCartao = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 22px, 0) scale(0.97);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
`;

const surgirConteudo = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 10px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const trocarFormulario = keyframes`
  from {
    opacity: 0;
    transform: translate3d(16px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const brilhoBotao = keyframes`
  from {
    transform: translateX(-120%) skewX(-18deg);
  }

  to {
    transform: translateX(220%) skewX(-18deg);
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
  animation: `${surgirCartao} 0.6s cubic-bezier(.2,.8,.2,1) both`,
  transition: "transform 0.28s ease, box-shadow 0.28s ease",

  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow:
      "0 40px 110px rgba(0, 0, 0, 0.38), inset 0 1px 0 rgba(255, 255, 255, 0.96)",
  },

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

  "@media (prefers-reduced-motion: reduce)": {
    animation: "none",
    transition: "none",

    "&:hover": {
      transform: "none",
    },
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
  transition:
    "background-color 0.2s ease, color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",

  "&:hover": {
    color: selecionada ? "#ffffff" : "#7c3aed",
    backgroundColor: selecionada ? undefined : "rgba(255, 255, 255, 0.48)",
    transform: "translateY(-1px)",
  },

  "&:active": {
    transform: "translateY(0)",
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
  animation: `${surgirConteudo} 0.45s ease both`,
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
  animation: `${trocarFormulario} 0.35s ease both`,
});

export const GrupoCampo = styled(Box)({
  width: "100%",
  transition: "transform 0.2s ease",

  "&:focus-within": {
    transform: "translateY(-2px)",
  },
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
  transition:
    "background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",

  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.82)",
    borderColor: "#aa4cff",
  },

  "&::placeholder": {
    color: "#9b9ba5",
  },

  "&:focus": {
    backgroundColor: "#ffffff",
    borderColor: "#9b5cff",
    boxShadow: "0 0 0 4px rgba(192, 108, 255, 0.16)",
  },

  "&[aria-invalid='true']": {
    borderColor: "#ef4444",
    boxShadow: "0 0 0 4px rgba(239, 68, 68, 0.12)",
  },
});

export const IconeSenha = styled("button")({
  position: "absolute",
  right: 12,
  top: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 34,
  height: 34,
  border: 0,
  borderRadius: "50%",
  backgroundColor: "transparent",
  transform: "translateY(-50%)",
  color: "#111111",
  cursor: "pointer",
  transition: "background-color 0.2s ease, color 0.2s ease",

  "&:hover": {
    color: "#7c3aed",
    backgroundColor: "rgba(170, 76, 255, 0.1)",
  },

  "&:focus-visible": {
    outline: "3px solid rgba(170, 76, 255, 0.22)",
    outlineOffset: 2,
  },
});

export const MensagemCampo = styled(Typography)({
  marginTop: 7,
  color: "#dc2626",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.78rem",
  fontWeight: 700,
  lineHeight: 1.35,
});

export const ForcaSenha = styled(Box)({
  marginTop: 10,
  display: "grid",
  gap: 6,
});

export const BarraForca = styled(Box, {
  shouldForwardProp: (prop) => prop !== "forca",
})<{ forca: "fraca" | "media" | "forte" }>(({ forca }) => {
  const largura = forca === "forte" ? "100%" : forca === "media" ? "66%" : "34%";
  const cor = forca === "forte" ? "#22c55e" : forca === "media" ? "#AA4CFF" : "#C27DFF";

  return {
    height: 7,
    borderRadius: 999,
    backgroundColor: "rgba(170, 76, 255, 0.13)",
    overflow: "hidden",

    "&::before": {
      content: '""',
      display: "block",
      width: largura,
      height: "100%",
      borderRadius: "inherit",
      backgroundColor: cor,
      transition: "width 0.25s ease, background-color 0.25s ease",
    },
  };
});

export const TextoForca = styled(Typography)({
  color: "#5b6474",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.78rem",
  fontWeight: 700,
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
    position: "relative",
    width: "100%",
    minHeight: 50,
    padding: "12px 42px",
    background: "#AA4CFF",
    fontSize: "1.05rem",
    fontWeight: 800,
    boxShadow: "0 16px 32px rgba(146, 63, 231, 0.34)",
    overflow: "hidden",

    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "38%",
      height: "100%",
      background:
        "linear-gradient(90deg, transparent, rgba(255,255,255,0.38), transparent)",
      transform: "translateX(-120%) skewX(-18deg)",
      pointerEvents: "none",
    },

    "&:hover": {
      background: "#AA4CFF",
      filter: "brightness(0.95)",
      transform: "translateY(-2px)",
      boxShadow: "0 20px 38px rgba(146, 63, 231, 0.42)",
    },

    "&:hover::after": {
      animation: `${brilhoBotao} 0.8s ease`,
    },

    "&:active": {
      transform: "translateY(0)",
    },
  },

  "& .MuiButtonBase-root:disabled, & .MuiButtonBase-root.Mui-disabled": {
    background: "#C27DFF !important",
    color: "rgba(255, 255, 255, 0.82) !important",
    boxShadow: "none",
    filter: "none",
    opacity: 0.72,
    cursor: "not-allowed",

    "&::after": {
      display: "none",
    },
  },

  [theme.breakpoints.down("sm")]: {
    marginTop: 18,

    "& .MuiButtonBase-root": {
      width: "100%",
    },
  },

  "@media (prefers-reduced-motion: reduce)": {
    "& .MuiButtonBase-root": {
      transition: "none",

      "&:hover": {
        transform: "none",
      },

      "&:hover::after": {
        animation: "none",
      },
    },
  },
}));

export const FeedbackFormulario = styled(Typography)({
  marginTop: -4,
  padding: "10px 14px",
  borderRadius: 14,
  backgroundColor: "rgba(170, 76, 255, 0.1)",
  color: "#4c2a86",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.86rem",
  fontWeight: 700,
  lineHeight: 1.4,
  textAlign: "center",
  animation: `${surgirConteudo} 0.25s ease both`,
});
