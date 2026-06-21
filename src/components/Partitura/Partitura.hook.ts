import { useEffect, useRef, useState } from "react";
import type { NotaType } from "../../utils/Notas.types";
import { Accidental, Formatter, Renderer, Stave, StaveNote } from "vexflow";

const NOTA_REGEX = /^([A-Ga-g])([#b]?)(\d+)$/;
const NOTAS_POR_COMPASSO = 4;
const LARGURA_COMPASSO_INICIAL = 250;
const LARGURA_COMPASSO = 180;
const ALTURA_LINHA = 120;
const ALTURA_CONTAINER = 220;

const calcularX = (coluna: number, linha: number): number => {
	if (linha === 0) {
		return coluna === 0
			? 16
			: LARGURA_COMPASSO_INICIAL + (coluna - 1) * LARGURA_COMPASSO + 16;
	}
	return coluna * LARGURA_COMPASSO + 16;
}

export const usePartitura = (notas: NotaType[]) => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [largura, setLargura] = useState(0);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const observer = new ResizeObserver(([entry]) => {
			if (entry) {
				setLargura(entry.contentRect.width);
			}
		});

		observer.observe(container);

		return () => {
			observer.disconnect();
		};
	}, []);

	useEffect(() => {
		const container = containerRef.current;

		if (container) container.innerHTML = "";

		if (!container || largura === 0) return;

		const compassosPorLinha = Math.max(
			1,
			Math.floor((largura - LARGURA_COMPASSO_INICIAL) / LARGURA_COMPASSO) + 1
		);

		const compassos: NotaType[][] = [];
		for (let i = 0; i < Math.max(notas.length, 1); i += NOTAS_POR_COMPASSO) {
			compassos.push(notas.slice(i, i + NOTAS_POR_COMPASSO));
		}

		const totalLinhas = Math.ceil(compassos.length / compassosPorLinha);
		const totalAltura = Math.max(
			ALTURA_CONTAINER,
			totalLinhas * ALTURA_LINHA + 40
		);

		try {
			const renderer = new Renderer(container, Renderer.Backends.SVG);
			renderer.resize(largura, totalAltura);
			const contexto = renderer.getContext();

			compassos.forEach((notasCompasso, index) => {
				const linha = Math.floor(index / compassosPorLinha);
				const coluna = index % compassosPorLinha;

				const isPrimeiroGlobal = index === 0;
				const isPrimeiroNaLinha = coluna === 0;

				const larguraCompasso =
					isPrimeiroNaLinha && isPrimeiroGlobal
						? LARGURA_COMPASSO_INICIAL
						: LARGURA_COMPASSO;

				const xAtual = calcularX(coluna, linha);
				const offsetTopo = (ALTURA_CONTAINER / 2) - (ALTURA_LINHA / 2);
				const yAtual = offsetTopo + linha * ALTURA_LINHA;

				const stave = new Stave(xAtual, yAtual, larguraCompasso);
				if (isPrimeiroNaLinha) stave.addClef("treble");
				if (isPrimeiroGlobal) stave.addTimeSignature("4/4");
				stave.setContext(contexto).draw();

				const staveNotes = notasCompasso
					.map((nota) => {
						if (typeof nota !== "string") return null;

						const match = nota.match(NOTA_REGEX);
						if (!match) return null;

						const [, letter, accidental, octave] = match;
						const staveNote = new StaveNote({
							keys: [`${letter.toLowerCase()}${accidental}/${octave}`],
							duration: "q",
						});

						if (accidental !== "") {
							staveNote.addModifier(new Accidental(accidental), 0);
						}

						return staveNote;
					})
					.filter((n): n is StaveNote => n !== null);

				if (staveNotes.length === 0) return;

				Formatter.FormatAndDraw(contexto, stave, staveNotes, {
					alignRests: false,
				});
			});
		} catch (err) {
			console.error("[usePartitura] Erro ao renderizar partitura:", err);
			container.innerHTML = "";
		}
	}, [largura, notas]);

	return {
		containerRef,
		largura,
	};
};