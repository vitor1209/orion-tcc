import { Stack, Typography } from "@mui/material";
import type { CameraSessaoProps } from "./Camera.types";
import { useCameraPage } from "./Camera.hook";
import { useNotes } from "../../../hooks/useNotes/useNotes.hook";
import { useNotaSound } from "../../../hooks/useNotaSound/useNotaSound.hook";
import { Camera } from "../../../components/Camera/Camera";
import { Partitura } from "../../../components/Partitura/Partitura";

export const CameraPage = () => {
    const {isStreamActive, sessionKey, startSession, stopSession, wsAtivo} = useCameraPage();

    return (
        <Stack spacing={3} sx={{ px: { xs: 2, md: 4 }, py: 3 }}>
            <CameraSessao
                key={sessionKey}
                isStreamActive={isStreamActive}
                onStart={startSession}
                onStop={stopSession}
                wsAtivo={wsAtivo}
            />
        </Stack>
    );
}

const CameraSessao = ({ isStreamActive, onStart, onStop, wsAtivo }: CameraSessaoProps) => {
    const { ultimaNota, statusConexao, listaNotas, limparNotas } = useNotes(wsAtivo);
    useNotaSound({ notas: ultimaNota });

    return (
        <>
            <Stack>
                <Typography variant="overline" color="text.secondary">
                    Conexão: {statusConexao}
                </Typography>

                <Typography variant="h6">
                    Última nota: {ultimaNota ?? ""}
                </Typography>
            </Stack>

            <Camera
                isStreamActive={isStreamActive}
                onStart={onStart}
                onStop={onStop}
            />
            <Partitura notas={listaNotas} onClear={limparNotas} />
        </>
    );
}
