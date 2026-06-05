import * as S from "./Footer.styles";
import logo from "../../assets/logo.png";

const sections = ["Como Funciona", "Pratique", "Propósito"];

const collaborators = [
  { name: "kaio", github: "https://github.com/kaiodk" },
  { name: "nicole", github: "https://github.com/nicole-002" },
  { name: "thaís", github: "https://github.com/thaisqabe" },
  { name: "vitor_lopes", github: "https://github.com/vitor1209" },
  { name: "vitor_gonçalves", github: "https://github.com/vitorgoncalvesb" },
];

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

export function Footer() {
  return (
    <S.FooterWrapper>
      <S.Inner>
        <S.BrandBlock>
          <S.Logo src={logo} alt="ORION" />
          <S.Tagline>LUVA INTERATIVA MUSICAL</S.Tagline>
          <S.Description>
            Como luva inteligente que transforma cada toque em aprendizado,
            conectando tecnologia e educação musical de forma interativa.
          </S.Description>
        </S.BrandBlock>

        <S.LinksBlock>
          <S.ColumnTitle>Seções</S.ColumnTitle>
          <S.LinkList>
            {sections.map((s) => (
              <S.LinkItem key={s}>{s}</S.LinkItem>
            ))}
          </S.LinkList>
        </S.LinksBlock>

        <S.CollabBlock>
          <S.ColumnTitle>Colaboradores</S.ColumnTitle>
          <S.CollabList>
            {collaborators.map((c) => (
              <S.CollabItem key={c.name} href={c.github} target="_blank" rel="noreferrer">
                <GitHubIcon />
                <span>{c.name}</span>
              </S.CollabItem>
            ))}
          </S.CollabList>
        </S.CollabBlock>
      </S.Inner>
    </S.FooterWrapper>
  );
}
