import { styled } from "@mui/material/styles";
import { AppBar, Box } from "@mui/material";

export const NavbarContainer = styled(AppBar)({
  backgroundColor: "#FFFFFF",
  boxShadow: "none",
  position: "fixed", 
  top: 0,
  borderBottom: "1px solid #e0e0e0",
  color: "#050505",
});

export const NavbarContent = styled(Box)({
  maxWidth: "1120px",
  width: "100%",
  height: "47px",
  margin: "0 auto",

  display: "grid",
  gridTemplateColumns: "180px 1fr 240px",
  alignItems: "center",

  padding: "0 12px",

  "@media (max-width: 900px)": {
    gridTemplateColumns: "auto 1fr",
    height: "58px",
    padding: "0 18px",
  },
});

export const Logo = styled("img")({
  height: "39px",
  objectFit: "contain",
  display: "block",
});

export const NavLinks = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "32px",

  "& a": {
    textDecoration: "none",
    color: "#111",
    fontSize: "0.95rem",
    fontWeight: 500,
    whiteSpace: "nowrap",
  },

  "@media (max-width: 900px)": {
    display: "none",
  },
});

export const AuthActions = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "42px",

  "& a": {
    textDecoration: "none",
    color: "#111",
    fontSize: "0.95rem",
    fontWeight: 500,
    whiteSpace: "nowrap",
  },

  "@media (max-width: 900px)": {
    display: "none",
  },
});

export const LoginLink = styled("a")({
  display: "inline-flex",
  alignItems: "center",
  gap: "7px",
});
