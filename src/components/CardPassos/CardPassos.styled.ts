import { Box, Stack, Typography, styled } from "@mui/material";

export const StepNumber = styled(Stack)({
    position: "absolute",
    top: -24,
    left: "50%",
    transform: "translateX(-50%)",

    width: 58,
    height: 50,

    alignItems: "center",
    justifyContent: "center",

    borderRadius: 14,

    background: "linear-gradient(135deg, #c48cff, #7c5cff)",

    color: "#fff",
    fontWeight: 300,
    fontSize: "1.5rem",

    boxShadow: "0 10px 20px rgba(124, 92, 255, 0.35)",
});

export const StepTitle = styled(Typography)({
    fontFamily: "Ubuntu",
    fontWeight: 700,
    color: "#172033",
});

export const StepDescription = styled(Typography)({
    fontFamily: "Ubuntu",
    color: "#5b6782",
    lineHeight: 1.6,
});



export const StepCard = styled(Box, {
    shouldForwardProp: (prop) => prop !== "nivel",
})<{
    nivel: 1 | 2 | 3 | 4;
}>(({ nivel }) => {
    const sizes = {
        1: {
            height: 240,
            titulo: "1.6rem",
            descricao: "2rem",
        },

        2: {
            height: 220,
            titulo: "1.5rem",
            descricao: "1.15rem",
        },

        3: {
            height: 200,
            titulo: "1.4rem",
            descricao: "1.1rem",
        },

        4: {
            height: 180,
            titulo: "1.3rem",
            descricao: "1rem",
        },
    };


    return {
        position: "relative",

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",

        maxWidth: 320,

        minHeight: sizes[nivel].height,

        background:
            "linear-gradient(180deg, #ffffff 0%, #f5f7ff 100%)",

        border: "1px solid #e5e9f5",
        borderRadius: 24,

        padding: 22,
        paddingTop: 60,

        boxShadow:
            "0 14px 28px rgba(15,23,42,.08), 0 2px 6px rgba(124,92,255,.08)",

        transition: "0.25s",

        "&:hover": {
            transform: "translateY(-20px)",
        },

        [`& ${StepTitle}`]: {
            fontSize: sizes[nivel].titulo,
        },

        [`& ${StepDescription}`]: {
            fontSize: sizes[nivel].descricao,
        },

        "@media (max-width: 840px)": {
            minHeight: 180,

            [`& ${StepTitle}`]: {
                fontSize: "1.1rem",
            },

            [`& ${StepDescription}`]: {
                fontSize: ".9rem",
            },
        },
    };
});