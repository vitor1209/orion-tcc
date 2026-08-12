import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Radio, Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Minus, Plus } from "lucide-react";
import gsap from "gsap";
import { z } from "zod";

import { Footer } from "../../components/Footer/Footer";
import { MenuNavegacao } from "../../components/Navbar/Navbar";
import luva from "../../assets/images/luva.png";
import pixIcon from "../../assets/images/pix icon.png";
import * as S from "./FinalizarPedido.styles";

const deixarApenasNumeros = (value: string) => value.replace(/\D/g, "");

const cpfValido = (value: string) => {
  const cpf = deixarApenasNumeros(value);

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  const calcularDigito = (slice: string, fatorInicial: number) => {
    const total = slice
      .split("")
      .reduce(
        (acc, digit, index) => acc + Number(digit) * (fatorInicial - index),
        0
      );
    const resto = (total * 10) % 11;

    return resto === 10 ? 0 : resto;
  };

  const primeiroDigito = calcularDigito(cpf.slice(0, 9), 10);
  const segundoDigito = calcularDigito(cpf.slice(0, 10), 11);

  return primeiroDigito === Number(cpf[9]) && segundoDigito === Number(cpf[10]);
};

const finalizarPedidoSchema = z.object({
  nomeCompleto: z
    .string()
    .min(3, "Informe seu nome completo")
    .refine((value) => value.trim().split(/\s+/).length >= 2, {
      message: "Digite nome e sobrenome",
    }),
  cpf: z
    .string()
    .regex(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/, "Informe um CPF válido")
    .refine((value) => cpfValido(value), "Informe um CPF válido"),
  cep: z.string().regex(/^\d{5}-?\d{3}$/, "Informe um CEP válido"),
  endereco: z.string().min(3, "Informe o endereço"),
  numero: z.string().min(1, "Informe o número"),
  bairro: z.string().min(2, "Informe o bairro"),
  cidade: z.string().min(2, "Informe a cidade"),
  estado: z
    .string()
    .length(2, "Use a sigla do estado")
    .transform((value) => value.toUpperCase()),
  metodoPagamento: z.literal("pix", {
    message: "Selecione um método de pagamento",
  }),
});

type FinalizarPedidoForm = z.infer<typeof finalizarPedidoSchema>;

const precoUnitario = 40;
const frete = 2;
const desconto = 0;

const formatarMoeda = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

const camposCadastro = [
  {
    name: "nomeCompleto" as const,
    label: "Nome completo",
    placeholder: "Digite seu nome completo",
  },
  {
    name: "cpf" as const,
    label: "CPF",
    placeholder: "000.000.000-00",
  },
];

const camposEndereco = [
  {
    name: "cep" as const,
    label: "CEP",
    placeholder: "00000-000",
  },
  {
    name: "endereco" as const,
    label: "Endereço",
    placeholder: "Rua, avenida ou travessa",
  },
  {
    name: "numero" as const,
    label: "Número",
    placeholder: "123",
  },
  {
    name: "bairro" as const,
    label: "Bairro",
    placeholder: "Seu bairro",
  },
  {
    name: "cidade" as const,
    label: "Cidade",
    placeholder: "Sua cidade",
  },
  {
    name: "estado" as const,
    label: "Estado",
    placeholder: "SP",
  },
];

const formatarCpf = (value: string) => {
  const digits = deixarApenasNumeros(value).slice(0, 11);

  return digits
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
};

const formatarCep = (value: string) => {
  const digits = deixarApenasNumeros(value).slice(0, 8);

  return digits.replace(/(\d{5})(\d)/, "$1-$2");
};

const formatarCampo = (name: keyof FinalizarPedidoForm, value: string) => {
  if (name === "cpf") {
    return formatarCpf(value);
  }

  if (name === "cep") {
    return formatarCep(value);
  }

  if (name === "estado") {
    return value.replace(/[^a-zA-Z]/g, "").slice(0, 2).toUpperCase();
  }

  return value;
};

