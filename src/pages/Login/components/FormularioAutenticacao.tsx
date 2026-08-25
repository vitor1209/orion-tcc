import type { FormEvent } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "../../../components/Button/Button";
import type { ForcaSenha } from "../Login.types";
import { textoForcaSenha } from "../Login.utils";
import * as S from "../Login.styles";

type FormularioAutenticacaoProps = {
  cadastroAtivo: boolean;
  nome: string;
  email: string;
  senha: string;
  mostrarSenha: boolean;
  enviando: boolean;
  formularioValido: boolean;
  mostrarErroNome: boolean;
  mostrarErroEmail: boolean;
  mostrarErroSenha: boolean;
  mensagemFeedback: string;
  forcaSenha: ForcaSenha;
  onNomeChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onSenhaChange: (value: string) => void;
  onAlternarSenha: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function FormularioAutenticacao({
  cadastroAtivo,
  nome,
  email,
  senha,
  mostrarSenha,
  enviando,
  formularioValido,
  mostrarErroNome,
  mostrarErroEmail,
  mostrarErroSenha,
  mensagemFeedback,
  forcaSenha,
  onNomeChange,
  onEmailChange,
  onSenhaChange,
  onAlternarSenha,
  onSubmit,
}: FormularioAutenticacaoProps) {
  return (
    <S.Formulario onSubmit={onSubmit} noValidate>
      {cadastroAtivo && (
        <S.GrupoCampo>
          <S.Rotulo htmlFor="nome">Nome</S.Rotulo>
          <S.Campo
            id="nome"
            type="text"
            placeholder="Digite seu nome de usuário"
            value={nome}
            onChange={(event) => onNomeChange(event.target.value)}
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
          onChange={(event) => onEmailChange(event.target.value)}
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
            placeholder={
              cadastroAtivo ? "Escolha uma senha de acesso" : "Digite sua senha"
            }
            value={senha}
            onChange={(event) => onSenhaChange(event.target.value)}
            aria-invalid={mostrarErroSenha}
          />
          <S.IconeSenha
            type="button"
            onClick={onAlternarSenha}
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
            <S.TextoForca>Senha {textoForcaSenha(forcaSenha)}</S.TextoForca>
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
  );
}

