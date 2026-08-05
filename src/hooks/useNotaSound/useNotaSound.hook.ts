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

        const notaKey = notas as keyof typeof MAPA_AUDIO_NOTAS_PIANO;
        if (!MAPA_AUDIO_NOTAS_PIANO[notaKey]) return;

        samplerRef.current.triggerAttackRelease(notaKey as string, "4n");
    }, [notas]);

    const play = async (notaOuNotas: UseNotaSoundProps['notas']) => {
        if (!notaOuNotas) return;
        try {
            await Tone.start();
        } catch {
        }
        if (!samplerRef.current?.loaded) return;

        const lista = (Array.isArray(notaOuNotas) ? notaOuNotas : [notaOuNotas])
            .filter(n => MAPA_AUDIO_NOTAS_PIANO[n as keyof typeof MAPA_AUDIO_NOTAS_PIANO]);

        if (!lista.length) return;

        const duracaoNota = Tone.Time("4n").toSeconds();

        lista.forEach((n, i) => {
            samplerRef.current!.triggerAttackRelease(n as string, duracaoNota, Tone.now() + i * duracaoNota);
        });
    };

    return { tocarPartitura, play };
};