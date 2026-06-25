import { ArrowLeft } from "lucide-react";
import { useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Button } from "../../components/Button/Button";
import { Footer } from "../../components/Footer/Footer";
import logo from "../../assets/images/logo.png";
import * as S from "./Proposito.styles";
import { purposeTopics } from "./Proposito.utils";

export function Proposito() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSlug = searchParams.get("topico") ?? purposeTopics[0].slug;

  const selectedTopic = useMemo(
    () =>
      purposeTopics.find((topic) => topic.slug === selectedSlug) ??
      purposeTopics[0],
    [selectedSlug]
  );

  function handleSelectTopic(slug: string) {
    setSearchParams({ topico: slug });
  }

  return (
    <S.Page>
      <S.Hero maxWidth="lg">
        <S.Topbar>
          <img src={logo} alt="Orion" width={118} />

          <Button variante="Voltar" tamanho="md" onClick={() => navigate("/#proposito")}>
            <ArrowLeft size={16} />
            Voltar
          </Button>
        </S.Topbar>

        <S.Header>
          <S.Eyebrow>Nosso propósito</S.Eyebrow>
          <S.Title>Por que a Orion existe?</S.Title>
          <S.Subtitle>
            Tecnologia só faz sentido quando aproxima pessoas de experiências
            que antes pareciam distantes. Aqui, a música vira aprendizado,
            movimento e descoberta.
          </S.Subtitle>
        </S.Header>

        <S.ContentGrid>
          <S.TopicList aria-label="Tópicos do propósito">
            {purposeTopics.map((topic, index) => (
              <S.TopicButton
                key={topic.slug}
                active={topic.slug === selectedTopic.slug}
                onClick={() => handleSelectTopic(topic.slug)}
              >
                <S.TopicNumber>{String(index + 1).padStart(2, "0")}</S.TopicNumber>
                <S.TopicName>{topic.title}</S.TopicName>
              </S.TopicButton>
            ))}
          </S.TopicList>

          <S.DetailCard>
            <S.DetailImage src={selectedTopic.image} alt="" aria-hidden="true" />

            <S.DetailContent>
              <S.DetailEyebrow>{selectedTopic.eyebrow}</S.DetailEyebrow>
              <S.DetailTitle>{selectedTopic.title}</S.DetailTitle>
              <S.DetailSummary>{selectedTopic.summary}</S.DetailSummary>

              <S.ParagraphList>
                {selectedTopic.details.map((paragraph) => (
                  <S.Paragraph key={paragraph}>{paragraph}</S.Paragraph>
                ))}
              </S.ParagraphList>

              <S.Highlights>
                {selectedTopic.highlights.map((highlight) => (
                  <S.Highlight key={highlight}>{highlight}</S.Highlight>
                ))}
              </S.Highlights>
            </S.DetailContent>
          </S.DetailCard>
        </S.ContentGrid>
      </S.Hero>

      <Footer />
    </S.Page>
  );
}
