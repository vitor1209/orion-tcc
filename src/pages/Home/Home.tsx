import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { BackgroundLayer, ButtonsContainer, Containerteste, Eyebrow, GradientText, Header, HeroContent, HeroDescricao, HeroImage, HeroSection, HeroTitle, ImageContainer, Section, StepsGrid, Subtitle, Title, WaveLayer } from "./Home.styled";
import { Button } from "../../components/Button/Button";
import fundoPartitura from "../../assets/images/fundo_partitura.png";
import { CardPassos } from "../../components/CardPassos/CardPassos";

const passos = [
  {
    numero: "1",
    titulo: "Vista a luva",
    descricao: "Coloque a luva na mão e ajuste o velcro para maior conforto",
  },
  {
    numero: "2",
    titulo: "Conecte-se ao sistema",
    descricao: "Sincronize via Bluetooth com o aplicativo em segundos",
  },
  {
    numero: "3",
    titulo: "Escolha o instrumento",
    descricao: "Selecione o instrumento que deseja aprender",
  },
  {
    numero  : "4",
    titulo: "Realize as tarefas",
    descricao: "Realize as lições teóricas e práticas",
  },
];

export const Home = () => {
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
            <Button variante="ButtonBranco" tamanho="lg" >Como funciona</Button>
            <Button variante="ButtonGradiente" tamanho="lg">
              Começar agora
            </Button>
          </ButtonsContainer>
        </HeroContent>

        <ImageContainer>
          <HeroImage
            alt="Luva Orion"

          />
        </ImageContainer>
      </HeroSection>


      <Section id="como-funciona">
        <BackgroundLayer style={{ backgroundImage: `url(${fundoPartitura})` }} />

        <WaveLayer
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          aria-label="Efeito de onda"
        >
          <path fill="#0E1527" fill-opacity="1" d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,133.3C1120,139,1280,117,1360,106.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </WaveLayer>
        <Containerteste>
          <Header>
            <Eyebrow>Como funciona</Eyebrow>
            <Title>Aprenda música passo a passo</Title>
            <Subtitle>
              Uma experiência simples, visual e interativa para você dominar cada
              movimento com confiança.
            </Subtitle>
          </Header>

<StepsGrid>
  {passos.map((passo, index) => (
    <CardPassos
      key={passo.numero}
      numero={passo.numero}
      titulo={passo.titulo}
      descricao={passo.descricao}
      nivel={(index + 1) as 1 | 2 | 3 | 4}
    />
  ))}
</StepsGrid>


        </Containerteste>
      </Section>

      <Footer />
    </>
  );
}