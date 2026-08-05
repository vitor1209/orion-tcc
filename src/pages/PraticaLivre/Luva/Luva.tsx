import { Stack, ToggleButton, Typography } from "@mui/material";
import { Footer } from "../../../components/Footer/Footer";
import { Button } from "../../../components/Button/Button";
import { ArrowLeft } from "lucide-react";
import { EyebrowLabel, ModalCard, PageSubtitle, PageTitle, ToggleButtonGroupStyled } from "./Luva.styled";
import { Piano, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
import "./stylesPiano.css";
import { Partitura } from "../../../components/Partitura/Partitura";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import fundoNotas from "../../../assets/images/fundo_notas.png";
import { useLuva } from "../../../hooks/useLuva/useLuva.hook";
import type { NotaComOitava } from "../../../utils/Notas.types";
import { useNotaSound } from "../../../hooks/useNotaSound/useNotaSound.hook";

export const LuvaPage = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const backQuery = new URLSearchParams({
        modo: params.get("modo") ?? "livre",
        interacao: params.get("interacao") ?? "luva",
        instrumento: params.get("instrumento") ?? "teclado",
        nivel: params.get("nivel") ?? "iniciante",
    });

    const [oitava, setOitava] = useState<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8">("4");
    const [notas, setNotas] = useState<NotaComOitava[]>([]);

    function limparNotas() {
        setNotas([]);
    }

    const handleChange = (
        _: React.MouseEvent<HTMLElement>,
        newValue: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8"
    ) => {
        if (newValue !== null) {
            setOitava(newValue);
        }
    };

    const firstNote = MidiNumbers.fromNote(oitava === "0" ? "A0" : `C${oitava}`);
    const lastNote = MidiNumbers.fromNote(oitava === "8" ? "C8" : `B${oitava}`);

    const { estado, conectar, desconectar, conectado } = useLuva();

    const [logs, setLogs] = useState<string[]>([]);

    const notaAtiva = useMemo(() => {
        if (!estado?.nota) return null;
        try {
            const notaComOitava = `${estado.nota}${oitava}` as NotaComOitava;
            return MidiNumbers.fromNote(notaComOitava);
        } catch {
            return null;
        }
    }, [estado?.nota, oitava]);

    const LARGURA_POR_TECLA_BRANCA = 113;

    const larguraPiano = useMemo(() => {
        let teclasBrancas = 0;
        for (let midi = firstNote; midi <= lastNote; midi++) {
            const { pitchName } = MidiNumbers.getAttributes(midi);
            const isAcidental = pitchName.length > 1;
            if (!isAcidental) teclasBrancas++;
        }
        return teclasBrancas * LARGURA_POR_TECLA_BRANCA;
    }, [firstNote, lastNote]);

    const { play } = useNotaSound({});

    useEffect(() => {
        if (!estado?.nota) return;
        const notaComOitava = `${estado.nota}${oitava}` as NotaComOitava;
        try {
            const midi = MidiNumbers.fromNote(notaComOitava);
            // add to on-screen log
            const ts = new Date().toLocaleTimeString();
            setLogs((prev) => [...prev, `${ts} - Luva: ${notaComOitava}`]);
            // simulate piano key click: play + add to partitura
            void handleNotaClicada(midi);
        } catch {
            // ignore invalid note
        }

    }, [estado?.nota, oitava]);

    useEffect(() => {
        // log connection changes
        const ts = new Date().toLocaleTimeString();
        setLogs((prev) => [...prev, `${ts} - Conectado: ${conectado}`]);
    }, [conectado]);

    async function handleNotaClicada(midiNumber: number) {
        const { note } = MidiNumbers.getAttributes(midiNumber);
        await play(note as NotaComOitava);
        setNotas((prev) => [...prev, note as NotaComOitava]);
    }

    return (
        <>
            <Stack direction={"row"} minHeight={"100vh"} spacing={2}>

                <Stack width={"30%"} bgcolor={"#F8FAFF"} border={"#ECECEC 2px solid"}>

                    <Stack p={"15% 15% 0 15%"}>
                        <Typography fontSize={"1.8rem"} fontWeight={"bold"} >
                            Ajustes:
                        </Typography>

                        <Stack mt={2}>
                            <Typography
                                variant="h6"
                                fontWeight={600}
                                sx={{ mb: 0.5 }}
                            >
                                Oitava:
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mb: 2 }}
                            >
                                Selecione a oitava desejada
                            </Typography>

                            <ToggleButtonGroupStyled
                                value={oitava}
                                exclusive
                                onChange={handleChange}
                                sx={{

                                }}
                            >
                                <ToggleButton value="0">0</ToggleButton>
                                <ToggleButton value="1">1</ToggleButton>
                                <ToggleButton value="2">2</ToggleButton>
                                <ToggleButton value="3">3</ToggleButton>
                                <ToggleButton value="4">4</ToggleButton>
                                <ToggleButton value="5">5</ToggleButton>
                                <ToggleButton value="6">6</ToggleButton>
                                <ToggleButton value="7">7</ToggleButton>
                                <ToggleButton value="8">8</ToggleButton>
                            </ToggleButtonGroupStyled>


                        </Stack>

                        <Stack mt={2}>
                            <Button
                                variante={conectado ? "Vermelho" : "Gradiente"}
                                tamanho="md"
                                onClick={() => (conectado ? void desconectar() : void conectar())}
                                sx={{ ml: 2 }}
                            >
                                {conectado ? "Desconectar Luva" : "Conectar Luva"}
                            </Button>
                        </Stack>
                    </Stack>

                    <Stack
                        flex={1}
                        justifyContent="center"
                        alignItems="center"
                        width={"100%"}
                        sx={{
                            backgroundImage: `url(${fundoNotas})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "contain",
                        }}
                    />

                </Stack>

                <Stack width={"70%"} alignItems={"end"} p={"5% 5% 5% 0"}>
                    <Button variante="Voltar" tamanho="md" to={`/selecao-atividade?${backQuery.toString()}`}>
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

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={oitava}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.98,
                                        filter: "brightness(1)",
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        filter: ["brightness(1)", "brightness(1.12)", "brightness(1)"],
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.98,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeOut",
                                    }}
                                >

                                    <div className="luva-piano-wrapper">
                                        <Piano
                                            key={oitava}
                                            noteRange={{ first: firstNote, last: lastNote }}
                                            playNote={handleNotaClicada}
                                            stopNote={() => { }}
                                            activeNotes={notaAtiva !== null ? [notaAtiva] : []}
                                            width={larguraPiano}
                                        />
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                        </ModalCard>
                        <Partitura notas={notas} onClear={limparNotas} />

                        <Stack mt={2} sx={{ width: '100%' }}>
                            <Typography variant="subtitle2" sx={{ mb: 1 }}>
                                Logs da Luva:
                            </Typography>
                            <div style={{ maxHeight: 120, overflow: 'auto', background: '#fff', padding: 8, border: '1px solid #eee' }}>
                                {logs.length === 0 ? (
                                    <Typography variant="caption" color="text.secondary">Nenhum evento ainda</Typography>
                                ) : (
                                    logs.map((l, i) => (
                                        <div key={i} style={{ fontSize: 12, marginBottom: 4 }}>{l}</div>
                                    ))
                                )}
                            </div>
                        </Stack>
                    </Stack>
                </Stack>

            </Stack >

            <Footer />
        </>
    );
};
