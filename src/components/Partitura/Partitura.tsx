import { Box, Button, Stack, Typography } from "@mui/material";
import { styles } from "./Partitura.styled";
import { usePartitura } from "./Partitura.hook";
import type { PartituraProps } from "./Partitura.type";
import { useNotaSound } from "../../hooks/useNotaSound/useNotaSound.hook";

export const Partitura = ({ notas = [], onClear }: PartituraProps) => {
	const {
		containerRef,
	} = usePartitura(notas);

	const { tocarPartitura } = useNotaSound({ notas });

	return (
		<Stack sx={styles.container}>
			<Stack sx={styles.header}>
				<Typography variant="h6" sx={styles.title}>
					Partitura
				</Typography>

				<Stack direction="row" spacing={2}>
					<Button
						variant="contained"
						color="secondary"
						onClick={tocarPartitura}
						disabled={notas.length === 0 }
					>
						Tocar partitura
					</Button>
					<Button
						variant="contained"
						color="error"
						onClick={onClear}
						disabled={notas.length === 0 || !onClear}
					>
						Apagar partitura
					</Button>
				</Stack>
			</Stack>

			<Box sx={styles.score}>
				<Box ref={containerRef} sx={styles.svg} />
			</Box>
		</Stack>
	);
};
