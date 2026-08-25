import { Button } from "../../../components/Button/Button";
import luva from "../../../assets/images/luva.png";
import * as Style from "../Home.styled";

type HomeHeroProps = {
  onScrollToSection: (sectionId: string) => void;
};

export function HomeHero({ onScrollToSection }: HomeHeroProps) {
  return (
    <Style.HeroSection id="topo" className="home-hero">
      <Style.HeroContent>
        <Style.HeroTitle className="home-hero-title">
          Aprenda
          <br />
          música com as
          <br />
          <Style.GradientText>suas próprias mãos</Style.GradientText>
        </Style.HeroTitle>

        <Style.HeroDescricao className="home-hero-description">
          Uma luva inteligente que transforma cada toque em aprendizado,
          conectando tecnologia e educação musical de forma interativa.
        </Style.HeroDescricao>

        <Style.ButtonsContainer className="home-hero-actions">
          <Button
            variante="Branco"
            tamanho="lg"
            onClick={() => onScrollToSection("como-funciona")}
          >
            Como funciona
          </Button>
          <Button
            variante="Gradiente"
            tamanho="lg"
            onClick={() => onScrollToSection("pratique")}
          >
            Começar agora
          </Button>
        </Style.ButtonsContainer>
      </Style.HeroContent>

      <Style.ImageContainer className="home-hero-image">
        <Style.HeroImage alt="Luva Orion" src={luva} />
      </Style.ImageContainer>
    </Style.HeroSection>
  );
}

