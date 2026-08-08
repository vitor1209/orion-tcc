import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { MenuNavegacao } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import * as Style from "./Home.styled";
import { Button } from "../../components/Button/Button";
import fundoPartitura from "../../assets/images/fundo_partitura.png";
import { CardPassos } from "../../components/CardPassos/CardPassos";
import logo from "../../assets/images/logo-practice.png";
import ondaSonora from "../../assets/videos/onda-sonora.mp4";
import logoO from "../../assets/images/logo.png";
import { features, passos } from "./Home.utils";
import luva from "../../assets/images/luva.png";

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const homeRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    if (!homeRef.current) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const context = gsap.context(() => {
      gsap.set(
        [
          ".home-hero-title",
          ".home-hero-description",
          ".home-hero-actions",
          ".home-hero-image",
        ],
        {
          opacity: 0,
          y: 32,
        }
      );

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(".home-hero-title", {
          opacity: 1,
          y: 0,
          duration: 0.9,
        })
        .to(
          ".home-hero-description",
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
          },
          "-=0.45"
        )
        .to(
          ".home-hero-actions",
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
          },
          "-=0.35"
        )
        .to(
          ".home-hero-image",
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.75"
        );

      gsap.to(".home-hero-image", {
        yPercent: 8,
        rotate: 1.5,
        ease: "none",
        scrollTrigger: {
          trigger: ".home-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.1,
        },
      });

      gsap.utils.toArray<HTMLElement>(".home-reveal").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 56,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.from(".home-step-card", {
        opacity: 0,
        y: 42,
        scale: 0.96,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".home-steps-grid",
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".home-practice-content > *", {
        opacity: 0,
        y: 34,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".home-practice-section",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.utils.toArray<HTMLElement>(".home-feature-item").forEach((item) => {
        const reverse = item.dataset.reverse === "true";

        gsap.from(item.querySelector(".home-feature-text"), {
          opacity: 0,
          x: reverse ? 56 : -56,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 76%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.from(item.querySelector(".home-feature-image"), {
          opacity: 0,
          x: reverse ? -56 : 56,
          scale: 0.96,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 76%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, homeRef);

    return () => context.revert();
  }, []);

  return (
    <Style.HomeRoot ref={homeRef}>
      <MenuNavegacao />

      <Style.HeroSection id="topo" className="home-hero">
        <Style.HeroContent>
          <Style.HeroTitle className="home-hero-title">
            Aprenda
            <br />
            música com as
            <br />
            <Style.GradientText>suas próprias mãos</Style.GradientText>
          </Style.HeroTitle>

          <Style.HeroDescricao className="home-hero-description">
            Uma luva inteligente que transforma cada toque em aprendizado,
            conectando tecnologia e educação musical de forma interativa.
          </Style.HeroDescricao>

          <Style.ButtonsContainer className="home-hero-actions">
            <Button
              variante="Branco"
              tamanho="lg"
              onClick={() => scrollToSection("como-funciona")}
            >
              Como funciona
            </Button>
            <Button
              variante="Gradiente"
              tamanho="lg"
              onClick={() => scrollToSection("pratique")}
            >
              Começar agora
            </Button>
          </Style.ButtonsContainer>
        </Style.HeroContent>

        <Style.ImageContainer className="home-hero-image">
          <Style.HeroImage alt="Luva Orion" src={luva} />
        </Style.ImageContainer>
      </Style.HeroSection>

      <Style.Section id="como-funciona">
        <Style.BackgroundLayer
          style={{ backgroundImage: `url(${fundoPartitura})` }}
        />

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
          <Style.Header className="home-reveal">
            <Style.Eyebrow>Como funciona</Style.Eyebrow>
            <Style.Title>Aprenda música passo a passo</Style.Title>
            <Style.Subtitle>
              Uma experiência simples, visual e interativa para você dominar
              cada movimento com confiança.
            </Style.Subtitle>
          </Style.Header>

          <Style.StepsGrid className="home-steps-grid">
            {passos.map((passo, index) => (
              <div className="home-step-card" key={passo.numero}>
                <CardPassos
                  numero={passo.numero}
                  titulo={passo.titulo}
                  descricao={passo.descricao}
                  nivel={(index + 1) as 1 | 2 | 3 | 4}
                />
              </div>
            ))}
          </Style.StepsGrid>
        </Style.Containerteste>
      </Style.Section>

      <Style.Sectiononda id="pratique" className="home-practice-section">
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

        <Style.ContentOnda className="home-practice-content">
          <Style.TitleOnda variant="h2">
            Pratique <Style.GradientText>agora!</Style.GradientText>
          </Style.TitleOnda>

          <Style.DescricaoOnda>
            Escolha seu modo preferido e comece a explorar o mundo da música com
          </Style.DescricaoOnda>

          <Style.LogoImage src={logo} alt="Logo Orion" />

          <Style.ButtonsRow>
            <Button tamanho="lg" to="/SelecaoModo?modo=guiado">
              Modo Guiado
            </Button>
            <Button variante="Gradiente" tamanho="lg" to="/SelecaoModo?modo=livre">
              Modo Livre
            </Button>
          </Style.ButtonsRow>
        </Style.ContentOnda>
      </Style.Sectiononda>

      <Style.SectionProposito id="proposito">
        <Style.HeaderProposito className="home-reveal">
          <Style.TitleProposito>Nosso Propósito</Style.TitleProposito>
          <Style.SubtitleProposito>
            Unir tecnologia e educação para criar experiências de aprendizado
            musical imersivas, divertidas e eficazes para todas as idades.
          </Style.SubtitleProposito>
          <Style.Logo src={logoO} alt="ORION" />
        </Style.HeaderProposito>

        <Style.FeatureList>
          {features.map((feature) => (
            <Style.FeatureItem
              key={feature.id}
              reverse={feature.reverse}
              className="home-feature-item"
              data-reverse={feature.reverse}
            >
              <Style.TextBlock className="home-feature-text">
                <Style.FeatureTitle>{feature.title}</Style.FeatureTitle>
                <Style.FeatureDescription>
                  {feature.description}
                </Style.FeatureDescription>
                <Button variante="Preto" tamanho="md">
                  Saiba mais
                </Button>
              </Style.TextBlock>

              <Style.ImageBlock className="home-feature-image">
                <Style.FeatureImage src={feature.image} alt={feature.imageAlt} />
              </Style.ImageBlock>
            </Style.FeatureItem>
          ))}
        </Style.FeatureList>
      </Style.SectionProposito>

      <Footer />
    </Style.HomeRoot>
  );
};
