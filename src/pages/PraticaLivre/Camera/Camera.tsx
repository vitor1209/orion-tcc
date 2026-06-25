import { Stack, Typography } from "@mui/material";
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
import { useNavigate } from "react-router-dom";

export const CameraPage = () => {
  const { isStreamActive, sessionKey, startSession, stopSession, wsAtivo } =
    useCameraPage();


  return (
    <Style.PageWrapper>
      {/* <img
        src={notaTop}
        alt=""
        style={{ top: 0, right: 0, width: "220px" }}
      />
      <img
        src={notaBottom}
        alt=""
        style={{ bottom: 0, left: 0, width: "200px" }}
      /> */}

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

  const navigate = useNavigate();

  return (
    <Stack spacing={2}>

      <Style.Topbar>
        <Style.EyebrowLabel>Modo Livre</Style.EyebrowLabel>
        <Button variante="Voltar" tamanho="sm" onClick={() => navigate("/")}>
          <ArrowLeft size={16} />
          Voltar
        </Button>
      </Style.Topbar>
      <Style.PageTitle>
        Faça os gestos da manossolfa para a câmera.
      </Style.PageTitle>


      <Style.PageSubtitle>
        Com base nos ensinamentos da parte teórica, toque com sua luva as notas
        correspondentes dessa partitura
      </Style.PageSubtitle>

      <Stack>
        <Typography variant="overline" color="text.secondary">
          Conexão: {statusConexao}
        </Typography>

        <Typography variant="h6">
          Última nota: {ultimaNota ?? ""}
        </Typography>
      </Stack>

      <Style.CameraBox>
        <Camera
          isStreamActive={isStreamActive}
          onStart={onStart}
          onStop={onStop}
        />
      </Style.CameraBox>

      <Partitura notas={listaNotas} onClear={limparNotas} />
    </Stack>
  );
};