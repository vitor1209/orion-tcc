import { Button } from "../../../components/Button/Button";
import logo from "../../../assets/images/logo-practice.png";
import ondaSonora from "../../../assets/videos/onda-sonora.mp4";
import * as Style from "../Home.styled";

export function PratiqueSection() {
  return (
    <Style.Sectiononda id="pratique" className="home-practice-section">
      <Style.WavesWrapper>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.75,
          }}
        >
          <source src={ondaSonora} type="video/mp4" />
        </video>
      </Style.WavesWrapper>

      <Style.ContentOnda className="home-practice-content">
        <Style.TitleOnda variant="h2">
          Pratique <Style.GradientText>agora!</Style.GradientText>
        </Style.TitleOnda>

        <Style.DescricaoOnda>
          Escolha seu modo preferido e comece a explorar o mundo da música.
        </Style.DescricaoOnda>

        <Style.LogoImage src={logo} alt="Logo Orion" />

        <Style.ButtonsRow>
          <Button tamanho="lg" to="/SelecaoModo?modo=guiado">
            Modo Guiado
          </Button>
          <Button variante="Gradiente" tamanho="lg" to="/SelecaoModo?modo=livre">
            Modo Livre
          </Button>
        </Style.ButtonsRow>
      </Style.ContentOnda>
    </Style.Sectiononda>
  );
}

