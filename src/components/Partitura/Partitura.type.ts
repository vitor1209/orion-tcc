import type { NotaType } from "../../utils/Notas.types";

export type PartituraProps = {
    notas?: NotaType[];
    onClear?: () => void;
};
