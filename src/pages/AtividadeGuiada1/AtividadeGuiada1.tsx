import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Footer } from "../../components/Footer/Footer";
import { Button } from "../../components/Button/Button";
import * as S from "./AtividadeGuiada1.styles";

const lessons = ["Introdução", "Atividade 1", "Atividade 2", "Atividade 3"];

export function AtividadeGuiada1() {
  const navigate = useNavigate();
  const [octave, setOctave] = useState(1);
  const [volume, setVolume] = useState(32);

  return (
    <S.Page>
      <S.ActivityArea>
        <S.Sidebar as="aside">
          <S.AdjustmentsPanel>
            <S.AdjustmentsTitle>Ajustes:</S.AdjustmentsTitle>

            <S.ControlGroup>
              <S.ControlLabel>Volume</S.ControlLabel>
              <S.VolumeSlider
                aria-label="Volume"
                value={volume}
                onChange={(_, value) => setVolume(value as number)}
              />
            </S.ControlGroup>

            <S.ControlGroup>
              <S.ControlLabel>Oitava:</S.ControlLabel>
              <S.ControlHint>Selecione a oitava desejada</S.ControlHint>
              <S.OctaveOptions>
                {[1, 2].map((value) => (
                  <S.OctaveButton
                    key={value}
                    active={octave === value}
                    onClick={() => setOctave(value)}
                  >
                    {value}
                  </S.OctaveButton>
                ))}
              </S.OctaveOptions>
            </S.ControlGroup>
          </S.AdjustmentsPanel>

          <S.LevelPanel>
            <S.LevelTitle>Nível: Iniciante</S.LevelTitle>
            <S.LessonList as="nav" aria-label="Etapas da aula">
              {lessons.map((lesson, index) => (
                <S.LessonItem key={lesson} active={index === 1}>
                  <Check size={17} aria-hidden="true" />
                  <span>{lesson}</span>
                </S.LessonItem>
              ))}
            </S.LessonList>
          </S.LevelPanel>
        </S.Sidebar>

        <S.Main as="main">
          <S.Header>
            <S.HeadingGroup>
              <S.TitleRow>
                <S.TitleMarker />
                <S.Title as="h1">Atividade 1</S.Title>
              </S.TitleRow>
              <S.LevelChip label="Iniciante" size="small" />
            </S.HeadingGroup>

            <Button
              variante="Voltar"
              tamanho="md"
              onClick={() => navigate("/introducao-guiada?interacao=luva")}
            >
              <ArrowLeft size={16} />
              Voltar
            </Button>
          </S.Header>

          <S.ActivityCard elevation={0} as="article">
            <S.Eyebrow>Parte prática</S.Eyebrow>
            <S.CardTitle as="h2">Correspondência da Partitura</S.CardTitle>
            <S.Description>
              Com base nos ensinamentos da parte teórica, toque com sua luva as
              notas correspondentes dessa partitura
            </S.Description>

            <S.ScoreImage src={S.partituraImage} alt="Partitura da atividade 1" />
            <S.PianoImage src={S.pianoImage} alt="Teclado para tocar a atividade" />

            <S.NextButton aria-label="Avançar para a próxima atividade">
              <ArrowRight size={28} />
            </S.NextButton>
          </S.ActivityCard>
        </S.Main>
      </S.ActivityArea>

      <Footer />
    </S.Page>
  );
}
