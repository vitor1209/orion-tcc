/* eslint-disable react-hooks/set-state-in-effect */
import { Enum } from "../../utils/Enums";
import type { ResponseWs } from "./useNotes.types";
import { useEffect, useRef, useState } from "react";
import type { NotaType } from "../../utils/Notas.types";
import { api } from "../../api/Axios";

const wsUrl = (api.defaults.baseURL ?? "http://localhost:8000").replace(/^http/, "ws") + "/ws";

export const useNotes = (ativo: boolean) => {
    const wsRef = useRef<WebSocket | null>(null);
    const [notas, setNotas] = useState<NotaType[]>([]);
    const [statusConexao, setStatusConexao] = useState<Enum.TipoConexao>(Enum.TipoConexao.FECHADO);

    function limparNotas() {
        setNotas([]);
    }

    useEffect(() => {
        if (!ativo) {
            wsRef.current?.close();
            wsRef.current = null;
            setStatusConexao(Enum.TipoConexao.FECHADO);
            return;
        }

        let ignorar = false;

        const ws = new WebSocket(wsUrl);
        wsRef.current = ws;

        ws.onopen = () => {
            if (!ignorar) setStatusConexao(Enum.TipoConexao.ABERTO);
        };
        ws.onclose = () => {
            if (!ignorar) setStatusConexao(Enum.TipoConexao.FECHADO);
        };
        ws.onerror = () => {
            if (!ignorar) setStatusConexao(Enum.TipoConexao.ERRO);
        };
        ws.onmessage = (event) => {
            if (ignorar) return;
            const parsed: ResponseWs = JSON.parse(event.data);
            if (parsed.nota) {
                setNotas((prev) => [...prev, parsed.nota!]);
            }
        };

        return () => {
            ignorar = true;
            ws.close();
            wsRef.current = null;
        }

    }, [ativo],);

    return {
        listaNotas: notas,
        limparNotas,
        ultimaNota: notas[notas.length - 1],
        statusConexao: Enum.TipoConexao[statusConexao],
    };
}
