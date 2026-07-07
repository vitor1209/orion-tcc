import { useState, useRef } from "react";

type EventoGravado = {
  time: number;
  duration: number;
  midiNumber: number;
};

export const usePlaybackGravacao = (eventos: EventoGravado[]) => {
  const [modo, setModo] = useState<"RECORDING" | "PLAYING">("RECORDING");
  const [eventosAtuais, setEventosAtuais] = useState<EventoGravado[]>([]);
  const eventosAgendados = useRef<ReturnType<typeof setTimeout>[]>([]);

  const getTempoFinalGravacao = () => {
    if (eventos.length === 0) return 0;
    return Math.max(...eventos.map((evento) => evento.time + evento.duration));
  };

  const onClickStop = () => {
    eventosAgendados.current.forEach((evento) => clearTimeout(evento));
    eventosAgendados.current = [];
    setModo("RECORDING");
    setEventosAtuais([]);
  };

  const onClickPlay = () => {
    setModo("PLAYING");

    const temposUnicos = Array.from(
      new Set(
        eventos.flatMap((evento) => [
          evento.time,
          evento.time + evento.duration,
        ])
      )
    );

    temposUnicos.forEach((tempo) => {
      const timeoutId = setTimeout(() => {
        const eventosNoTempo = eventos.filter(
          (evento) => evento.time <= tempo && evento.time + evento.duration > tempo
        );
        setEventosAtuais(eventosNoTempo);
      }, tempo * 1000);

      eventosAgendados.current.push(timeoutId);
    });

    // Para no final
    setTimeout(() => {
      onClickStop();
    }, getTempoFinalGravacao() * 1000);
  };

  return { modo, eventosAtuais, onClickPlay, onClickStop };
};