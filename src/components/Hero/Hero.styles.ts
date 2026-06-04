import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";

export const HeroSection = styled(Box)({
    minHeight: "100vh",
    background: "#020b2d",

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
    fontSize: "4.5rem",
    fontWeight: 700,
    lineHeight: 1.1,
    color: "#fff",

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
    color: "#D8D8D8",
    fontSize: "1.3rem",
    lineHeight: 1.7,
    marginBottom: "40px",
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
});

export const PurpleButton = styled(Button)({
    borderRadius: "999px",
    padding: "12px 30px",

    background: "linear-gradient(90deg,#C06CFF,#8B5CF6)",
    color: "#fff",
});

export const HeroImage = styled("img")({
    width: "600px",
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
        width: "450px",
        height: "450px",

        background:
            "radial-gradient(circle, rgba(118,95,255,.35) 0%, rgba(118,95,255,0) 70%)",

        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 0,
    },
});