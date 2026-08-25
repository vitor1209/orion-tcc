import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import gsap from "gsap";

import { Footer } from "../../components/Footer/Footer";
import { MenuNavegacao } from "../../components/Navbar/Navbar";
import { CampoControlado } from "./components/CampoControlado";
import { MetodoPagamento } from "./components/MetodoPagamento";
import { ModalSucesso } from "./components/ModalSucesso";
import { ResumoPedido } from "./components/ResumoPedido";
import {
  camposCadastro,
  camposEndereco,
  criarResumoPedido,
  finalizarPedidoSchema,
  obterQuantidadeInicial,
  type FinalizarPedidoForm,
} from "./FinalizarPedido.utils";
import * as S from "./FinalizarPedido.styles";

export function FinalizarPedido() {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const [searchParams] = useSearchParams();
  const [compraFinalizada, setCompraFinalizada] = useState(false);
  const quantidadeParam = Number(searchParams.get("quantidade"));
  const [quantidade, setQuantidade] = useState(
    obterQuantidadeInicial(quantidadeParam)
  );
  const resumoPedido = useMemo(
    () => criarResumoPedido(quantidade),
    [quantidade]
  );

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FinalizarPedidoForm>({
    resolver: zodResolver(finalizarPedidoSchema),
    mode: "onChange",
    defaultValues: {
      nomeCompleto: "",
      cpf: "",
      cep: "",
      endereco: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
      metodoPagamento: "pix",
    },
  });

  const finalizarPedido = async (data: FinalizarPedidoForm) => {
    console.log("Pedido finalizado:", data);
    await new Promise((resolve) => setTimeout(resolve, 650));
    setCompraFinalizada(true);
  };

  const diminuirQuantidade = () => {
    setQuantidade((valorAtual) => Math.max(1, valorAtual - 1));
  };

  const aumentarQuantidade = () => {
    setQuantidade((valorAtual) => valorAtual + 1);
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
      gsap.from(".checkout-breadcrumb", {
        opacity: 0,
        y: 16,
        duration: 0.55,
        ease: "power3.out",
      });

      gsap.from(".checkout-card", {
        opacity: 0,
        y: 34,
        scale: 0.985,
        duration: 0.72,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.08,
      });

      gsap.from(".checkout-summary", {
        opacity: 0,
        x: 44,
        scale: 0.98,
        duration: 0.85,
        ease: "power3.out",
        delay: 0.18,
      });
    }, pageRef);

    return () => context.revert();
  }, []);

  useEffect(() => {
    if (!compraFinalizada) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [compraFinalizada]);

  useEffect(() => {
    if (!compraFinalizada) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    gsap.fromTo(
      ".success-overlay",
      { opacity: 0 },
      { opacity: 1, duration: 0.25, ease: "power2.out" }
    );

    gsap.fromTo(
      ".success-modal",
      {
        opacity: 0,
        y: 28,
        scale: 0.92,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.48,
        ease: "back.out(1.35)",
      }
    );
  }, [compraFinalizada]);

  return (
    <S.Page ref={pageRef}>
      <MenuNavegacao />

      <S.Main>
        <S.Form onSubmit={handleSubmit(finalizarPedido)}>
          <S.Content>
            <S.CheckoutColumn>
              <S.Breadcrumb className="checkout-breadcrumb">
                Loja &gt; Finalizar Pedido
              </S.Breadcrumb>

              <S.FormCard className="checkout-card">
                <S.SectionHeader>
                  <S.SectionTitle>Finalizar cadastro</S.SectionTitle>
                </S.SectionHeader>

                <S.FieldsGrid columns={2}>
                  {camposCadastro.map((field) => (
                    <CampoControlado
                      key={field.name}
                      control={control}
                      errors={errors}
                      field={field}
                    />
                  ))}
                </S.FieldsGrid>
              </S.FormCard>

              <S.FormCard className="checkout-card">
                <S.SectionHeader>
                  <S.SectionTitle>Endereço de entrega</S.SectionTitle>
                </S.SectionHeader>

                <S.AddressGrid>
                  {camposEndereco.map((field) => (
                    <CampoControlado
                      key={field.name}
                      control={control}
                      errors={errors}
                      field={field}
                    />
                  ))}
                </S.AddressGrid>
              </S.FormCard>

              <S.FormCard className="checkout-card">
                <S.SectionHeader>
                  <S.SectionTitle>Método de pagamento</S.SectionTitle>
                </S.SectionHeader>

                <MetodoPagamento control={control} errors={errors} />
              </S.FormCard>
            </S.CheckoutColumn>

            <ResumoPedido
              quantidade={quantidade}
              resumoPedido={resumoPedido}
              isSubmitting={isSubmitting}
              isValid={isValid}
              onDiminuirQuantidade={diminuirQuantidade}
              onAumentarQuantidade={aumentarQuantidade}
            />
          </S.Content>
        </S.Form>
      </S.Main>

      <Footer />

      {compraFinalizada && (
        <ModalSucesso onClose={() => setCompraFinalizada(false)} />
      )}
    </S.Page>
  );
}

