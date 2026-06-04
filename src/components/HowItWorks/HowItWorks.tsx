import {
  Section,
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
    <Section>
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
