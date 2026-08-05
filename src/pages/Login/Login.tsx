import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Button } from "../../components/Button/Button";
import * as S from "./Login.styles";

export function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const abaInicial = searchParams.get("aba") === "cadastro" ? "cadastro" : "entrar";
  const [modoFormulario, setModoFormulario] = useState<"entrar" | "cadastro">(abaInicial);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [tentouEnviar, setTentouEnviar] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [mensagemFeedback, setMensagemFeedback] = useState("");
  const cadastroAtivo = modoFormulario === "cadastro";
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
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
  const forcaSenha = senha.length >= 10 ? "forte" : senha.length >= 6 ? "media" : "fraca";

  const alterarModoFormulario = (modo: "entrar" | "cadastro") => {
    setEnviando(false);
    setModoFormulario(modo);
    setTentouEnviar(false);
    setMensagemFeedback("");
    setMostrarSenha(false);
  };

  const enviarFormulario = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTentouEnviar(true);

    if (!formularioValido) {
      setMensagemFeedback("Confira os campos destacados antes de continuar.");
      return;
    }

    setEnviando(true);
    setMensagemFeedback(cadastroAtivo ? "Criando sua conta..." : "Entrando na sua conta...");

    window.setTimeout(() => {
      setEnviando(false);
      setMensagemFeedback(
        cadastroAtivo
          ? "Cadastro em desenvolvimento."
          : "Login em desenvolvimento."
      );
    }, 900);
  };

  return (
    <S.PaginaLogin>
      <S.BotaoVoltarWrapper>
        <Button
          variante="Voltar"
          tamanho="md"
          icon={ArrowLeft}
          onClick={() => navigate("/")}
          aria-label="Voltar para a página inicial"
        >
          Voltar
        </Button>
      </S.BotaoVoltarWrapper>

      <S.Constelacao src={S.imagemConstelacao} alt="" aria-hidden="true" />
      <S.Lua src={S.imagemLua} alt="" aria-hidden="true" />

      <S.CartaoLogin>
        <S.Abas>
          <S.Aba
            type="button"
            selecionada={!cadastroAtivo}
            onClick={() => alterarModoFormulario("entrar")}
          >
            Entrar
          </S.Aba>
          <S.Aba
            type="button"
            selecionada={cadastroAtivo}
            onClick={() => alterarModoFormulario("cadastro")}
          >
            Cadastre-se
          </S.Aba>
        </S.Abas>

        <S.Logo src={S.imagemLogo} alt="Orion" />

        <S.ConteudoFormularioAnimado key={modoFormulario} cadastroAtivo={cadastroAtivo}>
          {cadastroAtivo ? (
            <S.CabecalhoLogin>
              <S.TituloLogin>Crie sua conta</S.TituloLogin>
              <S.SubtituloLogin>
                Comece sua jornada musical com a Orion em poucos passos.
              </S.SubtituloLogin>
            </S.CabecalhoLogin>
          ) : (
            <S.CabecalhoLogin>
              <S.TituloLogin>Bem-vindo de volta</S.TituloLogin>
              <S.SubtituloLogin>
                Continue de onde parou na sua jornada musical.
              </S.SubtituloLogin>
            </S.CabecalhoLogin>
          )}

          <S.Formulario onSubmit={enviarFormulario} noValidate>
            {cadastroAtivo && (
              <S.GrupoCampo>
                <S.Rotulo htmlFor="nome">Nome</S.Rotulo>
                <S.Campo
                  id="nome"
                  type="text"
                  placeholder="Digite seu nome de usuário"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                  aria-invalid={mostrarErroNome}
                />
                {mostrarErroNome && (
                  <S.MensagemCampo>Digite pelo menos 3 caracteres.</S.MensagemCampo>
                )}
              </S.GrupoCampo>
            )}

            <S.GrupoCampo>
              <S.Rotulo htmlFor="email">Email</S.Rotulo>
              <S.Campo
                id="email"
                type="email"
                placeholder="Entre com seu email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={mostrarErroEmail}
              />
              {mostrarErroEmail && (
                <S.MensagemCampo>Digite um email válido.</S.MensagemCampo>
              )}
            </S.GrupoCampo>

            <S.GrupoCampo>
              <S.Rotulo htmlFor="senha">
                {cadastroAtivo ? "Digite sua senha" : "Senha"}
              </S.Rotulo>
              <S.CampoSenha>
                <S.Campo
                  id="senha"
                  type={mostrarSenha ? "text" : "password"}
                  placeholder={cadastroAtivo ? "Escolha uma senha de acesso" : "Digite sua senha"}
                  value={senha}
                  onChange={(event) => setSenha(event.target.value)}
                  aria-invalid={mostrarErroSenha}
                />
                <S.IconeSenha
                  type="button"
                  onClick={() => setMostrarSenha((estadoAtual) => !estadoAtual)}
                  aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
                >
                  {mostrarSenha ? <Eye size={17} /> : <EyeOff size={17} />}
                </S.IconeSenha>
              </S.CampoSenha>
              {mostrarErroSenha && (
                <S.MensagemCampo>
                  {cadastroAtivo
                    ? "Use pelo menos 6 caracteres."
                    : "Digite sua senha para continuar."}
                </S.MensagemCampo>
              )}
              {cadastroAtivo && senha.length > 0 && (
                <S.ForcaSenha>
                  <S.BarraForca forca={forcaSenha} />
                  <S.TextoForca>
                    Senha {forcaSenha === "media" ? "média" : forcaSenha}
                  </S.TextoForca>
                </S.ForcaSenha>
              )}
              {!cadastroAtivo && (
                <S.EsqueceuSenha href="#recuperar-senha">
                  Esqueceu sua senha?
                </S.EsqueceuSenha>
              )}
            </S.GrupoCampo>

            <S.AreaEntrar>
              <Button
                variante="Gradiente"
                tamanho="lg"
                disabled={!formularioValido || enviando}
                type="submit"
              >
                {enviando
                  ? cadastroAtivo
                    ? "Cadastrando..."
                    : "Entrando..."
                  : cadastroAtivo
                    ? "Cadastrar"
                    : "Entrar"}
              </Button>
            </S.AreaEntrar>

            {mensagemFeedback && (
              <S.FeedbackFormulario>{mensagemFeedback}</S.FeedbackFormulario>
            )}
          </S.Formulario>
        </S.ConteudoFormularioAnimado>
      </S.CartaoLogin>
    </S.PaginaLogin>
  );
}
