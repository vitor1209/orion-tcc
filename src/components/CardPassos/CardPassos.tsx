import * as Component from "./CardPassos.styled";
import type { CardPassosProps } from "./CardPassos.types";

export const CardPassos = ({
    numero,
    titulo,
    descricao,
    nivel = 1,
}: CardPassosProps) => {

    const sizes = {
        1: {
            titulo: "1.6rem",
            descricao: "1.2rem",
        },
        2: {
            titulo: "1.5rem",
            descricao: "1.15rem",
        },
        3: {
            titulo: "1.4rem",
            descricao: "1.1rem",
        },
        4: {
            titulo: "1.3rem",
            descricao: "1rem",
        },
    };

    const currentSize = sizes[nivel];
    return (
        <Component.StepCard nivel={nivel}>
            <Component.StepNumber>
                {numero}
            </Component.StepNumber>

            <Component.StepTitle
                sx={{ fontSize: currentSize.titulo }}
            >
                {titulo}
            </Component.StepTitle>

            <Component.StepDescription
                sx={{ fontSize: currentSize.descricao }}
            >
                {descricao}
            </Component.StepDescription>
        </Component.StepCard >
    );
};