import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import * as Style from "./Home.styled";
import { Button } from "../../components/Button/Button";
import fundoPartitura from "../../assets/images/fundo_partitura.png";
import { CardPassos } from "../../components/CardPassos/CardPassos";
import logo from "../../assets/images/logo-practice.png";
import ondaSonora from "../../assets/videos/onda-sonora.mp4";
import logoO from "../../assets/images/logo.png";
import { features, passos } from "./Home.utils";

export const Home = () => {
  return (
    <>
      <Navbar />

      <Style.HeroSection id="topo">

        <Style.HeroContent>

          <Style.HeroTitle>
            Aprenda
            <br />
            música com as
            <br />
            <Style.GradientText>
              suas próprias mãos
            </Style.GradientText>
          </Style.HeroTitle>

          <Style.HeroDescricao>
            Uma luva inteligente que transforma cada toque
            em aprendizado, conectando tecnologia e educação
            musical de forma interativa.
          </Style.HeroDescricao>

          <Style.ButtonsContainer>
            <Button variante="Branco" tamanho="lg">Como funciona</Button>
            <Button variante="Gradiente" tamanho="lg">
              Começar agora
            </Button>
          </Style.ButtonsContainer>

        </Style.HeroContent>

        <Style.ImageContainer>
          <Style.HeroImage alt="Luva Orion" />
        </Style.ImageContainer>

      </Style.HeroSection>


      <Style.Section id="como-funciona">
        <Style.BackgroundLayer style={{ backgroundImage: `url(${fundoPartitura})` }} />

        <Style.WaveLayer
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          aria-label="Efeito de onda"
        >
          <path
            fill="#020b2d"
            fillOpacity="1"
            d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,133.3C1120,139,1280,117,1360,106.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </Style.WaveLayer>

        <Style.Containerteste>
          <Style.Header>
            <Style.Eyebrow>Como funciona</Style.Eyebrow>
            <Style.Title>Aprenda música passo a passo</Style.Title>
            <Style.Subtitle>
              Uma experiência simples, visual e interativa para você dominar cada
              movimento com confiança.
            </Style.Subtitle>
          </Style.Header>

          <Style.StepsGrid>
            {passos.map((passo, index) => (
              <CardPassos
                key={passo.numero}
                numero={passo.numero}
                titulo={passo.titulo}
                descricao={passo.descricao}
                nivel={(index + 1) as 1 | 2 | 3 | 4}
              />
            ))}
          </Style.StepsGrid>
        </Style.Containerteste>
      </Style.Section>


      <Style.Sectiononda id="pratique">
        <Style.WavesWrapper>
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
        </Style.WavesWrapper>

        <Style.ContentOnda>
          <Style.TitleOnda variant="h2">
            Pratique <Style.GradientText>agora!</Style.GradientText>
          </Style.TitleOnda>

          <Style.DescricaoOnda>
            Escolha seu modo preferido e comece a explorar o
            mundo da música com
          </Style.DescricaoOnda>

          <Style.LogoImage src={logo} alt="Logo Orion" />

          <Style.ButtonsRow>
            <Button
              tamanho="lg"
              to="/SelecaoInstrumento?modo=guiado"
            >
              Modo Guiado
            </Button>
            <Button
              variante="Gradiente"
              tamanho="lg"
              to="/SelecaoInstrumento?modo=livre"
            >
              Modo Livre
            </Button>
          </Style.ButtonsRow>
        </Style.ContentOnda>
      </Style.Sectiononda>


      <Style.SectionProposito id="proposito">
        <Style.HeaderProposito>
          <Style.TitleProposito>Nosso Propósito</Style.TitleProposito>
          <Style.SubtitleProposito>
            Unir tecnologia e educação para criar experiências de aprendizado
            musical imersivas, divertidas e eficazes para todas as idades.
          </Style.SubtitleProposito>
          <Style.Logo src={logoO} alt="ORION" />
        </Style.HeaderProposito>

        <Style.FeatureList>

          {features.map((feature) => (
            <Style.FeatureItem key={feature.id} reverse={feature.reverse}>

              <Style.TextBlock>
                <Style.FeatureTitle>{feature.title}</Style.FeatureTitle>
                <Style.FeatureDescription>{feature.description}</Style.FeatureDescription>
                <Button variante="Preto" tamanho="md">Saiba mais</Button>
              </Style.TextBlock>

              <Style.ImageBlock>
                <Style.FeatureImage src={feature.image} alt={feature.imageAlt} />
              </Style.ImageBlock>

            </Style.FeatureItem>
          ))}

        </Style.FeatureList>
      </Style.SectionProposito>

      <Footer />
    </>
  );
};