import { Controller, type Control, type FieldErrors } from "react-hook-form";

import type {
  CampoPedido,
  FinalizarPedidoForm,
} from "../FinalizarPedido.utils";
import { formatarCampo } from "../FinalizarPedido.utils";
import * as S from "../FinalizarPedido.styles";

type CampoControladoProps = {
  control: Control<FinalizarPedidoForm>;
  errors: FieldErrors<FinalizarPedidoForm>;
  field: CampoPedido;
};

export function CampoControlado({
  control,
  errors,
  field,
}: CampoControladoProps) {
  return (
    <Controller
      control={control}
      name={field.name}
      render={({ field: controllerField }) => (
        <S.InputGroup>
          <S.Label>{field.label}</S.Label>
          <S.InputField
            {...controllerField}
            size="small"
            placeholder={field.placeholder}
            error={Boolean(errors[field.name])}
            helperText={errors[field.name]?.message}
            onChange={(event) =>
              controllerField.onChange(
                formatarCampo(field.name, event.target.value)
              )
            }
          />
        </S.InputGroup>
      )}
    />
  );
}

