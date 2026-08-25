import { Controller, type Control, type FieldErrors } from "react-hook-form";
import { Radio, Stack } from "@mui/material";

import pixIcon from "../../../assets/images/pix icon.png";
import type { FinalizarPedidoForm } from "../FinalizarPedido.utils";
import * as S from "../FinalizarPedido.styles";

type MetodoPagamentoProps = {
  control: Control<FinalizarPedidoForm>;
  errors: FieldErrors<FinalizarPedidoForm>;
};

export function MetodoPagamento({ control, errors }: MetodoPagamentoProps) {
  return (
    <Controller
      control={control}
      name="metodoPagamento"
      render={({ field }) => (
        <>
          <S.PaymentOption
            role="button"
            tabIndex={0}
            onClick={() => field.onChange("pix")}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                field.onChange("pix");
              }
            }}
          >
            <Radio
              size="small"
              checked={field.value === "pix"}
              onChange={() => field.onChange("pix")}
            />
            <S.PixIcon src={pixIcon} alt="Pix" />
            <Stack spacing={0.2}>
              <S.PaymentName>PIX</S.PaymentName>
              <S.PaymentDescription>Aprovação imediata</S.PaymentDescription>
            </Stack>
          </S.PaymentOption>

          {errors.metodoPagamento?.message && (
            <S.ErrorMessage>{errors.metodoPagamento.message}</S.ErrorMessage>
          )}
        </>
      )}
    />
  );
}

