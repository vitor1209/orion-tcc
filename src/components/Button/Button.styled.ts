import { ButtonBase, styled } from "@mui/material"

export const ButtonVariants = styled(ButtonBase, {
    shouldForwardProp: (prop) => prop !== "tamanho" && prop !== "espacamento" && prop !== "variante",
})<{
    tamanho: "sm" | "md" | "lg" | "xl",
    espacamento: number,
    variante:
    | "Branco"
    | "Roxo"
    | "Gradiente"
    | "Preto"
    | "Vermelho"
    | "Voltar"
    | "Icone"

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



        ...(variante === "Branco" && {
            color: "white",
            border: "solid 2px white",
            transition: " transform 0.3s",
            "&:hover": {
                border: "2px solid #fff",
                background: "rgba(255,255,255,0.06)",
                transform: "scale(1.05)"

            }
        }),


        ...(variante === "Gradiente" && {
            background: "linear-gradient(90deg,#b05cff,#8b5cf6)",
            color: "white",
            transition: " transform 0.3s",

            "&:hover": {
                background: "linear-gradient(90deg, #9d4cff, #7c3aed)",
                transform: "scale(1.05)"

            },
        }),


        ...(variante === "Preto" && {
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

        ...(variante === "Voltar" && {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 0,
            minHeight: "auto",
            padding: "12px 20px",
            border: "1px solid rgba(95, 74, 248, 0.18)",
            borderRadius: 999,
            backgroundColor: "#ffffff",
            color: "#2d214f",
            fontFamily: '"Inter", Arial, Helvetica, sans-serif',
            fontSize: "0.95rem",
            fontWeight: 700,
            lineHeight: "normal",
            textTransform: "none",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",

            "& > span": {
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
            },

            "&:hover": {
                backgroundColor: "#ffffff",
                filter: "none",
                transform: "translateY(-1px)",
                boxShadow: "0 16px 36px rgba(95, 74, 248, 0.12)",
            },
        }),

        ...(variante === "Icone" && {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
            minWidth: 0,
            width: height,
            height: height,
            borderRadius: "50%",
            background: "linear-gradient(90deg,#b05cff,#8b5cf6)",
            color: "white",
            transition: "transform 0.3s",

            "& > span": {
                display: "none",
            },

            "&:hover": {
                background: "linear-gradient(90deg, #9d4cff, #7c3aed)",
                transform: "scale(1.05)",
                filter: "none",
            },
        }),

        ...(variante === "Vermelho" && {
            background: "linear-gradient(90deg,#EF4444,#DC2626)",
            color: "white",
            "&:hover": { opacity: 0.5 },
        }),

    }
})
