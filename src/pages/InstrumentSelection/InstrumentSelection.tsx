import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import logo from "../../assets/images/logo.png";
import pianoImage from "../../assets/images/piano.png";
import flautaImage from "../../assets/images/flauta.png";
import violaoImage from "../../assets/images/guitarra.png";
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
} from "./InstrumentSelection.styles";

const instruments = [
  {
    title: "Teclado",
    description: "instrumento eletrofone",
    image: pianoImage,
    imageMaxWidth: "190px",
  },
  {
    title: "Flauta",
    description: "instrumento de sopro (aerofone)",
    image: flautaImage,
    imageMaxWidth: "190px",
  },
  {
    title: "Violão",
    description: "instrumento de percussão",
    image: violaoImage,
    imageMaxWidth: "160px",
  },
];

export function InstrumentSelection() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <PageInner>
        <Topbar>
          <BrandBlock>
            <LogoImage src={logo} alt="Orion" />
            <Tagline>LUVA INTERATIVA MUSICAL</Tagline>
          </BrandBlock>

          <BackButton onClick={() => navigate("/home")}> 
            <ArrowLeft size={16} />
            Voltar
          </BackButton>
        </Topbar>

        <AccentLine>
          <div />
          <ArrowRight size={18} />
        </AccentLine>

        <Content>
          <WelcomeTitle>Seja bem-vindo!</WelcomeTitle>
          <WelcomeSubtitle>
            Selecione o instrumento que deseja aprender.
          </WelcomeSubtitle>

          <CardsGrid>
            {instruments.map(({ title, description, image, imageMaxWidth }) => (
              <InstrumentCard key={title}>
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
