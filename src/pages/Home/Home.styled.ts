import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";

export const HeroSection = styled(Box)({
  minHeight: "100vh",
  background: "#020b2d",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 8%",
  overflow: "hidden",

  "@media (max-width: 900px)": {
  flexDirection: "column",
  textAlign: "center",
  paddingTop: "120px",
},
});

export const Content = styled(Box)({
  maxWidth: "600px",
});

export const Title = styled(Typography)({
  fontSize: "4rem",
  fontWeight: 700,
  lineHeight: 1.1,
  color: "#fff",

  "@media (max-width: 768px)": {
  fontSize: "3rem",
},
});

export const GradientText = styled("span")({
  background: "linear-gradient(90deg, #c56fff, #8f7cff)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const Descricao = styled(Typography)({
  color: "#d9d9d9",
  marginTop: "20px",
  fontSize: "1.2rem",
  lineHeight: 1.6,
});

export const ButtonsContainer = styled(Box)({
  display: "flex",
  gap: "16px",
  marginTop: "40px",
});

// export const SecondaryButton = styled(Button)({
//   borderRadius: "999px",
//   padding: "12px 28px",
//   border: "2px solid white",
//   color: "white",
// });

// export const PrimaryButton = styled(Button)({
//   borderRadius: "999px",
//   padding: "12px 28px",
//   background: "linear-gradient(90deg,#b05cff,#8b5cf6)",
//   color: "white",

//   "&:hover": {
//     background: "linear-gradient(90deg,#9d4cff,#7c3aed)",
//   },
// });

export const HeroImage = styled("img")({
  width: "500px",
  maxWidth: "100%",
});


export const HeroContent = styled(Box)({
    maxWidth: "1650px",
});

export const HeroTitle = styled(Typography)({
    fontFamily: "Ubuntu, Arial, sans-serif",
    fontSize: "4rem",
    fontWeight: 600,
    lineHeight: 1.1,
    color: "#fff",
    width: "900px",

    marginBottom: "24px",

    "@media (max-width: 900px)": {
        fontSize: "3rem",
    },
});



export const HeroDescricao = styled(Typography)({
    fontFamily: "Ubuntu, Arial, sans-serif",
    fontWeight: 400,
    color: "#D8D8D8",
    fontSize: "1.2rem",
    lineHeight: 1.7,
    marginBottom: "40px",
    width: "650px",
});



export const OutlineButton = styled(Button)({
    color: "#fff",
    borderColor: "#fff",
    borderRadius: "999px",
    padding: "12px 30px",
    fontFamily: "Ubuntu, Arial, sans-serif",
    fontWeight: 500,
});

export const PurpleButton = styled(Button)({
    borderRadius: "999px",
    padding: "12px 30px",

    background: "linear-gradient(90deg,#C06CFF,#8B5CF6)",
    color: "#fff",
    fontFamily: "Ubuntu, Arial, sans-serif",
    fontWeight: 500,
});


export const ImageContainer = styled(Box)({
    position: "relative",

    "&::before": {
        content: '""',
        position: "absolute",
        width: "400px",
        height: "400px",

        background:
            "radial-gradient(circle, rgba(118,95,255,.35) 0%, rgba(118,95,255,0) 70%)",

        top: "50%",
        left: "50%",
        transform: "translate(-80%, -50%)", 
        // alteracao p nao quebrar a pagina
        zIndex: 0,
    },
});