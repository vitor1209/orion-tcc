import { ArrowLeft, Check, ChevronDown, Search, UserCircle } from "lucide-react";
import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "../../components/Button/Button";
import { Footer } from "../../components/Footer/Footer";
import * as S from "./SelecaoAtividade.styles";

type StatusFiltro = "Todas" | "Concluídas" | "Pendentes";
type ConteudoFiltro = "Escala" | "Intervalos" | "Melodia";
type StatusAtividade = "concluida" | "pendente";

const filtrosStatus: StatusFiltro[] = ["Todas", "Concluídas", "Pendentes"];
const filtrosConteudo: ConteudoFiltro[] = ["Escala", "Intervalos", "Melodia"];

const atividades: Array<{
  id: number;
  titulo: string;
  descricao: string;
  nivel: string;
  conteudo: ConteudoFiltro;
  status: StatusAtividade;
}> = Array.from({ length: 18 }, (_, index) => {
  const conteudo = filtrosConteudo[index % filtrosConteudo.length];

  const dadosPorConteudo = {
    Escala: {
      titulo: "Introdução à escala de Dó Maior",
      descricao: "Primeiros passos na música - conhecendo a escala de Dó Maior",
    },
    Intervalos: {
      titulo: "Treino de intervalos musicais",
      descricao: "Exercícios para reconhecer distâncias entre notas",
    },
    Melodia: {
      titulo: "Melodia guiada com notas simples",
      descricao: "Pratique pequenas sequências melódicas no teclado",
    },
  };

  return {
    id: index + 1,
    ...dadosPorConteudo[conteudo],
    nivel: "Iniciante",
    conteudo,
    status: index === 0 ? "concluida" : "pendente",
  };
});

