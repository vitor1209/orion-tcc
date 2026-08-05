import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "../../assets/images/logo.png";
import { Footer } from "../../components/Footer/Footer";
import { Button } from "../../components/Button/Button";
import {
  PageWrapper,
  PageInner,
  Topbar,
  BrandBlock,
  LogoImage,
  Tagline,
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
  ContinueButton,
} from "./InstrumentTeclado.styles";
import { instruments, levels } from "./InstrumentTeclado.utils";
import { useState } from "react";

export const InstrumentTeclado = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const modo = params.get("modo") ?? "guiado";
  const interacao = params.get("interacao") ?? "luva";
  const instrumento = params.get("instrumento") ?? "teclado";

  const [level, setLevel] = useState("");

  const queryFluxo = new URLSearchParams({
    modo,
    interacao,
    instrumento,
  });

  const rotaAnterior = `/SelecaoInstrumento?modo=${modo}&interacao=${interacao}`;

  const rotaDestino = (() => {
    return `/selecao-atividade?${queryFluxo.toString()}&nivel=${level}`;
  })();

  return (
    <PageWrapper>
      <PageInner>
        <Topbar>
          <BrandBlock>
            <LogoImage src={logo} alt="Orion" />
            <Tagline>LUVA INTERATIVA MUSICAL</Tagline>
          </BrandBlock>

          <Button variante="Voltar" tamanho="md" onClick={() => navigate(rotaAnterior)}>
            <ArrowLeft size={16} />
            Voltar
          </Button>
        </Topbar>

        <AccentLine>
          <div />
        </AccentLine>

        <Content>
          <WelcomeTitle>Instrumento escolhido!</WelcomeTitle>
          <WelcomeSubtitle>
            {level
              ? `Você escolheu o nível ${level}. Clique em "Começar Jornada" para continuar.`
              : "Escolha o nível que deseja aprender."}
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
              {levels.map(({ value, label }) => (
                <LevelOption key={value}>
                  {level === value && (
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
                    $active={level === value}
                    onClick={() => {
                      setLevel(value);
                    }}
                  >
                    {label}
                  </LevelButton>
                </LevelOption>
              ))}
            </LevelsContainer>
          </LevelSelectorWrapper>
          <ContinueButton
            disabled={!level}
            onClick={() => {
              navigate(rotaDestino);
            }}
          >
            Começar Jornada
          </ContinueButton>
        </Content>
      </PageInner>

      <Footer />
    </PageWrapper>
  );
}
