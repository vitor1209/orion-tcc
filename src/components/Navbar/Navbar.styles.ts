import { styled } from "@mui/material/styles";
import { AppBar, Box } from "@mui/material";

export const NavbarContainer = styled(AppBar)({
  backgroundColor: "#FFFFFF",
  boxShadow: "none",
  position: "fixed",
  top: 0,
});

export const NavbarContent = styled(Box)({
  maxWidth: "1200px",
  width: "100%",
  height: "70px",
  margin: "0 auto",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "0 24px",
});

export const Logo = styled("img")({
  height: "50px",
  objectFit: "contain",
});

export const NavLinks = styled(Box)({
  display: "flex",
  gap: "40px",

  "& a": {
    textDecoration: "none",
    color: "#111",
    fontSize: "1rem",
    fontWeight: 700,
  },

  "@media (max-width: 768px)": {
    display: "none",
  },
});