import * as S from "./OurPurpose.styles";

import logo from "../../assets/logo.png";
import musicNotes from "../../assets/notas.png";
import neuron from "../../assets/neuronio.png";
import pianist from "../../assets/nuvem.png";

const features = [
  {
    id: 1,
    title: "Aprendizado acessível",
    description:
      "Democratizamos o acesso à educação musical, permitindo que qualquer pessoa explore instrumentos sem barreiras financeiras ou físicas.",
    image: musicNotes,
    imageAlt: "Notas musicais",
    reverse: false,
  },
  {
    id: 2,
    title: "Melhorar a cognição",
    description:
      "A prática musical estimula áreas cerebrais ligadas à memória, atenção e criatividade, promovendo um desenvolvimento cognitivo completo.",
    image: neuron,
    imageAlt: "Neurônio",
    reverse: true,
  },
  {
    id: 3,
    title: "Desenvolvimento motor",
    description:
      "Os movimentos precisos dos dedos fortalecem a coordenação motora fina e a conexão entre mãos e mente.",
    image: pianist,
    imageAlt: "Pianista",
    reverse: false,
  },
];

export function OurPurpose() {
  return (
    <S.Section>
      <S.Header>
        <S.Title>Nosso Propósito</S.Title>
        <S.Subtitle>
          Unir tecnologia e educação para criar experiências de aprendizado
          musical imersivas, divertidas e eficazes para todas as idades.
        </S.Subtitle>
        <S.Logo src={logo} alt="ORION" />
      </S.Header>

      <S.FeatureList>
        {features.map((feature) => (
          <S.FeatureItem key={feature.id} $reverse={feature.reverse}>
            <S.TextBlock>
              <S.FeatureTitle>{feature.title}</S.FeatureTitle>
              <S.FeatureDescription>{feature.description}</S.FeatureDescription>
              <S.LearnMoreButton>Saiba mais</S.LearnMoreButton>
            </S.TextBlock>
            <S.ImageBlock>
              <S.FeatureImage src={feature.image} alt={feature.imageAlt} />
            </S.ImageBlock>
          </S.FeatureItem>
        ))}
      </S.FeatureList>
    </S.Section>
  );
}
