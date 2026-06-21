import { useEffect, useRef } from "react";
import * as Tone from "tone";
import { MAPA_AUDIO_NOTAS_PIANO } from "./useNotasSound.utils";
import type { UseNotaSoundProps } from "./useNotasSound.types";

export const useNotaSound = ({ notas }: UseNotaSoundProps) => {
    const samplerRef = useRef<Tone.Sampler | null>(null);

    const tocarPartitura = () => {
        if (!notas) return;
        if (!samplerRef.current?.loaded) return;

        const lista = (Array.isArray(notas) ? notas : [notas])
            .filter(nota => MAPA_AUDIO_NOTAS_PIANO[nota]);


        if (!lista.length) return;

        const duracaoNota = Tone.Time("4n").toSeconds();

        lista.forEach((nota, index) => {
            samplerRef.current!.triggerAttackRelease(
                nota,
                duracaoNota,
                Tone.now() + index * duracaoNota,
            );
        });
    }

    useEffect(() => {
        samplerRef.current = new Tone.Sampler({
            urls: MAPA_AUDIO_NOTAS_PIANO,
            release: 1,
        }).toDestination();

        return () => {
            samplerRef.current?.dispose();
            samplerRef.current = null;
        };
    }, []);

    useEffect(() => {
        if (!notas) return;
        if (!samplerRef.current?.loaded) return;
        if (Array.isArray(notas)) return;

        const ultimaNota = notas;
        if (!MAPA_AUDIO_NOTAS_PIANO[ultimaNota]) return;

        samplerRef.current.triggerAttackRelease(ultimaNota, "4n");
    }, [notas]);

    return { tocarPartitura };
};