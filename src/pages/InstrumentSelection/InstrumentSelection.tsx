import { ArrowLeft} from "lucide-react";
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
} from "./InstrumentSelection.styles";
import { instruments } from "./InstrumentSelection.utils";
import { useNavigate, useLocation } from "react-router-dom";


export const InstrumentSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const modo = params.get("modo") ?? "guiado";
  const interacao = params.get("interacao") ?? "luva";

  const selecionarInstrumento = (instrumento: string) => {
    const query = new URLSearchParams({
      modo,
      interacao,
      instrumento: instrumento.toLowerCase(),
    });

    navigate(`/Teclado?${query.toString()}`);
  };

  return (
    <PageWrapper>
      <PageInner>
        <Topbar>
          <BrandBlock>
            <LogoImage src={logo} alt="Orion" />
            <Tagline>LUVA INTERATIVA MUSICAL</Tagline>
          </BrandBlock>

          <Button variante="Voltar" tamanho="md" onClick={() => navigate(`/SelecaoModo?modo=${modo}`)}>
            <ArrowLeft size={16} />
            Voltar
          </Button>
        </Topbar>

        <AccentLine>
          <div />
        </AccentLine>

        <Content>
          <WelcomeTitle>Seja bem-vindo!</WelcomeTitle>
          <WelcomeSubtitle>
            Selecione o instrumento que deseja {modo === "livre" ? "praticar" : "aprender"}.
          </WelcomeSubtitle>

          <CardsGrid>
            {instruments.map(({ title, description, image, imageMaxWidth }) => (
              <InstrumentCard key={title} onClick={() => selecionarInstrumento(title)}>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <CardImageWrapper>
                  <CardImage src={image} alt={title} style={{ maxWidth: imageMaxWidth }} />
                </CardImageWrapper>
              </InstrumentCard>
            ))}
          </CardsGrid>
        </Content>
      </PageInner>

      <Footer />
    </PageWrapper>
  );
}
