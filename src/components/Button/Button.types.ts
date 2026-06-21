import type { ButtonBaseProps } from "@mui/material"

export interface ButtonProp extends ButtonBaseProps {
    variante?:
        | "ButtonBranco"
        | "ButtonRoxo"
        | "ButtonGradiente"

    tamanho: "sm" | "md" | "lg" | "xl"
    espacamento?: number
    loading?: boolean
    to?: string
    href?: string
    viewTransition?: boolean

}

