import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import { Footer } from "../../components/Footer/Footer";
import * as S from "./IntroducaoGuiada.styles";

const lessons = ["Introdução", "Atividade 1", "Atividade 2", "Atividade 3"];

export function IntroducaoGuiada() {
  const navigate = useNavigate();
  const location = useLocation();
  const interaction = new URLSearchParams(location.search).get("interacao");
  const nextPage =
    interaction === "camera" ? "/PraticaLivre/Camera" : "/atividade-guiada-1";

  return (
    <S.Page>
      <S.LessonArea>
        <S.Sidebar as="aside">
          <S.LevelPanel>
            <S.LevelTitle>Nível: Iniciante</S.LevelTitle>
            <S.LessonList as="nav" aria-label="Etapas da aula">
              {lessons.map((lesson, index) => (
                <S.LessonItem key={lesson} active={index === 0}>
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
                <S.Title as="h1">Introdução</S.Title>
              </S.TitleRow>
              <S.LevelChip label="Iniciante" size="small" />
            </S.HeadingGroup>

            <S.BackButton onClick={() => navigate("/SelecaoModo")}>
              <ArrowLeft size={16} />
              Voltar
            </S.BackButton>
          </S.Header>

          <S.TheoryCard elevation={0} as="article">
            <S.Eyebrow>Parte teórica</S.Eyebrow>
            <S.CardTitle as="h2">O primeiro passo na música</S.CardTitle>

            <S.Copy>
              <S.Paragraph>
                A música nasce da combinação entre sons e silêncios. Antes de tocar,
                é importante perceber o ritmo, a duração e a intensidade de cada nota.
                Esses elementos formam a base para compreender qualquer instrumento.
              </S.Paragraph>
              <S.Paragraph>
                Nesta introdução, você conhecerá os conceitos essenciais para começar
                sua jornada musical com a Orion. Observe cada etapa com calma e avance
                quando se sentir confortável com o conteúdo apresentado.
              </S.Paragraph>
              <S.Paragraph>
                Não é necessário ter experiência anterior. As próximas atividades foram
                preparadas para transformar a teoria em prática de forma simples,
                progressiva e interativa. Repita os exercícios, compare os sons e perceba
                como pequenos movimentos podem mudar o resultado musical.
              </S.Paragraph>
              <S.Paragraph>
                Quando estiver pronto, utilize a seta no canto inferior para seguir em
                frente. Você poderá consultar esta explicação novamente sempre que
                precisar e acompanhar seu avanço pela lista de etapas ao lado.
              </S.Paragraph>
              <S.Paragraph>
                Durante a prática, procure manter as mãos relaxadas e executar cada gesto
                com atenção. A precisão será desenvolvida naturalmente conforme você
                reconhece a relação entre movimento, ritmo e som.
              </S.Paragraph>
              <S.Paragraph>
                Aprender música é um processo contínuo. Respeite seu próprio ritmo,
                experimente possibilidades diferentes e use cada atividade como uma
                oportunidade para ouvir, criar e evoluir.
              </S.Paragraph>
            </S.Copy>

            <S.NextButton
              aria-label="Avançar para a próxima atividade"
              onClick={() => navigate(nextPage)}
            >
              <ArrowRight size={28} />
            </S.NextButton>
          </S.TheoryCard>
        </S.Main>
      </S.LessonArea>

      <Footer />
    </S.Page>
  );
}
