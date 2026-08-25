import { Button } from "../../../components/Button/Button";
import logoO from "../../../assets/images/logo.png";
import { features } from "../Home.utils";
import * as Style from "../Home.styled";

export function PropositoSection() {
  return (
    <Style.SectionProposito id="proposito">
      <Style.HeaderProposito className="home-reveal">
        <Style.TitleProposito>Nosso Propósito</Style.TitleProposito>
        <Style.SubtitleProposito>
          Unir tecnologia e educação para criar experiências de aprendizado
          musical imersivas, divertidas e eficazes para todas as idades.
        </Style.SubtitleProposito>
        <Style.Logo src={logoO} alt="ORION" />
      </Style.HeaderProposito>

      <Style.FeatureList>
        {features.map((feature) => (
          <Style.FeatureItem
            key={feature.id}
            reverse={feature.reverse}
            className="home-feature-item"
            data-reverse={feature.reverse}
          >
            <Style.TextBlock className="home-feature-text">
              <Style.FeatureTitle>{feature.title}</Style.FeatureTitle>
              <Style.FeatureDescription>
                {feature.description}
              </Style.FeatureDescription>
              <Button variante="Preto" tamanho="md" to="/saiba-mais">
                Saiba mais
              </Button>
            </Style.TextBlock>

            <Style.ImageBlock className="home-feature-image">
              <Style.FeatureImage src={feature.image} alt={feature.imageAlt} />
            </Style.ImageBlock>
          </Style.FeatureItem>
        ))}
      </Style.FeatureList>
    </Style.SectionProposito>
  );
}

