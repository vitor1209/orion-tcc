import { Box, Stack } from "@mui/material";
import { styles } from "./Partitura.styled";
import { usePartitura } from "./Partitura.hook";
import type { PartituraProps } from "./Partitura.type";
import { useNotaSound } from "../../hooks/useNotaSound/useNotaSound.hook";
import { Button } from "../Button/Button";

export const Partitura = ({ notas = [], onClear }: PartituraProps) => {
	const {
		containerRef,
	} = usePartitura(notas);

	const { tocarPartitura } = useNotaSound({ notas });

	return (
		<Stack sx={styles.container}>
			<Stack direction="column" spacing={2}>
				<Button
					variante="Gradiente"
					tamanho="md"
					color="secondary"
					onClick={tocarPartitura}
					disabled={notas.length === 0}
				>
					Tocar partitura
				</Button>
				<Button
					variante="Gradiente"
					tamanho="md"
					color="error"
					onClick={onClear}
					disabled={notas.length === 0 || !onClear}
				>
					Apagar partitura
				</Button>
			</Stack>

			<Box sx={styles.score}>
				<Box ref={containerRef} sx={styles.svg} />
			</Box>
		</Stack>
	);
};
