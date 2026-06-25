import { Stack } from "@mui/material";
import type { CameraSessaoProps } from "./Camera.types";
import { useCameraPage } from "./Camera.hook";
import { useNotes } from "../../../hooks/useNotes/useNotes.hook";
import { useNotaSound } from "../../../hooks/useNotaSound/useNotaSound.hook";
import { Camera } from "../../../components/Camera/Camera";
import { Partitura } from "../../../components/Partitura/Partitura";
import { Footer } from "../../../components/Footer/Footer";
import * as Style from "./Camera.styled";
import { Button } from "../../../components/Button/Button";
import { ArrowLeft } from "lucide-react";

export const CameraPage = () => {
  const { isStreamActive, sessionKey, startSession, stopSession, wsAtivo } =
    useCameraPage();

  return (
    <Style.PageWrapper>

      <Style.BackButtonWrapper>
        <Button variante="Voltar" tamanho="md" to="/SelecaoModo?modo=livre">
          <ArrowLeft size={16} />
          Voltar
        </Button>
      </Style.BackButtonWrapper>

      <Style.ModalCard>
        <CameraSessao
          key={sessionKey}
          isStreamActive={isStreamActive}
          onStart={startSession}
          onStop={stopSession}
          wsAtivo={wsAtivo}
        />
      </Style.ModalCard>

      <Footer />
    </Style.PageWrapper>
  );
};

const CameraSessao = ({
  isStreamActive,
  onStart,
  onStop,
  wsAtivo,
}: CameraSessaoProps) => {
  const { ultimaNota, listaNotas, limparNotas, statusConexao } =
    useNotes(wsAtivo);
  useNotaSound({ notas: ultimaNota });

  return (
    <Stack spacing={2}>

      <Style.EyebrowLabel>Modo Livre</Style.EyebrowLabel>

      <Style.PageTitle>
        Faça os gestos da manossolfa para a câmera.
      </Style.PageTitle>

      <Style.PageSubtitle>
        Com base nos ensinamentos da parte teórica, toque com sua luva as notas
        correspondentes dessa partitura
      </Style.PageSubtitle>
      <Style.PageSubtitle>
        Conexão WS: {statusConexao}
      </Style.PageSubtitle>

      <Style.CameraBox>
        <Camera
          isStreamActive={isStreamActive}
          onStart={onStart}
          onStop={onStop}
          ultimaNota={ultimaNota}
        />

      </Style.CameraBox>

      <Partitura notas={listaNotas} onClear={limparNotas} />
    </Stack>
  );
};