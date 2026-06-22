import { useState } from "react";
import * as Tone from "tone";

export const useCameraPage = () => {
    const [isStreamActive, setIsStreamActive] = useState(false);
    const [sessionKey, setSessionKey] = useState(0);
    const [wsAtivo, setWsAtivo] = useState(false);

    async function startSession() {
        await Tone.start();
        setIsStreamActive(true);
        setWsAtivo(true);
        setSessionKey((currentKey) => currentKey + 1);
    }

    function stopSession() {
        setIsStreamActive(false);
        setWsAtivo(false);
    }

    return {
        isStreamActive,
        sessionKey,
        startSession,
        stopSession,
        wsAtivo
    };
}