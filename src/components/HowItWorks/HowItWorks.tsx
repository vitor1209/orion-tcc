import fundoPartitura from "../../assets/fundo_partitura.png";
import {
  Section,
  BackgroundLayer,
  WaveLayer,
  Container,
  Header,
  Eyebrow,
  Title,
  Subtitle,
  StepsGrid,
  StepCard,
  StepNumber,
  StepTitle,
  StepDescription,
} from "./HowItWorks.styles.ts";

const steps = [
  {
    number: "1",
    title: "Vista a luva",
    description: "Coloque a luva na mão e ajuste o velcro para maior conforto",
  },
  {
    number: "2",
    title: "Conecte-se ao sistema",
    description: "Sincronize via Bluetooth com o aplicativo em segundos",
  },
  {
    number: "3",
    title: "Escolha o instrumento",
    description: "Selecione o instrumento que deseja aprender",
  },
  {
    number: "4",
    title: "Realize as tarefas",
    description: "Realize as lições teóricas e práticas",
  },
];

export function HowItWorks() {
  return (
    <Section id="como-funciona">
      <BackgroundLayer style={{ backgroundImage: `url(${fundoPartitura})` }} />

      <WaveLayer
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        aria-label="Efeito de onda"
      >
        <path fill="#0E1527" fill-opacity="1" d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,133.3C1120,139,1280,117,1360,106.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </WaveLayer>
      <Container>
        <Header>
          <Eyebrow>Como funciona</Eyebrow>
          <Title>Aprenda música passo a passo</Title>
          <Subtitle>
            Uma experiência simples, visual e interativa para você dominar cada
            movimento com confiança.
          </Subtitle>
        </Header>


        <StepsGrid>
          {steps.map((step) => (
            <StepCard key={step.number}>
              <StepNumber>{step.number}</StepNumber>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepCard>
          ))}
        </StepsGrid>
      </Container>
    </Section>
  );
}

export default HowItWorks;
