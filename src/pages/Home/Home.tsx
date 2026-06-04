import glove from "../../assets/glove.png";

import {
  HeroSection,
  Content,
  Title,
  GradientText,
  Description,
  ButtonsContainer,
  SecondaryButton,
  PrimaryButton,
  HeroImage,
} from "./Home.styled";

export function Home() {
  return (
    <>
      <HeroSection>
        <Content>
          <Title>
            Aprenda música com as
            <br />
            <GradientText>
              suas próprias
              <br />
              mãos
            </GradientText>
          </Title>

          <Description>
            Uma luva inteligente que transforma cada toque em
            aprendizado, conectando tecnologia e educação
            musical de forma interativa.
          </Description>

          <ButtonsContainer>
            <SecondaryButton variant="outlined">
              Como funciona
            </SecondaryButton>

            <PrimaryButton variant="contained">
              Começar agora
            </PrimaryButton>
          </ButtonsContainer>
        </Content>

        <HeroImage
          src={glove}
          alt="Luva Inteligente"
        />
      </HeroSection>
    </>
  );
}