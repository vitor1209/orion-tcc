import { useEffect, useRef, useState } from "react";

export type Nota =
  | "C"
  | "C#"
  | "D"
  | "D#"
  | "E"
  | "F"
  | "F#"
  | "G"
  | "G#"
  | "A"
  | "A#"
  | "B";

export type NotaType = {
  nota: Nota;
};

const eventTarget = new EventTarget();
let sharedEstado: NotaType | null = null;
let sharedConectado = false;
let sharedLuvaRef: Luva | null = null;

export const useLuva = () => {
  const [estado, setEstado] = useState<NotaType | null>(sharedEstado);
  const [conectado, setConectado] = useState(sharedConectado);
  const luvaRef = useRef<Luva | null>(sharedLuvaRef);

  const conectar = async () => {
    if (sharedLuvaRef) return;
    console.log("Luva: iniciando conexão...");
    await desconectar();

    const NOTAS_VALIDAS: Nota[] = [
      "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B",
    ];

    const isNotaValida = (valor: unknown): valor is Nota => {
      return typeof valor === "string" && NOTAS_VALIDAS.includes(valor as Nota);
    };

    const luva = new Luva({}, (linha) => {
      try {
        const dados = JSON.parse(linha);
        if (dados && isNotaValida(dados.nota)) {
          console.log('Luva: nota recebida', dados);
          sharedEstado = dados as NotaType;
          eventTarget.dispatchEvent(new Event("change"));
        } else {
          console.warn("Nota inválida recebida da luva:", dados);
        }
      } catch (e) {
        console.error("Erro ao parsear JSON da luva:", linha, e);
      }
    });

    sharedLuvaRef = luva;
    eventTarget.dispatchEvent(new Event("change"));

    const sucesso = await luva.conectar();
    sharedConectado = sucesso;
    // eslint-disable-next-line no-console
    console.log("Luva: conexão result:", sucesso);
    if (!sucesso) {
      sharedLuvaRef = null;
    }
    eventTarget.dispatchEvent(new Event("change"));
  };

  const desconectar = async () => {
    const ports = await navigator.serial.getPorts();
    for (const port of ports) {
      await port.forget();
    }
    // eslint-disable-next-line no-console
    console.log("Luva: desconectando...");
    await sharedLuvaRef?.desconectar();
    sharedLuvaRef = null;
    sharedConectado = false;
    sharedEstado = null;
    eventTarget.dispatchEvent(new Event("change"));
  };

  useEffect(() => {
    const handler = () => {
      setEstado(sharedEstado);
      setConectado(sharedConectado);
      luvaRef.current = sharedLuvaRef;
    };
    eventTarget.addEventListener("change", handler);
    return () => eventTarget.removeEventListener("change", handler);
  }, []);

  return { conectar, desconectar, estado, conectado };
};
type FiltroLuva = {
  usbVendorId?: number;
  usbProductId?: number;
};

class Luva {
  private filtro: FiltroLuva;
  private porta: SerialPort | null = null;
  private conectado = false;
  private reader: ReadableStreamDefaultReader<string> | null = null;
  private onDados: (dados: string) => void;

  constructor(filtro: FiltroLuva, onDados: (dados: string) => void) {
    this.filtro = filtro;
    this.onDados = onDados;
  }

  async obterPortasAutorizadas(): Promise<SerialPort[]> {
    return navigator.serial.getPorts();
  }

  private async lerContinuamente() {
    if (!this.porta?.readable) return;

    const textDecoder = new TextDecoderStream();
    const streamFechado = this.porta.readable.pipeTo(
      textDecoder.writable as unknown as WritableStream<Uint8Array>
    );
    const reader = textDecoder.readable.getReader();
    this.reader = reader;

    let buffer = "";

    while (this.porta?.readable) {
      try {
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;

          buffer += value;
          const linhas = buffer.split("\n");
          buffer = linhas.pop() ?? "";
          for (const linha of linhas) {
            if (linha.trim()) this.onDados(linha);
          }
        }
      } catch (erro) {
        console.error("Erro de leitura na luva, tentando recuperar", erro);
      } finally {
        reader.releaseLock();
      }
    }

    await streamFechado.catch(() => { });
  }

  async conectar(taxaEnvio = 9600): Promise<boolean> {

    const filters = Object.keys(this.filtro).length ? [this.filtro] : undefined;
    try {
      this.porta = await navigator.serial.requestPort({ filters });
      await this.porta.open({ baudRate: taxaEnvio });
      this.conectado = true;
      this.lerContinuamente();
      return true;
    } catch (erro) {
      if (erro instanceof DOMException && erro.name === "NotFoundError") {
        console.warn("Usuário cancelou a seleção da porta");
      } else {
        console.error("Erro ao abrir a porta", erro);
      }
      this.conectado = false;
      return false;
    }
  }

  async desconectar() {
    this.conectado = false;
    await this.reader?.cancel();
    this.reader = null;
    await this.porta?.close();
    this.porta = null;
  }

  estaConectado() {
    return this.conectado;
  }
}