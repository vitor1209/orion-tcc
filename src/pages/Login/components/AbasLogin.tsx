import type { ModoFormulario } from "../Login.types";
import * as S from "../Login.styles";

type AbasLoginProps = {
  cadastroAtivo: boolean;
  onAlterarModo: (modo: ModoFormulario) => void;
};

export function AbasLogin({ cadastroAtivo, onAlterarModo }: AbasLoginProps) {
  return (
    <S.Abas>
      <S.Aba
        type="button"
        selecionada={!cadastroAtivo}
        onClick={() => onAlterarModo("entrar")}
      >
        Entrar
      </S.Aba>

      <S.Aba
        type="button"
        selecionada={cadastroAtivo}
        onClick={() => onAlterarModo("cadastro")}
      >
        Cadastre-se
      </S.Aba>
    </S.Abas>
  );
}

