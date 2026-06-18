import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import logo from "../../assets/images/logo.png";
import { Footer } from "../../components/Footer/Footer";
import {
  PageWrapper,
  PageInner,
  Topbar,
  BrandBlock,
  LogoImage,
  Tagline,
  BackButton,
  AccentLine,
  Content,
  WelcomeTitle,
  WelcomeSubtitle,
  CardsGrid,
  InstrumentCard,
  CardTitle,
  CardDescription,
  CardImageWrapper,
  CardImage,
  LevelSelectorWrapper,
  LevelLine,
  LevelEndDot,
  LevelsContainer,
  LevelButton,
  LevelOption,
  ActivePill,
} from "./InstrumentTeclado.styles";
import { instruments } from "./InstrumentTeclado.utils";
import { useState } from "react";

export function InstrumentTeclado() {
  const navigate = useNavigate();

  const [level, setLevel] = useState("iniciante");

  const levels = [
    "iniciante",
    "intermediario",
    "avancado",
  ];

  return (
    <PageWrapper>
      <PageInner>
        <Topbar>
          <BrandBlock>
            <LogoImage src={logo} alt="Orion" />
            <Tagline>LUVA INTERATIVA MUSICAL</Tagline>
          </BrandBlock>

          <BackButton onClick={() => navigate("/InstrumentSelection")}>
            <ArrowLeft size={16} />
            Voltar
          </BackButton>
        </Topbar>

        <AccentLine>
          <div />
          <ArrowRight size={18} />
        </AccentLine>

        <Content>
          <WelcomeTitle>Instrumento escolhido!</WelcomeTitle>
          <WelcomeSubtitle>
            Escolha o nível que deseja aprender.
          </WelcomeSubtitle>

          <CardsGrid>
            {instruments.map(({ title, description, image, imageMaxWidth }) => (
              <InstrumentCard key={title} >
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <CardImageWrapper>
                  <CardImage src={image} alt={title} style={{ maxWidth: imageMaxWidth }} />
                </CardImageWrapper>
              </InstrumentCard>
            ))}
          </CardsGrid>

          <LevelSelectorWrapper>
            <LevelLine />
            <LevelEndDot />

            <LevelsContainer>
              {levels.map((item) => (
                <LevelOption key={item}>
                  {level === item && (
                    <ActivePill
                      layoutId="activeLevel"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  <LevelButton
                    $active={level === item}
                    onClick={() => setLevel(item)}
                  >
                    {item === "iniciante" && "Iniciante"}
                    {item === "intermediario" && "Intermediário"}
                    {item === "avancado" && "Avançado"}
                  </LevelButton>
                </LevelOption>
              ))}
            </LevelsContainer>
          </LevelSelectorWrapper>
        </Content>
      </PageInner>

      <Footer />
    </PageWrapper>
  );
}
