import { ArrowLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Button } from "../../components/Button/Button";
import { AbasLogin } from "./components/AbasLogin";
import { FormularioAutenticacao } from "./components/FormularioAutenticacao";
import { obterAbaInicial } from "./Login.utils";
import { useLoginForm } from "./useLoginForm";
import * as S from "./Login.styles";

export function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const formulario = useLoginForm(obterAbaInicial(searchParams));

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
        <AbasLogin
          cadastroAtivo={formulario.cadastroAtivo}
          onAlterarModo={formulario.alterarModoFormulario}
        />

        <S.Logo src={S.imagemLogo} alt="Orion" />

        <S.ConteudoFormularioAnimado
          key={formulario.modoFormulario}
          cadastroAtivo={formulario.cadastroAtivo}
        >
          <S.CabecalhoLogin>
            <S.TituloLogin>
              {formulario.cadastroAtivo ? "Crie sua conta" : "Bem-vindo de volta"}
            </S.TituloLogin>
            <S.SubtituloLogin>
              {formulario.cadastroAtivo
                ? "Comece sua jornada musical com a Orion em poucos passos."
                : "Continue de onde parou na sua jornada musical."}
            </S.SubtituloLogin>
          </S.CabecalhoLogin>

          <FormularioAutenticacao
            cadastroAtivo={formulario.cadastroAtivo}
            nome={formulario.nome}
            email={formulario.email}
            senha={formulario.senha}
            mostrarSenha={formulario.mostrarSenha}
            enviando={formulario.enviando}
            formularioValido={formulario.formularioValido}
            mostrarErroNome={formulario.mostrarErroNome}
            mostrarErroEmail={formulario.mostrarErroEmail}
            mostrarErroSenha={formulario.mostrarErroSenha}
            mensagemFeedback={formulario.mensagemFeedback}
            forcaSenha={formulario.forcaSenha}
            onNomeChange={formulario.setNome}
            onEmailChange={formulario.setEmail}
            onSenhaChange={formulario.setSenha}
            onAlternarSenha={formulario.alternarVisibilidadeSenha}
            onSubmit={formulario.enviarFormulario}
          />
        </S.ConteudoFormularioAnimado>
      </S.CartaoLogin>
    </S.PaginaLogin>
  );
}

