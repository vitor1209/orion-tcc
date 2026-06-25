import { Box, Stack } from "@mui/material";
import { styles } from "./Partitura.styled";
import { usePartitura } from "./Partitura.hook";
import type { PartituraProps } from "./Partitura.type";
import { useNotaSound } from "../../hooks/useNotaSound/useNotaSound.hook";
import { Button } from "../Button/Button";
import { CirclePlay, Trash2 } from "lucide-react";

export const Partitura = ({ notas = [], onClear }: PartituraProps) => {
	const {
		containerRef,
	} = usePartitura(notas);

	const { tocarPartitura } = useNotaSound({ notas });

	return (
		<Stack sx={styles.container}>
			<Stack direction="column" spacing={1}>
				<Button
					variante="Icone"
					tamanho="xl"
					icon={CirclePlay}
					onClick={tocarPartitura}
					disabled={notas.length === 0}
				/>
				<Button
					variante="Icone"
					tamanho="xl"
					icon={Trash2}
					onClick={onClear}
					disabled={notas.length === 0 || !onClear}
				/>
			</Stack>

			<Box sx={styles.score}>
				<Box ref={containerRef} sx={styles.svg} />
			</Box>
		</Stack>
	);
};
