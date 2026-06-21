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
    | "ButtonPreto"
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
        "&:hover": {
            filter: "brightness(80%)",
        },
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
            transition: " transform 0.3s",
            "&:hover": {
                border: "2px solid #fff",
                background: "rgba(255,255,255,0.06)",
                transform: "scale(1.05)"

            }
        }),


        ...(variante === "ButtonGradiente" && {
            background: "linear-gradient(90deg,#b05cff,#8b5cf6)",
            color: "white",
            transition: " transform 0.3s",

            "&:hover": {
                background: "linear-gradient(90deg, #9d4cff, #7c3aed)",
                transform: "scale(1.05)"

            },
        }),


        ...(variante === "ButtonPreto" && {
            background: "#111",
            color: "white",
            alignSelf: "flex-start",
            borderRadius: 6,
            transition: " transform 0.3s",


            "&:hover": {
                background: "#333",
                transform: "scale(1.05)"

            },
        }),





        // ...(variante === "ButtonRoxo" && {
        //     background: "linear-gradient(90deg,#C06CFF,#8B5CF6)",
        //     color: "white",
        //     "&:hover": { opacity: 0.5 },
        // }),

    }
})