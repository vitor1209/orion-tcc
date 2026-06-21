import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { BackgroundLayer, ButtonsContainer, ButtonsRow, Containerteste, Content, ContentOnda, Descricao, DescricaoOnda, Eyebrow, FeatureDescription, FeatureImage, FeatureItem, FeatureList, FeatureTitle, GradientText, Header, HeaderProposito, HeroContent, HeroDescricao, HeroImage, HeroSection, HeroTitle, ImageBlock, ImageContainer, Logo, LogoImage, Section, Sectiononda, SectionProposito, StepsGrid, Subtitle, SubtitleProposito, TextBlock, Title, TitleOnda, TitleProposito, WaveLayer, WavesWrapper } from "./Home.styled";
import { Button } from "../../components/Button/Button";
import fundoPartitura from "../../assets/images/fundo_partitura.png";
import { CardPassos } from "../../components/CardPassos/CardPassos";
import logo from "../../assets/images/logo-practice.png";
import ondaSonora from "../../assets/videos/onda-sonora.mp4";
// import { useNavigate } from "react-router-dom";

import logoO from "../../assets/images/logo.png";
import musicNotes from "../../assets/images/notas.png";
import neuron from "../../assets/images/neuronio.png";
import pianist from "../../assets/images/nuvem.png";

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
    numero: "4",
    titulo: "Realize as tarefas",
    descricao: "Realize as lições teóricas e práticas",
  },
];


const SoundWaves = () => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: 0.75,
      }}
    >
      <source src={ondaSonora} type="video/mp4" />
    </video>
  );
};
// const navigate = useNavigate();
const features = [
  {
    id: 1,
    title: "Aprendizado acessível",
    description:
      "Democratizamos o acesso à educação musical, permitindo que qualquer pessoa explore instrumentos sem barreiras financeiras ou físicas.",
    image: musicNotes,
    imageAlt: "Notas musicais",
    reverse: false,
  },
  {
    id: 2,
    title: "Melhorar a cognição",
    description:
      "A prática musical estimula áreas cerebrais ligadas à memória, atenção e criatividade, promovendo um desenvolvimento cognitivo completo.",
    image: neuron,
    imageAlt: "Neurônio",
    reverse: true,
  },
  {
    id: 3,
    title: "Desenvolvimento motor",
    description:
      "Os movimentos precisos dos dedos fortalecem a coordenação motora fina e a conexão entre mãos e mente.",
    image: pianist,
    imageAlt: "Pianista",
    reverse: false,
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
          <path fill="#020b2d"
           fillOpacity="1"
            d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,133.3C1120,139,1280,117,1360,106.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
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



      <Sectiononda id="pratique">
        <WavesWrapper>
          <SoundWaves />
        </WavesWrapper>

        <ContentOnda>
          <TitleOnda variant="h2">
            Pratique <GradientText>agora!</GradientText>
          </TitleOnda>

          <DescricaoOnda>
            Escolha seu modo preferido e comece a explorar o
            mundo da música com
          </DescricaoOnda>

          <LogoImage src={logo} alt="Logo Orion" />

          <ButtonsRow>
            <Button variante="ButtonBranco" tamanho="lg" 
            // onClick={() => navigate("/SelecaoInstrumento")}
            >
              Modo Guiado
            </Button>
            <Button variante="ButtonGradiente" tamanho="lg">
              Modo Livre
            </Button>
          </ButtonsRow>
        </ContentOnda>
      </Sectiononda>





    <SectionProposito id="proposito">
      <HeaderProposito>
        <TitleProposito>Nosso Propósito</TitleProposito>
        <SubtitleProposito>
          Unir tecnologia e educação para criar experiências de aprendizado
          musical imersivas, divertidas e eficazes para todas as idades.
        </SubtitleProposito>
        <Logo src={logoO} alt="ORION" />
      </HeaderProposito>

      <FeatureList>
        {features.map((feature) => (
          <FeatureItem key={feature.id} reverse={feature.reverse}>
            <TextBlock>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <Button variante="ButtonPreto" tamanho="md">Saiba mais</Button>
            </TextBlock>
            <ImageBlock>
              <FeatureImage src={feature.image} alt={feature.imageAlt} />
            </ImageBlock>
          </FeatureItem>
        ))}
      </FeatureList>
    </SectionProposito>
      <Footer />
    </>
  );
}