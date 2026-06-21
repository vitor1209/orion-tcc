/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useRef, useState } from "react";
import { Enum } from "../../utils/Enums";
import { api } from "../../api/Axios";

const wsUrl = (api.defaults.baseURL ?? "http://localhost:8000").replace(/^http/, "ws") + "/video";

const CONFIG = {
    WIDTH: 512,
    HEIGHT: 384,
    JPEG_QUALITY: 0.7,
    MAX_FPS: 20,
};

export const useVideoStream = (ativo: boolean) => {
    const wsRef = useRef<WebSocket | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const animationFrameIdRef = useRef<number | null>(null);
    const lastFrameTimeRef = useRef<number>(0);
    const frameAnteriorRef = useRef<string | null>(null);

    const [statusConexao, setStatusConexao] = useState<Enum.TipoConexao>(Enum.TipoConexao.FECHADO);
    const [frameProcessado, setFrameProcessado] = useState<string | null>(null);
    const [erro, setErro] = useState<boolean>(false);

    const pararStream = () => {
        if (animationFrameIdRef.current !== null) {
            cancelAnimationFrame(animationFrameIdRef.current);
            animationFrameIdRef.current = null;
        }

        wsRef.current?.close();
        wsRef.current = null;

        const stream = videoRef.current?.srcObject as MediaStream | null;
        stream?.getTracks().forEach(track => track.stop());
        if (videoRef.current) videoRef.current.srcObject = null;

        if (frameAnteriorRef.current) {
            URL.revokeObjectURL(frameAnteriorRef.current);
            frameAnteriorRef.current = null;
        }

        setStatusConexao(Enum.TipoConexao.FECHADO);
        setFrameProcessado(null);
    };

    useEffect(() => {
        if (!ativo) {
            pararStream();
            return;
        }

        let ignorar = false;
        const intervalo = 1000 / CONFIG.MAX_FPS;

        const loopEnvio = (timestamp: DOMHighResTimeStamp) => {
            if (ignorar) return;

            const video = videoRef.current;
            const canvas = canvasRef.current;
            const ws = wsRef.current;

            if (!video || !canvas || !ws || ws.readyState !== WebSocket.OPEN) {
                animationFrameIdRef.current = requestAnimationFrame(loopEnvio);
                return;
            }

            if (timestamp - lastFrameTimeRef.current >= intervalo) {
                lastFrameTimeRef.current = timestamp;

                const ctx = canvas.getContext("2d")!;
                canvas.width = CONFIG.WIDTH;
                canvas.height = CONFIG.HEIGHT;
                ctx.drawImage(video, 0, 0, CONFIG.WIDTH, CONFIG.HEIGHT);

                canvas.toBlob((blob) => {
                    if (blob && ws?.readyState === WebSocket.OPEN) {
                        blob.arrayBuffer().then((buffer) => ws.send(buffer));
                    }
                }, "image/jpeg", CONFIG.JPEG_QUALITY);
            }

            animationFrameIdRef.current = requestAnimationFrame(loopEnvio);
        };

        const iniciarStream = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        width: { ideal: CONFIG.WIDTH },
                        height: { ideal: CONFIG.HEIGHT },
                        frameRate: { ideal: CONFIG.MAX_FPS, max: CONFIG.MAX_FPS },
                    }
                });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    await videoRef.current.play();
                }
                setErro(false);
            } catch {
                setErro(true);
            }
        };

        iniciarStream().then(() => {
            const ws = new WebSocket(wsUrl);
            ws.binaryType = "arraybuffer";
            wsRef.current = ws;

            ws.onopen = () => {
                if (!ignorar) setStatusConexao(Enum.TipoConexao.ABERTO);
                animationFrameIdRef.current = requestAnimationFrame(loopEnvio);
            };

            ws.onmessage = (event) => {
                if (ignorar) return;

                if (frameAnteriorRef.current) {
                    URL.revokeObjectURL(frameAnteriorRef.current);
                }

                const blob = new Blob([event.data], { type: "image/jpeg" });
                const url = URL.createObjectURL(blob);
                frameAnteriorRef.current = url;
                setFrameProcessado(url);
            };

            ws.onerror = () => {
                if (!ignorar) setStatusConexao(Enum.TipoConexao.ERRO);
            };

            ws.onclose = () => {
                if (!ignorar) setStatusConexao(Enum.TipoConexao.FECHADO);
            };
        });

        return () => {
            ignorar = true;
            pararStream();
        };
    }, [ativo]);

    return {
        videoRef,
        canvasRef,
        frameProcessado,
        statusConexao: Enum.TipoConexao[statusConexao],
        erro,
        pararStream,
    };
};