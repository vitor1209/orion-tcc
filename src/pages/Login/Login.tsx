import { ArrowLeft, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button/Button";
import * as S from "./Login.styles";

export function Login() {
  const navigate = useNavigate();

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
          <S.AbaAtiva type="button">Login</S.AbaAtiva>
          <S.Aba type="button">Cadastre-se</S.Aba>
        </S.Abas>

        <S.Logo src={S.imagemLogo} alt="Orion" />

        <S.Formulario>
          <S.GrupoCampo>
            <S.Rotulo htmlFor="email">Email</S.Rotulo>
            <S.Campo id="email" type="email" placeholder="Entre com seu email" />
          </S.GrupoCampo>

          <S.GrupoCampo>
            <S.Rotulo htmlFor="senha">Senha</S.Rotulo>
            <S.CampoSenha>
              <S.Campo id="senha" type="password" placeholder="Digite sua senha" />
              <S.IconeSenha aria-hidden="true">
                <EyeOff size={16} />
              </S.IconeSenha>
            </S.CampoSenha>
            <S.EsqueceuSenha href="#recuperar-senha">
              Esqueceu sua senha?
            </S.EsqueceuSenha>
          </S.GrupoCampo>

          <S.AreaEntrar>
            <Button variante="Gradiente" tamanho="lg">
              Entrar
            </Button>
          </S.AreaEntrar>
        </S.Formulario>
      </S.CartaoLogin>
    </S.PaginaLogin>
  );
}
