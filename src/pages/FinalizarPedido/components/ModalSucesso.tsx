import * as S from "../FinalizarPedido.styles";

type ModalSucessoProps = {
  onClose: () => void;
};

export function ModalSucesso({ onClose }: ModalSucessoProps) {
  return (
    <S.SuccessOverlay className="success-overlay">
      <S.SuccessModal className="success-modal" role="dialog" aria-modal="true">
        <S.SuccessTitle>Compra realizada com sucesso!</S.SuccessTitle>
        <S.SuccessText>
          Recebemos seu pedido! Você pode acompanhar todas as atualizações na sua
          página de perfil.
        </S.SuccessText>
        <S.SuccessText>Agradecemos pela escolha ♫</S.SuccessText>

        <S.SuccessButton type="button" onClick={onClose}>
          Voltar
        </S.SuccessButton>
      </S.SuccessModal>
    </S.SuccessOverlay>
  );
}

