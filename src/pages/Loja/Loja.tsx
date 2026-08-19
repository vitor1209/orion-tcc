import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Zap,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Footer } from "../../components/Footer/Footer";
import { MenuNavegacao } from "../../components/Navbar/Navbar";
import luva from "../../assets/images/luva.png";
import * as S from "./Loja.styles";

gsap.registerPlugin(ScrollTrigger);

const imagensProduto = [luva, luva, luva];

const beneficios = [
  {
    icon: <Sparkles size={26} />,
    title: "Aprendizado interativo",
    description:
      "Transforme gestos em respostas visuais e avance nas atividades de forma mais envolvente.",
  },
  {
    icon: <Zap size={26} />,
    title: "Pronta para praticar",
    description:
      "Use a luva nas trilhas guiadas da Orion e acompanhe seu progresso com mais clareza.",
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "Compra segura",
    description:
      "Finalize o pedido em poucos passos, com pagamento via PIX e acompanhamento pelo perfil.",
  },
];

export function Loja() {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const [quantidade, setQuantidade] = useState(1);
  const [imagemAtiva, setImagemAtiva] = useState(0);

  const diminuirQuantidade = () => {
    setQuantidade((valorAtual) => Math.max(1, valorAtual - 1));
  };

  const aumentarQuantidade = () => {
    setQuantidade((valorAtual) => valorAtual + 1);
  };

  const imagemAnterior = () => {
    setImagemAtiva((indiceAtual) =>
      indiceAtual === 0 ? imagensProduto.length - 1 : indiceAtual - 1
    );
  };

  const proximaImagem = () => {
    setImagemAtiva((indiceAtual) =>
      indiceAtual === imagensProduto.length - 1 ? 0 : indiceAtual + 1
    );
  };

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
      const introTimeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      introTimeline
        .from(".store-orbit", {
          opacity: 0,
          scale: 0.72,
          rotate: -28,
          duration: 0.9,
        })
        .from(
          ".store-product-image",
          {
            opacity: 0,
            y: 42,
            scale: 0.9,
            duration: 0.85,
          },
          "-=0.58"
        )
        .from(
          ".store-gallery",
          {
            opacity: 0,
            y: 28,
            scale: 0.96,
            duration: 0.58,
          },
          "-=0.34"
        )
        .from(
          ".store-info > *",
          {
            opacity: 0,
            x: 34,
            duration: 0.58,
            stagger: 0.08,
          },
          "-=0.62"
        );

      gsap.to(".store-product-image", {
        y: -12,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.from(".store-benefits-header > *", {
        scrollTrigger: {
          trigger: ".store-benefits-header",
          start: "top 82%",
        },
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".store-benefit-card", {
        scrollTrigger: {
          trigger: ".store-benefits-grid",
          start: "top 82%",
        },
        opacity: 0,
        y: 34,
        scale: 0.96,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, pageRef);

    return () => context.revert();
  }, []);

  return (
    <S.Page ref={pageRef}>
      <MenuNavegacao escuroNoTopo />

      <S.HeroLoja>
        <S.Content>
          <S.ProductGallery>
            <S.ImageOrbit className="store-orbit" aria-hidden="true" />
            <S.MainProductImage
              className="store-product-image"
              key={imagemAtiva}
              src={imagensProduto[imagemAtiva]}
              alt="Luva ORION"
            />

            <S.ThumbCarousel className="store-gallery" aria-label="Galeria de imagens da Luva ORION">
              <S.CarouselButton type="button" onClick={imagemAnterior} aria-label="Imagem anterior">
                <ChevronLeft size={20} />
              </S.CarouselButton>

              {imagensProduto.map((image, index) => (
                <S.ThumbButton
                  key={index}
                  type="button"
                  aria-label={`Imagem ${index + 1}`}
                  aria-pressed={imagemAtiva === index}
                  $active={imagemAtiva === index}
                  onClick={() => setImagemAtiva(index)}
                >
                  <img src={image} alt="" />
                </S.ThumbButton>
              ))}

              <S.CarouselButton type="button" onClick={proximaImagem} aria-label="Próxima imagem">
                <ChevronRight size={20} />
              </S.CarouselButton>
            </S.ThumbCarousel>
          </S.ProductGallery>

          <S.ProductInfo className="store-info">
            <S.Title>Luva ORION</S.Title>

            <S.Description>
              A Luva ORION é uma luva tecnológica inteligente que se conecta à
              plataforma ORION para proporcionar uma experiência inovadora de
              aprendizagem musical. Com ela, você pode realizar atividades
              interativas, acompanhar sua evolução e desenvolver habilidades como
              coordenação motora, percepção musical e raciocínio de forma
              prática, acessível e envolvente.
            </S.Description>

            <S.MaterialsLabel>Materiais</S.MaterialsLabel>
            <S.MaterialsList aria-label="Materiais disponíveis">
              <S.MaterialCircle />
              <S.MaterialCircle />
              <S.MaterialCircle />
            </S.MaterialsList>

            <S.Price>
              <strong>R$</strong>
              <span>109,90</span>
            </S.Price>

            <S.Actions>
              <S.QuantityControl aria-label="Selecionar quantidade">
                <button type="button" onClick={diminuirQuantidade} aria-label="Diminuir quantidade">
                  <Minus size={16} />
                </button>
                <span>{quantidade}</span>
                <button type="button" onClick={aumentarQuantidade} aria-label="Aumentar quantidade">
                  <Plus size={16} />
                </button>
              </S.QuantityControl>

              <S.BuyButton to={`/finalizar-pedido?quantidade=${quantidade}`}>
                Comprar
                <ShoppingCart size={18} />
              </S.BuyButton>
            </S.Actions>

            <S.TrustText>
              Pagamento seguro via PIX • Entrega estimada em até 7 dias úteis
            </S.TrustText>
          </S.ProductInfo>
        </S.Content>
      </S.HeroLoja>

      <S.BenefitsSection>
        <S.BenefitsHeader className="store-benefits-header">
          <S.BenefitsEyebrow>Por que escolher a ORION?</S.BenefitsEyebrow>
          <S.BenefitsTitle>Uma experiência musical mais inteligente</S.BenefitsTitle>
        </S.BenefitsHeader>

        <S.BenefitsGrid className="store-benefits-grid">
          {beneficios.map((beneficio) => (
            <S.BenefitCard className="store-benefit-card" key={beneficio.title}>
              <S.BenefitIcon>{beneficio.icon}</S.BenefitIcon>
              <S.BenefitTitle>{beneficio.title}</S.BenefitTitle>
              <S.BenefitDescription>{beneficio.description}</S.BenefitDescription>
            </S.BenefitCard>
          ))}
        </S.BenefitsGrid>
      </S.BenefitsSection>

      <Footer />
    </S.Page>
  );
}
