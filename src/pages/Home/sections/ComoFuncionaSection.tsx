import { CardPassos } from "../../../components/CardPassos/CardPassos";
import fundoPartitura from "../../../assets/images/fundo_partitura.png";
import { passos } from "../Home.utils";
import * as Style from "../Home.styled";

export function ComoFuncionaSection() {
  return (
    <Style.Section id="como-funciona">
      <Style.BackgroundLayer
        style={{ backgroundImage: `url(${fundoPartitura})` }}
      />

      <Style.WaveLayer
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        aria-label="Efeito de onda"
      >
        <path
          fill="#0C1528"
          fillOpacity="1"
          d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,133.3C1120,139,1280,117,1360,106.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
      </Style.WaveLayer>

      <Style.Containerteste>
        <Style.Header className="home-reveal">
          <Style.Eyebrow>Como funciona</Style.Eyebrow>
          <Style.Title>Aprenda música passo a passo</Style.Title>
          <Style.Subtitle>
            Uma experiência simples, visual e interativa para você dominar cada
            movimento com confiança.
          </Style.Subtitle>
        </Style.Header>

        <Style.StepsGrid className="home-steps-grid">
          {passos.map((passo, index) => (
            <div className="home-step-card" key={passo.numero}>
              <CardPassos
                numero={passo.numero}
                titulo={passo.titulo}
                descricao={passo.descricao}
                nivel={(index + 1) as 1 | 2 | 3 | 4}
              />
            </div>
          ))}
        </Style.StepsGrid>
      </Style.Containerteste>
    </Style.Section>
  );
}

