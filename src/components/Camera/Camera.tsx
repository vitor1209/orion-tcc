import { Box, Button, Stack, Typography } from "@mui/material";
import { styles } from "./Camera.styled";
import type { CameraProps } from "./Camera.types";
import { useVideoStream } from "../../hooks/useVideoStream/useVideoStream.hook";

export const Camera = ({ isStreamActive, onStart, onStop }: CameraProps) => {
    const { videoRef, canvasRef, frameProcessado, erro,statusConexao , pararStream } = useVideoStream(isStreamActive);

    function startStream() {
        onStart();
    }

    function stopStream() {
        pararStream();
        onStop();
    }

    return (
        <Stack sx={styles.container}>
            <video ref={videoRef} style={{ display: "none" }} muted playsInline />
            <canvas ref={canvasRef} style={{ display: "none" }} />

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
                        {erro ? "Stream indisponível" : "Transmissão pausada"}
                    </Typography>
                </Stack>
            )}

            <Stack sx={styles.buttons}>
                <Typography variant="overline" color="text.secondary">
                    Conexão camera: {statusConexao}
                </Typography>
                <Button variant="contained" onClick={startStream} disabled={isStreamActive}>
                    Iniciar transmissão
                </Button>
                <Button variant="outlined" color="error" onClick={stopStream} disabled={!isStreamActive}>
                    Parar transmissão
                </Button>
            </Stack>
        </Stack>
    );
};