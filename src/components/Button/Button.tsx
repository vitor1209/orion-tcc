import type { ButtonProp } from "./Button.types"
import { Link } from "react-router"
import * as Component from "./Button.styled"

export const Button = ({
    variante = "Branco",
    tamanho,
    loading,
    disabled,
    children,
    espacamento,
    to,
    ...props
}: ButtonProp) => {
    const linkProps = {
        LinkComponent: Link,
        viewTransition: true,
        rel: "noreferrer",
        to,
    }

    return (
        <Component.ButtonVariants
            disabled={disabled || loading}
            LinkComponent={Link}
            variante={variante}
            tamanho={tamanho}
            espacamento={espacamento || 0}
            {...props}
            {...(to && linkProps)}
        >
            {<span>{children}</span>}

        </Component.ButtonVariants>
    )
}