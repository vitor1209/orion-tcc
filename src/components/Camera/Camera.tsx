import { Box, Stack, Typography } from "@mui/material";
import { styles } from "./Camera.styled";
import type { CameraProps } from "./Camera.types";
import { useVideoStream } from "../../hooks/useVideoStream/useVideoStream.hook";
import { Button } from "../Button/Button";
import { Enum } from "../../utils/Enums";

const STATUS_COR: Record<number, string> = {
    [Enum.TipoConexao.ERRO]: "#f44336",
    [Enum.TipoConexao.CONECTANDO]: "#ff9800",
    [Enum.TipoConexao.ABERTO]: "#4caf50",
    [Enum.TipoConexao.FECHANDO]: "#ff9800",
    [Enum.TipoConexao.FECHADO]: "#9e9e9e",
};

export const Camera = ({ isStreamActive, onStart, onStop, ultimaNota, statusConexao: wsStatusConexao }: CameraProps) => {
    const { videoRef, canvasRef, frameProcessado, erro, statusConexao, pararStream } = useVideoStream(isStreamActive);

    function startStream() { onStart(); }
    function stopStream() { pararStream(); onStop(); }

    const corPonto = STATUS_COR[Number(statusConexao)] ?? "#9e9e9e"

    return (
        <Stack sx={styles.container}>
            <video ref={videoRef} style={{ display: "none" }} muted playsInline />
            <canvas ref={canvasRef} style={{ display: "none" }} />


            <Box sx={styles.cameraWrapper}>
                <Box
                    component="img"
                    src={frameProcessado || undefined}
                    alt="Transmissão de vídeo processado pelo backend"
                    sx={{
                        ...styles.video,
                        display: isStreamActive && !erro ? "block" : "none",
                    }}
                />

                {(!isStreamActive || erro) && (
                    <Stack sx={styles.placeholder}>
                        <Typography variant="h6" sx={styles.placeholderTitle}>
                            {erro ? "Stream indisponível" : "vídeo da câmera"}
                        </Typography>
                    </Stack>
                )}

                <Box
                    sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        backgroundColor: corPonto,
                        boxShadow: `0 0 6px ${corPonto}`,
                    }}
                />
            </Box>

            <Stack sx={styles.buttons}>
                <Typography variant="overline" color="text.secondary">
                    Conexão WS: {wsStatusConexao}
                </Typography>

                <Typography variant="h6">
                    Última nota: {ultimaNota ?? ""}
                </Typography>
                <Button variante="Gradiente" tamanho="md" onClick={startStream} disabled={isStreamActive}>
                    Iniciar transmissão
                </Button>
                <Button variante="Gradiente" tamanho="md" color="error" onClick={stopStream} disabled={!isStreamActive}>
                    Parar transmissão
                </Button>
            </Stack>
        </Stack>
    );
};