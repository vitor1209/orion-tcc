import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { ButtonsContainer, GradientText, HeroContent, HeroDescricao, HeroImage, HeroSection, HeroTitle, ImageContainer, OutlineButton, PurpleButton } from "./Home.styled";

export function Home() {
  return (
    <>
      <Navbar />
      <HeroSection id="topo">
        <HeroContent>
          <HeroTitle>
            Aprenda
            <br />
            música com as
            <br />
            <GradientText>
              suas próprias mãos
            </GradientText>
          </HeroTitle>

          <HeroDescricao>
            Uma luva inteligente que transforma cada toque
            em aprendizado, conectando tecnologia e educação
            musical de forma interativa.
          </HeroDescricao>

          <ButtonsContainer>
            <OutlineButton variant="outlined">
              Como funciona
            </OutlineButton>

            <PurpleButton variant="contained">
              Começar agora
            </PurpleButton>
          </ButtonsContainer>
        </HeroContent>

        <ImageContainer>
          <HeroImage
            alt="Luva Orion"

          />
        </ImageContainer>
      </HeroSection>

      <Footer />
    </>
  );
}