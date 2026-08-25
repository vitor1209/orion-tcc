import { keyframes } from "@emotion/react";
import type { CSSObject } from "@mui/material/styles";

import estrelas from "../assets/images/estrelass.png";
import { coresOrion } from "./designTokens";

const moverEstrelas = keyframes`
  from {
    background-position: left -80px top -120px;
  }

  to {
    background-position: left 120px top 120px;
  }
`;

const deslizarCamadaEstrelas = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-90px, 70px, 0);
  }
`;

const pulsarEstrelas = keyframes`
  0%, 100% {
    opacity: var(--orion-star-opacity-min, 0.16);
  }

  50% {
    opacity: var(--orion-star-opacity-max, 0.3);
  }
`;

type CeuEstreladoOptions = {
  corFundo?: string;
  tamanho?: string;
  opacidadeMinima?: number;
  opacidadeMaxima?: number;
  incluiMobile?: boolean;
};

export const criarCeuEstrelado = ({
  corFundo = coresOrion.fundoCeu,
  tamanho = "560px auto",
  opacidadeMinima = 0.16,
  opacidadeMaxima = 0.3,
  incluiMobile = true,
}: CeuEstreladoOptions = {}): CSSObject => ({
  "--orion-star-opacity-min": opacidadeMinima,
  "--orion-star-opacity-max": opacidadeMaxima,
  backgroundColor: corFundo,
  backgroundImage: `url(${estrelas})`,
  backgroundRepeat: "repeat",
  backgroundSize: tamanho,
  backgroundPosition: "left -80px top -120px",
  animation: `${moverEstrelas} 95s linear infinite`,

  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-20%",
    backgroundImage: `
      radial-gradient(circle, rgba(255, 255, 255, 0.9) 0 1px, transparent 1.8px),
      radial-gradient(circle, rgba(190, 207, 255, 0.78) 0 1px, transparent 1.6px)
    `,
    backgroundSize: "320px 320px, 480px 480px",
    backgroundPosition: "20px 40px, 150px 180px",
    opacity: opacidadeMinima,
    pointerEvents: "none",
    animation: `${deslizarCamadaEstrelas} 70s linear infinite, ${pulsarEstrelas} 7s ease-in-out infinite`,
  },

  ...(incluiMobile && {
    "@media (max-width: 600px)": {
      backgroundSize: "940px auto",
      backgroundPosition: "left -240px top -120px",
    },
  }),

  "@media (prefers-reduced-motion: reduce)": {
    animation: "none",

    "&::before": {
      animation: "none",
    },
  },
});