export function SelecaoAtividade() {
  const navigate = useNavigate();
  const location = useLocation();
  const [busca, setBusca] = useState("");
  const [statusSelecionado, setStatusSelecionado] =
    useState<StatusFiltro>("Todas");
  const [conteudoSelecionado, setConteudoSelecionado] =
    useState<ConteudoFiltro | null>(null);
  const [filtrosAbertos, setFiltrosAbertos] = useState(false);
  const params = new URLSearchParams(location.search);

  const modo = params.get("modo") ?? "guiado";
  const interacao = params.get("interacao") ?? "luva";
  const instrumento = params.get("instrumento") ?? "teclado";

  const fluxoQuery = new URLSearchParams({
    modo,
    interacao,
    instrumento,
  });

  const rotaAnterior = `/SelecaoInstrumento?${new URLSearchParams({
    modo,
    interacao,
  }).toString()}`;

  const rotaAtividade = (() => {
    if (modo === "livre") {
      return interacao === "camera"
        ? `/PraticaLivre/Camera?${fluxoQuery.toString()}`
        : `/PraticaLivre/Luva?${fluxoQuery.toString()}`;
    }

    return `/introducao-guiada?${fluxoQuery.toString()}`;
  })();

  const atividadesFiltradas = useMemo(() => {
    const termoBusca = busca.trim().toLowerCase();

    return atividades.filter((atividade) => {
      const correspondeBusca =
        termoBusca.length === 0 ||
        atividade.titulo.toLowerCase().includes(termoBusca) ||
        atividade.descricao.toLowerCase().includes(termoBusca) ||
        atividade.conteudo.toLowerCase().includes(termoBusca);

      const correspondeStatus =
        statusSelecionado === "Todas" ||
        (statusSelecionado === "Concluídas" &&
          atividade.status === "concluida") ||
        (statusSelecionado === "Pendentes" &&
          atividade.status !== "concluida");

      const correspondeConteudo =
        conteudoSelecionado === null || atividade.conteudo === conteudoSelecionado;

      return correspondeBusca && correspondeStatus && correspondeConteudo;
    });
  }, [busca, conteudoSelecionado, statusSelecionado]);

  const atividadesConcluidas = atividades.filter(
    (atividade) => atividade.status === "concluida"
  ).length;
  const progresso = Math.round((atividadesConcluidas / atividades.length) * 100);

  return (
    <S.Page>
      <S.Layout>
        <S.Sidebar>
          <S.UserArea>
            <S.UserAvatar>
              <UserCircle size={62} />
            </S.UserAvatar>

            <S.UserText>
              <S.UserName>User_0209</S.UserName>
              <S.EditProfile>Editar perfil</S.EditProfile>
            </S.UserText>
          </S.UserArea>

          <S.Filters>
            <S.FiltersHeader>
              <S.FiltersTitle>Filtros</S.FiltersTitle>
              <S.MobileFiltersToggle
                type="button"
                onClick={() => setFiltrosAbertos((aberto) => !aberto)}
                aria-expanded={filtrosAbertos}
              >
                {filtrosAbertos ? "Ocultar" : "Mostrar"}
                <ChevronDown size={18} />
              </S.MobileFiltersToggle>
            </S.FiltersHeader>

            <S.FiltersContent open={filtrosAbertos}>
              <S.SearchField
                size="small"
                placeholder="Busque por um conteúdo"
                value={busca}
                onChange={(event) => setBusca(event.target.value)}
                InputProps={{
                  endAdornment: <Search size={18} />,
                }}
              />

              <S.FilterGroup>
                <S.FilterLabel>Status das atividades</S.FilterLabel>
                <S.FilterButtons>
                  {filtrosStatus.map((filtro) => (
                    <S.FilterButton
                      key={filtro}
                      type="button"
                      active={statusSelecionado === filtro}
                      onClick={() => setStatusSelecionado(filtro)}
                    >
                      {filtro}
                    </S.FilterButton>
                  ))}
                </S.FilterButtons>
              </S.FilterGroup>

              <S.FilterGroup>
                <S.FilterLabel>Explorar conteúdos</S.FilterLabel>
                <S.FilterButtons>
                  {filtrosConteudo.map((filtro) => (
                    <S.FilterButton
                      key={filtro}
                      type="button"
                      active={conteudoSelecionado === filtro}
                      onClick={() =>
                        setConteudoSelecionado((atual) =>
                          atual === filtro ? null : filtro
                        )
                      }
                    >
                      {filtro}
                    </S.FilterButton>
                  ))}
                </S.FilterButtons>
              </S.FilterGroup>
            </S.FiltersContent>
          </S.Filters>

          <S.SidebarNotes aria-hidden="true" />
        </S.Sidebar>

        <S.Main>
          <S.TopAction>
            <Button
              variante="Voltar"
              tamanho="md"
              icon={ArrowLeft}
              onClick={() => navigate(rotaAnterior)}
            >
              Voltar
            </Button>
          </S.TopAction>

          <S.Content>
            <S.Title>Bem-vindo de volta!</S.Title>

            <S.ProgressArea>
              <S.ProgressMarker />
              <S.ProgressText>
                <S.ProgressTitle>Acompanhe seu progresso</S.ProgressTitle>
                <S.ProgressSubtitle>
                  Você concluiu {atividadesConcluidas} de {atividades.length}{" "}
                  atividades disponíveis
                </S.ProgressSubtitle>
              </S.ProgressText>

              <S.ProgressBarWrapper>
                <S.ProgressBar variant="determinate" value={progresso} />
                <S.ProgressDiamond progress={progresso} />
                <S.ProgressValue progress={progresso}>{progresso}%</S.ProgressValue>
              </S.ProgressBarWrapper>
            </S.ProgressArea>

            <S.ActivitiesArea>
              <S.ActivitiesScroll>
                <S.ActivitiesGrid>
                  {atividadesFiltradas.map((atividade) => (
                    <S.ActivityCard
                      key={atividade.id}
                      onClick={() => navigate(rotaAtividade)}
                      status={atividade.status}
                    >
                      <S.LevelChip label={atividade.nivel} size="small" />
                      <S.ActivityTitle>{atividade.titulo}</S.ActivityTitle>
                      <S.ActivityDescription>
                        {atividade.descricao}
                      </S.ActivityDescription>

                      {atividade.status === "concluida" && (
                        <S.DoneCorner>
                          <Check size={22} />
                        </S.DoneCorner>
                      )}
                    </S.ActivityCard>
                  ))}
                </S.ActivitiesGrid>

                {atividadesFiltradas.length === 0 && (
                  <S.EmptyState>
                    Nenhuma atividade encontrada com esses filtros.
                  </S.EmptyState>
                )}
              </S.ActivitiesScroll>
            </S.ActivitiesArea>
          </S.Content>
        </S.Main>
      </S.Layout>

      <Footer />
    </S.Page>
  );
}
