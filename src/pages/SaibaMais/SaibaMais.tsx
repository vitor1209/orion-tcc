import { useEffect, useRef } from "react";
import { ShoppingBag } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Button } from "../../components/Button/Button";
import { Footer } from "../../components/Footer/Footer";
import { MenuNavegacao } from "../../components/Navbar/Navbar";
import notas from "../../assets/images/notas.png";
import neuronio from "../../assets/images/neuronio.png";
import nuvem from "../../assets/images/nuvem.png";
import * as S from "./SaibaMais.styles";

gsap.registerPlugin(ScrollTrigger);

const pilares = [
  {
    title: "Aprendizado acessível",
    description:
      "A Orion aproxima a educação musical de quem quer aprender no próprio ritmo, com trilhas guiadas e uma experiência mais intuitiva.",
    image: notas,
    imageAlt: "Notas musicais",
  },
  {
    title: "Cognição em movimento",
    description:
      "A prática musical estimula atenção, memória e raciocínio, criando uma ponte entre corpo, mente e aprendizado.",
    image: neuronio,
    imageAlt: "Representação de neurônio",
  },
  {
    title: "Desenvolvimento motor",
    description:
      "Cada exercício ajuda o usuário a perceber melhor os dedos, a coordenação fina e a precisão dos gestos.",
    image: nuvem,
    imageAlt: "Pessoa praticando música",
  },
];

const etapas = [
  "Escolha entre modo guiado ou livre.",
  "Defina se vai tocar com luva ou câmera.",
  "Selecione o instrumento e avance pelas atividades.",
  "Acompanhe sua evolução conforme pratica.",
];

export function SaibaMais() {
  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!pageRef.current) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const context = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".saiba-hero-copy > *", {
          opacity: 0,
          y: 34,
          duration: 0.75,
          stagger: 0.1,
        })
        .from(
          ".saiba-hero-divider",
          {
            opacity: 0,
            scaleX: 0.72,
            duration: 0.55,
          },
          "-=0.2"
        );

      gsap.utils.toArray<HTMLElement>(".saiba-reveal").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 48,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.from(".saiba-pillar-card", {
        opacity: 0,
        y: 42,
        scale: 0.96,
        duration: 0.72,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".saiba-pillars-grid",
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".saiba-step-item", {
        opacity: 0,
        x: 34,
        duration: 0.65,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".saiba-step-list",
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });
    }, pageRef);

    return () => context.revert();
  }, []);

  return (
    <S.Page ref={pageRef}>
      <MenuNavegacao escuroNoTopo />

      <S.Hero>
        <S.HeroCopy className="saiba-hero-copy">
          <S.HeroTitle>Aprender música pode ser mais intuitivo.</S.HeroTitle>

          <S.HeroDescription>
            A ORION combina prática guiada, interação visual e tecnologia para
            tornar o primeiro contato com instrumentos mais simples, progressivo
            e divertido.
          </S.HeroDescription>

          <S.Actions>
            <Button tamanho="lg" variante="Gradiente" to="/SelecaoModo?modo=guiado">
              Começar a praticar
            </Button>
            <Button tamanho="lg" variante="Branco" to="/loja" icon={ShoppingBag}>
              Conhecer a luva
            </Button>
          </S.Actions>
        </S.HeroCopy>

        <S.HeroDivider className="saiba-hero-divider" aria-hidden="true" />
      </S.Hero>

      <S.PillarsSection>
        <S.SectionHeader className="saiba-reveal">
          <S.SectionEyebrow>Nosso propósito</S.SectionEyebrow>
          <S.SectionTitle>Mais do que tocar notas</S.SectionTitle>
          <S.SectionDescription>
            A ORION foi pensada para unir acessibilidade, desenvolvimento
            cognitivo e coordenação motora em uma experiência de aprendizado
            musical mais próxima do usuário.
          </S.SectionDescription>
        </S.SectionHeader>

        <S.PillarsGrid className="saiba-pillars-grid">
          {pilares.map((pilar) => (
            <S.PillarCard className="saiba-pillar-card" key={pilar.title}>
              <S.PillarImageFrame>
                <S.PillarImage src={pilar.image} alt={pilar.imageAlt} />
              </S.PillarImageFrame>
              <S.PillarTitle>{pilar.title}</S.PillarTitle>
              <S.PillarDescription>{pilar.description}</S.PillarDescription>
            </S.PillarCard>
          ))}
        </S.PillarsGrid>
      </S.PillarsSection>

      <S.JourneySection className="saiba-reveal">
        <S.JourneyContent>
          <S.SectionEyebrow>Como a jornada acontece</S.SectionEyebrow>
          <S.SectionTitle>Do primeiro clique à primeira prática</S.SectionTitle>
          <S.SectionDescription>
            O fluxo foi criado para não intimidar quem está começando. O usuário
            escolhe como quer interagir, qual instrumento deseja explorar e segue
            por atividades organizadas.
          </S.SectionDescription>
        </S.JourneyContent>

        <S.StepList className="saiba-step-list">
          {etapas.map((etapa, index) => (
            <S.StepItem className="saiba-step-item" key={etapa}>
              <S.StepNumber>{String(index + 1).padStart(2, "0")}</S.StepNumber>
              <S.StepText>{etapa}</S.StepText>
            </S.StepItem>
          ))}
        </S.StepList>
      </S.JourneySection>

      <S.FinalCta className="saiba-reveal">
        <S.SectionEyebrow>Pronto para experimentar?</S.SectionEyebrow>
        <S.CtaTitle>Comece pela trilha que combina com você.</S.CtaTitle>
        <S.CtaDescription>
          Escolha um modo, teste a experiência e avance no seu ritmo.
        </S.CtaDescription>
        <S.CtaActions>
          <Button tamanho="lg" variante="Gradiente" to="/SelecaoModo?modo=guiado">
            Modo Guiado
          </Button>
          <Button tamanho="lg" variante="Branco" to="/SelecaoModo?modo=livre">
            Modo Livre
          </Button>
        </S.CtaActions>
      </S.FinalCta>

      <Footer />
    </S.Page>
  );
}
