import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";

export const HeroSection = styled(Box)({
    minHeight: "100vh",
    background: "#0F1427",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "120px",

    padding: "0 80px",
    paddingTop: "70px",

    "@media (max-width: 900px)": {
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        gap: "40px",
    },
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

export const GradientText = styled("span")({
    background: "linear-gradient(90deg, #C06CFF, #8B7CFF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
});

export const HeroDescription = styled(Typography)({
    fontFamily: "Ubuntu, Arial, sans-serif",
    fontWeight: 400,
    color: "#D8D8D8",
    fontSize: "1.2rem",
    lineHeight: 1.7,
    marginBottom: "40px",
    width: "650px",
});

export const ButtonsContainer = styled(Box)({
    display: "flex",
    gap: "20px",


    "@media (max-width: 900px)": {
        justifyContent: "center",
    },
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

export const HeroImage = styled("img")({
    width: "700px",
    maxWidth: "100%",

    "@media (max-width: 900px)": {
        width: "400px",
    },

    position: "relative",
    zIndex: 1,
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