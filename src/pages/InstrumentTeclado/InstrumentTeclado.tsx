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
} from "./InstrumentTeclado.styles";
import { instruments } from "./InstrumentTeclado.utils";

export function InstrumentTeclado() {
  const navigate = useNavigate();

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
        </Content>
      </PageInner>

      <Footer />
    </PageWrapper>
  );
}
