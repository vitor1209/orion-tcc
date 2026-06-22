import type { ButtonBaseProps } from "@mui/material"

export interface ButtonProp extends ButtonBaseProps {
    variante?:
        | "Branco"
        | "Roxo"
        | "Gradiente"
        | "Preto"

    tamanho: "sm" | "md" | "lg" | "xl"
    espacamento?: number
    loading?: boolean
    to?: string
    href?: string
    viewTransition?: boolean

}

