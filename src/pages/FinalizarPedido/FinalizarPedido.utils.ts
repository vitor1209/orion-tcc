import { z } from "zod";

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

export const finalizarPedidoSchema = z.object({
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

export type FinalizarPedidoForm = z.infer<typeof finalizarPedidoSchema>;

export type CampoPedido = {
  name: keyof FinalizarPedidoForm;
  label: string;
  placeholder: string;
};

export const precoUnitario = 40;
export const frete = 2;
export const desconto = 0;

export const camposCadastro: CampoPedido[] = [
  {
    name: "nomeCompleto",
    label: "Nome completo",
    placeholder: "Digite seu nome completo",
  },
  {
    name: "cpf",
    label: "CPF",
    placeholder: "000.000.000-00",
  },
];

export const camposEndereco: CampoPedido[] = [
  {
    name: "cep",
    label: "CEP",
    placeholder: "00000-000",
  },
  {
    name: "endereco",
    label: "Endereço",
    placeholder: "Rua, avenida ou travessa",
  },
  {
    name: "numero",
    label: "Número",
    placeholder: "123",
  },
  {
    name: "bairro",
    label: "Bairro",
    placeholder: "Seu bairro",
  },
  {
    name: "cidade",
    label: "Cidade",
    placeholder: "Sua cidade",
  },
  {
    name: "estado",
    label: "Estado",
    placeholder: "SP",
  },
];

export const formatarMoeda = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

export const formatarCpf = (value: string) => {
  const digits = deixarApenasNumeros(value).slice(0, 11);

  return digits
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
};

export const formatarCep = (value: string) => {
  const digits = deixarApenasNumeros(value).slice(0, 8);

  return digits.replace(/(\d{5})(\d)/, "$1-$2");
};

export const formatarCampo = (name: keyof FinalizarPedidoForm, value: string) => {
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

export const criarResumoPedido = (quantidade: number) => {
  const subtotal = precoUnitario * quantidade;
  const total = subtotal - desconto + frete;

  return {
    total,
    items: [
      { label: "Subtotal", value: formatarMoeda(subtotal) },
      { label: "Desconto", value: formatarMoeda(desconto) },
      { label: "Frete", value: formatarMoeda(frete) },
    ],
  };
};

export const obterQuantidadeInicial = (quantidadeParam: number) =>
  Number.isFinite(quantidadeParam) && quantidadeParam > 0 ? quantidadeParam : 1;

