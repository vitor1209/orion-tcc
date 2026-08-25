import type { FormEvent } from "react";
import { useMemo, useState } from "react";

import type { ModoFormulario } from "./Login.types";
import { calcularForcaSenha, validarEmail } from "./Login.utils";

export const useLoginForm = (abaInicial: ModoFormulario) => {
  const [modoFormulario, setModoFormulario] =
    useState<ModoFormulario>(abaInicial);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [tentouEnviar, setTentouEnviar] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [mensagemFeedback, setMensagemFeedback] = useState("");

  const cadastroAtivo = modoFormulario === "cadastro";
  const emailValido = validarEmail(email);
  const senhaValida = cadastroAtivo ? senha.length >= 6 : senha.trim().length > 0;
  const nomeValido = !cadastroAtivo || nome.trim().length >= 3;
  const formularioValido = cadastroAtivo
    ? nomeValido && emailValido && senhaValida
    : emailValido && senhaValida;

  const mostrarErroNome =
    cadastroAtivo && (tentouEnviar || nome.length > 0) && !nomeValido;
  const mostrarErroEmail = (tentouEnviar || email.length > 0) && !emailValido;
  const mostrarErroSenha =
    (tentouEnviar || senha.length > 0) && !senhaValida;

  const forcaSenha = useMemo(() => calcularForcaSenha(senha), [senha]);

  const alterarModoFormulario = (modo: ModoFormulario) => {
    setEnviando(false);
    setModoFormulario(modo);
    setTentouEnviar(false);
    setMensagemFeedback("");
    setMostrarSenha(false);
  };

  const alternarVisibilidadeSenha = () => {
    setMostrarSenha((estadoAtual) => !estadoAtual);
  };

  const enviarFormulario = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTentouEnviar(true);

    if (!formularioValido) {
      setMensagemFeedback("Confira os campos destacados antes de continuar.");
      return;
    }

    setEnviando(true);
    setMensagemFeedback(
      cadastroAtivo ? "Criando sua conta..." : "Entrando na sua conta..."
    );

    window.setTimeout(() => {
      setEnviando(false);
      setMensagemFeedback(
        cadastroAtivo ? "Cadastro em desenvolvimento." : "Login em desenvolvimento."
      );
    }, 900);
  };

  return {
    cadastroAtivo,
    modoFormulario,
    nome,
    email,
    senha,
    mostrarSenha,
    enviando,
    mensagemFeedback,
    formularioValido,
    mostrarErroNome,
    mostrarErroEmail,
    mostrarErroSenha,
    forcaSenha,
    alterarModoFormulario,
    alternarVisibilidadeSenha,
    enviarFormulario,
    setNome,
    setEmail,
    setSenha,
  };
};

