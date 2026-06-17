import glove from "../../assets/images/glove.png";

import {
    HeroSection,
    HeroContent,
    HeroTitle,
    GradientText,
    HeroDescription,
    ButtonsContainer,
    OutlineButton,
    PurpleButton,
    HeroImage,
    ImageContainer,
} from "./Hero.styles";

export function Hero() {
    return (
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

                <HeroDescription>
                    Uma luva inteligente que transforma cada toque
                    em aprendizado, conectando tecnologia e educação
                    musical de forma interativa.
                </HeroDescription>

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
                    src={glove}
                    alt="Luva Orion"
                />
            </ImageContainer>
        </HeroSection>
    );
}