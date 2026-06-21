import type { ButtonProp } from "./Button.types"
import { Link } from "react-router"
import * as Component from "./Button.styled"

export const Button = ({
    variante = "ButtonBranco",
    tamanho,
    loading,
    disabled,
    children,
    espacamento,

    ...props
}: ButtonProp) => {


    return (
        <Component.ButtonVariants
            disabled={disabled || loading}
            LinkComponent={Link}
            variante={variante}
            tamanho={tamanho}
            espacamento={espacamento || 0}
            {...props}
        >
            {<span>{children}</span>}

        </Component.ButtonVariants>
    )
}