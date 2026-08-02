import { ArrowLeft, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button/Button";
import * as S from "./Login.styles";

export function Login() {
  const navigate = useNavigate();
  const [modoFormulario, setModoFormulario] = useState<"entrar" | "cadastro">("entrar");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const cadastroAtivo = modoFormulario === "cadastro";
  const formularioPreenchido = cadastroAtivo
    ? nome.trim().length > 0 && email.trim().length > 0 && senha.trim().length > 0
    : email.trim().length > 0 && senha.trim().length > 0;

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
            onClick={() => setModoFormulario("entrar")}
          >
            Entrar
          </S.Aba>
          <S.Aba
            type="button"
            selecionada={cadastroAtivo}
            onClick={() => setModoFormulario("cadastro")}
          >
            Cadastre-se
          </S.Aba>
        </S.Abas>

        <S.Logo src={S.imagemLogo} alt="Orion" />

        {!cadastroAtivo && (
          <S.CabecalhoLogin>
            <S.TituloLogin>Bem-vindo de volta</S.TituloLogin>
            <S.SubtituloLogin>
              Acesse sua conta Orion para continuar sua jornada musical.
            </S.SubtituloLogin>
          </S.CabecalhoLogin>
        )}

        <S.Formulario>
          {cadastroAtivo && (
            <S.GrupoCampo>
              <S.Rotulo htmlFor="nome">Nome</S.Rotulo>
              <S.Campo
                id="nome"
                type="text"
                placeholder="Digite seu nome de usuário"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              />
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
            />
          </S.GrupoCampo>

          <S.GrupoCampo>
            <S.Rotulo htmlFor="senha">
              {cadastroAtivo ? "Digite sua senha" : "Senha"}
            </S.Rotulo>
            <S.CampoSenha>
              <S.Campo
                id="senha"
                type="password"
                placeholder={cadastroAtivo ? "Escolha uma senha de acesso" : "Digite sua senha"}
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
              />
              <S.IconeSenha aria-hidden="true">
                <EyeOff size={16} />
              </S.IconeSenha>
            </S.CampoSenha>
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
              disabled={!formularioPreenchido}
            >
              {cadastroAtivo ? "Cadastrar" : "Entrar"}
            </Button>
          </S.AreaEntrar>
        </S.Formulario>
      </S.CartaoLogin>
    </S.PaginaLogin>
  );
}
