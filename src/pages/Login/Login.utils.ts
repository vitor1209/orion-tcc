import type { ForcaSenha, ModoFormulario } from "./Login.types";

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const obterAbaInicial = (searchParams: URLSearchParams): ModoFormulario =>
  searchParams.get("aba") === "cadastro" ? "cadastro" : "entrar";

export const validarEmail = (email: string) => regexEmail.test(email.trim());

export const calcularForcaSenha = (senha: string): ForcaSenha => {
  if (senha.length >= 10) {
    return "forte";
  }

  if (senha.length >= 6) {
    return "media";
  }

  return "fraca";
};

export const textoForcaSenha = (forca: ForcaSenha) =>
  forca === "media" ? "média" : forca;

