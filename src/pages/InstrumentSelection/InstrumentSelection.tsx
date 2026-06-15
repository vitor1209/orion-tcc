import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Guitar, Music, Piano } from "lucide-react";
import logo from "../../assets/logo.png";
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
  CardIcon,
  CardTitle,
  CardDescription,
} from "./InstrumentSelection.styles";

const instruments = [
  {
    title: "Teclado",
    description: "instrumento eletrofone",
    Icon: Piano,
  },
  {
    title: "Flauta",
    description: "instrumento de sopro (aerofone)",
    Icon: Music,
  },
  {
    title: "Violão",
    description: "instrumento de percussão",
    Icon: Guitar,
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
            {instruments.map(({ title, description, Icon }) => (
              <InstrumentCard key={title}>
                <CardIcon>
                  <Icon size={32} />
                </CardIcon>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </InstrumentCard>
            ))}
          </CardsGrid>
        </Content>
      </PageInner>

      <Footer />
    </PageWrapper>
  );
}
