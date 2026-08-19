import { styled } from "@mui/material/styles";
import { AppBar, Box, Drawer, IconButton, Stack } from "@mui/material";

export const ContainerNavegacao = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "$escuro",
})<{ $escuro?: boolean }>(({ $escuro }) => ({
  backgroundColor: $escuro ? "#0C1528" : "#FFFFFF",
  boxShadow: $escuro ? "none" : "0 1px 0 rgba(15, 23, 42, 0.08)",
  position: "fixed",
  top: 0,
  borderBottom: $escuro ? "none" : "1px solid #e0e0e0",
  color: $escuro ? "#ffffff" : "#050505",
  transition:
    "background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, color 0.25s ease",

  "& a": {
    color: $escuro ? "#ffffff" : "#111111",
  },

  "& svg": {
    color: $escuro ? "#ffffff" : "#111111",
  },

  "& img": {
    filter: $escuro ? "brightness(0) invert(1)" : "none",
  },
}));

export const ConteudoNavegacao = styled(Box)({
  maxWidth: "1120px",
  width: "100%",
  height: "47px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "180px 1fr 240px",
  alignItems: "center",
  padding: "0 12px",

  "@media (max-width: 900px)": {
    gridTemplateColumns: "1fr auto",
    height: "58px",
    padding: "0 18px",
  },
});

export const Logo = styled("img")({
  height: "39px",
  objectFit: "contain",
  display: "block",
  transition: "filter 0.25s ease",
});

export const LinksNavegacao = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "32px",

  "& a": {
    textDecoration: "none",
    fontSize: "0.95rem",
    fontWeight: 500,
    whiteSpace: "nowrap",
    transition: "color 0.2s ease, opacity 0.2s ease",
  },

  "& a:hover": {
    opacity: 0.72,
  },

  "@media (max-width: 900px)": {
    display: "none",
  },
});

export const AcoesAutenticacao = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "42px",

  "& a": {
    textDecoration: "none",
    fontSize: "0.95rem",
    fontWeight: 500,
    whiteSpace: "nowrap",
    transition: "color 0.2s ease, opacity 0.2s ease",
  },

  "& a:hover": {
    opacity: 0.72,
  },

  "@media (max-width: 900px)": {
    display: "none",
  },
});

export const LinkEntrar = styled("a")({
  display: "inline-flex",
  alignItems: "center",
  gap: "7px",
});

export const BotaoMenuMobile = styled(IconButton)({
  display: "none",
  justifySelf: "flex-end",
  borderRadius: "12px",
  padding: "8px",

  "@media (max-width: 900px)": {
    display: "inline-flex",
  },
});

export const MenuMobile = styled(Drawer)({
  "& .MuiDrawer-paper": {
    width: "min(82vw, 320px)",
    padding: "22px",
    boxSizing: "border-box",
    backgroundColor: "#FFFFFF",
  },
});

export const CabecalhoMenuMobile = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "28px",
});

export const BotaoFecharMenu = styled(IconButton)({
  color: "#111",
  borderRadius: "12px",
  padding: "8px",
});

export const LinksMenuMobile = styled(Stack)({
  gap: "10px",

  "& a": {
    minHeight: "44px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 12px",
    borderRadius: "12px",
    textDecoration: "none",
    color: "#111",
    fontSize: "1rem",
    fontWeight: 600,
  },

  "& a:hover": {
    backgroundColor: "#f4f0ff",
    color: "#7c3aed",
  },
});
