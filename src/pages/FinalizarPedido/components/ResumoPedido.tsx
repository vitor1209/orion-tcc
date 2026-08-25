import { Minus, Plus } from "lucide-react";

import luva from "../../../assets/images/luva.png";
import {
  formatarMoeda,
  precoUnitario,
  type criarResumoPedido,
} from "../FinalizarPedido.utils";
import * as S from "../FinalizarPedido.styles";

type ResumoPedidoProps = {
  quantidade: number;
  resumoPedido: ReturnType<typeof criarResumoPedido>;
  isSubmitting: boolean;
  isValid: boolean;
  onDiminuirQuantidade: () => void;
  onAumentarQuantidade: () => void;
};

export function ResumoPedido({
  quantidade,
  resumoPedido,
  isSubmitting,
  isValid,
  onDiminuirQuantidade,
  onAumentarQuantidade,
}: ResumoPedidoProps) {
  return (
    <S.SummaryCard className="checkout-summary">
      <S.SummaryTitle>Produtos</S.SummaryTitle>

      <S.ProductRow>
        <S.ProductImageBox>
          <S.ProductImage src={luva} alt="Luva ORION" />
        </S.ProductImageBox>

        <S.ProductInfo>
          <S.ProductName>Luva ORION</S.ProductName>
          <S.RemoveProduct>X Remove</S.RemoveProduct>
        </S.ProductInfo>

        <S.ProductPrice>
          <span>{formatarMoeda(precoUnitario)}</span>
          <S.QuantityStepper aria-label="Selecionar quantidade de luvas">
            <button
              type="button"
              onClick={onDiminuirQuantidade}
              aria-label="Diminuir quantidade"
              disabled={quantidade === 1}
            >
              <Minus size={14} />
            </button>
            <strong>{quantidade}</strong>
            <button
              type="button"
              onClick={onAumentarQuantidade}
              aria-label="Aumentar quantidade"
            >
              <Plus size={14} />
            </button>
          </S.QuantityStepper>
        </S.ProductPrice>
      </S.ProductRow>

      <S.Divider />

      <S.ValuesList>
        {resumoPedido.items.map((item) => (
          <S.ValueRow key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </S.ValueRow>
        ))}
      </S.ValuesList>

      <S.Divider />

      <S.TotalRow>
        <span>Total</span>
        <strong>{formatarMoeda(resumoPedido.total)}</strong>
      </S.TotalRow>

      <S.FinishButton type="submit" disabled={isSubmitting} $active={isValid}>
        {isSubmitting ? "Finalizando..." : "Finalizar"}
      </S.FinishButton>
    </S.SummaryCard>
  );
}

