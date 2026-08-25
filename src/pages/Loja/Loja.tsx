import { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  ShoppingCart,
} from "lucide-react";

import { Footer } from "../../components/Footer/Footer";
import { MenuNavegacao } from "../../components/Navbar/Navbar";
import { beneficios, imagensProduto } from "./Loja.data";
import { useLojaAnimations } from "./useLojaAnimations";
import * as S from "./Loja.styles";

export function Loja() {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const [quantidade, setQuantidade] = useState(1);
  const [imagemAtiva, setImagemAtiva] = useState(0);

  useLojaAnimations(pageRef);

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

            <S.ThumbCarousel
              className="store-gallery"
              aria-label="Galeria de imagens da Luva ORION"
            >
              <S.CarouselButton
                type="button"
                onClick={imagemAnterior}
                aria-label="Imagem anterior"
              >
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

              <S.CarouselButton
                type="button"
                onClick={proximaImagem}
                aria-label="Próxima imagem"
              >
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
                <button
                  type="button"
                  onClick={diminuirQuantidade}
                  aria-label="Diminuir quantidade"
                >
                  <Minus size={16} />
                </button>
                <span>{quantidade}</span>
                <button
                  type="button"
                  onClick={aumentarQuantidade}
                  aria-label="Aumentar quantidade"
                >
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
          <S.BenefitsTitle>
            Uma experiência musical mais inteligente
          </S.BenefitsTitle>
        </S.BenefitsHeader>

        <S.BenefitsGrid className="store-benefits-grid">
          {beneficios.map((beneficio) => (
            <S.BenefitCard className="store-benefit-card" key={beneficio.title}>
              <S.BenefitIcon>{beneficio.icon}</S.BenefitIcon>
              <S.BenefitTitle>{beneficio.title}</S.BenefitTitle>
              <S.BenefitDescription>
                {beneficio.description}
              </S.BenefitDescription>
            </S.BenefitCard>
          ))}
        </S.BenefitsGrid>
      </S.BenefitsSection>

      <Footer />
    </S.Page>
  );
}

