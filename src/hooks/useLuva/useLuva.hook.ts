import { useRef, useState } from "react";
import type { NotaType } from "../../utils/Notas.types";

export const useLuva = () => {
  const [estado, setEstado] = useState<NotaType | null>(null);
  const [conectado, setConectado] = useState(false);
  const luvaRef = useRef<Luva | null>(null);

  const conectar = async () => {
    if (luvaRef.current) return; 

    const luva = new Luva({}, (linha) => {
      setEstado(JSON.parse(linha));
    });

    luvaRef.current = luva;
    const sucesso = await luva.conectar();
    setConectado(sucesso);

    if (!sucesso) {
      luvaRef.current = null;
    }
  };

  const desconectar = async () => {
    await luvaRef.current?.desconectar();
    luvaRef.current = null;
    setConectado(false);
  };

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
    const filters = Object.keys(this.filtro).length
      ? [this.filtro]
      : undefined;
    try {

      this.porta = await navigator.serial.requestPort({ filters });
      await this.porta.open({ baudRate: taxaEnvio });
      this.conectado = true;
      this.lerContinuamente();
      return true;
    } catch (erro) {
      console.error("Erro ao abrir a porta", erro);
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