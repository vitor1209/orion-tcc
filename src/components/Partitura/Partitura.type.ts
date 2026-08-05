import type { NotaComOitava } from "../../utils/Notas.types";

export type PartituraProps = {
    notas?: NotaComOitava[];
    onClear?: () => void;
};
