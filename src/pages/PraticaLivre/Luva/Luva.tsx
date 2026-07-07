import { Stack } from "@mui/material";
import { Footer } from "../../../components/Footer/Footer";
import { Button } from "../../../components/Button/Button";
import { ArrowLeft } from "lucide-react";
import { EyebrowLabel, ModalCard, PageSubtitle, PageTitle } from "./Luva.styled";
import { Piano, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
import "./stylesPiano.css";
import { usePlaybackGravacao } from "./luva.utils";

const firstNote = MidiNumbers.fromNote("c4");
const lastNote = MidiNumbers.fromNote("b4");

type EventoGravado = {
    time: number;
    duration: number;
    midiNumber: number;
}

const eventosMock: EventoGravado[] = [
    { time: 0, duration: 0.5, midiNumber: MidiNumbers.fromNote("c4") },
    { time: 0.5, duration: 0.5, midiNumber: MidiNumbers.fromNote("d4") },
    { time: 1, duration: 0.5, midiNumber: MidiNumbers.fromNote("e4") },
    { time: 1.5, duration: 0.5, midiNumber: MidiNumbers.fromNote("f4") },
    { time: 2, duration: 1, midiNumber: MidiNumbers.fromNote("g4") },
];


export const LuvaPage = () => {
    const { onClickPlay } = usePlaybackGravacao(eventosMock);

    return (
        <>
            <Stack direction={"row"} minHeight={"95vh"} spacing={2}>
                <Stack width={"30%"} bgcolor={"#F8FAFF"} p={"5% 10% 0 5%"} border={"#ECECEC 2px solid"}>
                    <p>ajustes</p>
                </Stack>
                <Stack width={"70%"} alignItems={"flex-end"} p={"5% 5% 0 10%"}>
                    <Button variante="Voltar" tamanho="md" to="/SelecaoModo?modo=livre">
                        <ArrowLeft size={16} />
                        Voltar
                    </Button>
                    <Stack>
                        <ModalCard>
                            <EyebrowLabel>Modo Livre</EyebrowLabel>
                            <PageTitle>Correspondência da Partitura</PageTitle>
                            <PageSubtitle>
                                Com base nos ensinamentos da parte teórica, toque com sua luva as notas correspondentes dessa partitura
                            </PageSubtitle>

                            <Piano
                                noteRange={{ first: firstNote, last: lastNote }}
                                playNote={() => { }}
                                stopNote={() => { }}
                                width={800}
                            />


                        </ModalCard>
                            <Button  variante="Gradiente" onClick={onClickPlay} tamanho={"sm"}>Play</Button>
                    </Stack>
                </Stack>
            </Stack>

            <Footer />
        </>
    );
};