export function FinalizarPedido() {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const [searchParams] = useSearchParams();
  const [compraFinalizada, setCompraFinalizada] = useState(false);
  const quantidadeParam = Number(searchParams.get("quantidade"));
  const quantidadeInicial =
    Number.isFinite(quantidadeParam) && quantidadeParam > 0 ? quantidadeParam : 1;
  const [quantidade, setQuantidade] = useState(quantidadeInicial);
  const subtotal = precoUnitario * quantidade;
  const total = subtotal - desconto + frete;
  const resumoPedido = [
    { label: "Subtotal", value: formatarMoeda(subtotal) },
    { label: "Desconto", value: formatarMoeda(desconto) },
    { label: "Frete", value: formatarMoeda(frete) },
  ];
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
                    <Controller
                      key={field.name}
                      control={control}
                      name={field.name}
                      render={({ field: controllerField }) => (
                        <S.InputGroup>
                          <S.Label>{field.label}</S.Label>
                          <S.InputField
                            {...controllerField}
                            size="small"
                            placeholder={field.placeholder}
                            error={Boolean(errors[field.name])}
                            helperText={errors[field.name]?.message}
                            onChange={(event) =>
                              controllerField.onChange(
                                formatarCampo(field.name, event.target.value)
                              )
                            }
                          />
                        </S.InputGroup>
                      )}
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
                    <Controller
                      key={field.name}
                      control={control}
                      name={field.name}
                      render={({ field: controllerField }) => (
                        <S.InputGroup>
                          <S.Label>{field.label}</S.Label>
                          <S.InputField
                            {...controllerField}
                            size="small"
                            placeholder={field.placeholder}
                            error={Boolean(errors[field.name])}
                            helperText={errors[field.name]?.message}
                            onChange={(event) =>
                              controllerField.onChange(
                                formatarCampo(field.name, event.target.value)
                              )
                            }
                          />
                        </S.InputGroup>
                      )}
                    />
                  ))}
                </S.AddressGrid>
              </S.FormCard>

              <S.FormCard className="checkout-card">
                <S.SectionHeader>
                  <S.SectionTitle>Método de pagamento</S.SectionTitle>
                </S.SectionHeader>

                <Controller
                  control={control}
                  name="metodoPagamento"
                  render={({ field }) => (
                    <>
                      <S.PaymentOption
                        role="button"
                        tabIndex={0}
                        onClick={() => field.onChange("pix")}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            field.onChange("pix");
                          }
                        }}
                      >
                        <Radio
                          size="small"
                          checked={field.value === "pix"}
                          onChange={() => field.onChange("pix")}
                        />
                        <S.PixIcon src={pixIcon} alt="Pix" />
                        <Stack spacing={0.2}>
                          <S.PaymentName>PIX</S.PaymentName>
                          <S.PaymentDescription>
                            Aprovação imediata
                          </S.PaymentDescription>
                        </Stack>
                      </S.PaymentOption>

                      {errors.metodoPagamento?.message && (
                        <S.ErrorMessage>
                          {errors.metodoPagamento.message}
                        </S.ErrorMessage>
                      )}
                    </>
                  )}
                />
              </S.FormCard>
            </S.CheckoutColumn>

            <S.SummaryCard className="checkout-summary">
              <S.SummaryTitle>Produtos</S.SummaryTitle>

              <S.ProductRow>
                <S.ProductImageBox>
                  <S.ProductImage src={luva} alt="Luva ORION" />
                </S.ProductImageBox>

                <S.ProductInfo>
                  <S.ProductName>Luva ORION</S.ProductName>
                  <S.RemoveProduct>X Remove</S.RemoveProduct>
                </S.ProductInfo>

                <S.ProductPrice>
                  <span>{formatarMoeda(precoUnitario)}</span>
                  <S.QuantityStepper aria-label="Selecionar quantidade de luvas">
                    <button
                      type="button"
                      onClick={diminuirQuantidade}
                      aria-label="Diminuir quantidade"
                      disabled={quantidade === 1}
                    >
                      <Minus size={14} />
                    </button>
                    <strong>{quantidade}</strong>
                    <button
                      type="button"
                      onClick={aumentarQuantidade}
                      aria-label="Aumentar quantidade"
                    >
                      <Plus size={14} />
                    </button>
                  </S.QuantityStepper>
                </S.ProductPrice>
              </S.ProductRow>

              <S.Divider />

              <S.ValuesList>
                {resumoPedido.map((item) => (
                  <S.ValueRow key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </S.ValueRow>
                ))}
              </S.ValuesList>

              <S.Divider />

              <S.TotalRow>
                <span>Total</span>
                <strong>{formatarMoeda(total)}</strong>
              </S.TotalRow>

              <S.FinishButton
                type="submit"
                disabled={isSubmitting}
                $active={isValid}
              >
                {isSubmitting ? "Finalizando..." : "Finalizar"}
              </S.FinishButton>
            </S.SummaryCard>
          </S.Content>
        </S.Form>
      </S.Main>

      <Footer />

      {compraFinalizada && (
        <S.SuccessOverlay className="success-overlay">
          <S.SuccessModal className="success-modal" role="dialog" aria-modal="true">
            <S.SuccessTitle>Compra realizada com sucesso!</S.SuccessTitle>
            <S.SuccessText>
              Recebemos seu pedido! Você pode acompanhar todas as atualizações
              na sua página de perfil.
            </S.SuccessText>
            <S.SuccessText>Agradecemos pela escolha ♫</S.SuccessText>

            <S.SuccessButton
              type="button"
              onClick={() => setCompraFinalizada(false)}
            >
              Voltar
            </S.SuccessButton>
          </S.SuccessModal>
        </S.SuccessOverlay>
      )}
    </S.Page>
  );
}
