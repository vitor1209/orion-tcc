import { ButtonBase, styled } from "@mui/material"

export const ButtonVariants = styled(ButtonBase, {
    shouldForwardProp: (prop) => prop !== "tamanho" && prop !== "espacamento" && prop !== "variante",
})<{
    tamanho: "sm" | "md" | "lg" | "xl",
    espacamento: number,
    variante:
    | "ButtonBranco"
    | "ButtonRoxo"
    | "ButtonGradiente"
}>(({ tamanho, espacamento, variante }) => {
    const sizeMap = {
        sm: { height: 30, fontSize: 14 },
        md: { height: 37, fontSize: 17 },
        lg: { height: 48, fontSize: 22 },
        xl: { height: 51, fontSize: 24.2 },
    }

    const { height, fontSize } = sizeMap[tamanho] || sizeMap["md"]

    return {
        width: "auto",
        minHeight: height,
        paddingInline: espacamento,
        fontSize,
        fontFamily: '"Ubuntu", "Inter", sans-serif',
        overflow: "hidden",
        borderRadius: "999px",
        fontWeight: 500,
        alignItems: "center",
        gap: 10,
        transition: "opacity 0.5s",
        textDecoration: "none",
        color: "inherit",
        padding: "12px 28px",
        "&:hover": { filter: "brightness(80%)" },
        "&:disabled, &.disabled": {
            opacity: 0.8,
            background: "grey !important",
            color: "white !important",
            cursor: "not-allowed",
            pointerEvents: "none",
        },


        
        ...(variante === "ButtonBranco" && {
            color: "white",
            border: "solid 2px white",
            transition: " 0.5s",
        }),


        ...(variante === "ButtonGradiente" && {
            background: "linear-gradient(90deg,#b05cff,#8b5cf6)",
            color: "white",
            "&:hover": { opacity: 0.5 },
        }),
        ...(variante === "ButtonRoxo" && {
    background: "linear-gradient(90deg,#C06CFF,#8B5CF6)",
            color: "white",
            "&:hover": { opacity: 0.5 },
        }),

    }
})