import { styled } from "@mui/material/styles";
import { Box, Typography, Container, Stack } from "@mui/material";

export const HeroSection = styled(Box)({
  minHeight: "100vh",
  background: "#020b2d",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 8%",
  overflow: "hidden",

  "@media (max-width: 900px)": {
    flexDirection: "column",
    textAlign: "center",
    paddingTop: "120px",
  },
});

export const Content = styled(Box)({
  maxWidth: "600px",
});

export const GradientText = styled("span")({
  background: "linear-gradient(90deg, #c56fff, #8f7cff)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const Descricao = styled(Typography)({
  color: "#d9d9d9",
  marginTop: "20px",
  fontSize: "1.2rem",
  lineHeight: 1.6,
});


export const ButtonsContainer = styled(Box)({
  display: "flex",
  gap: "16px",
  marginTop: "40px",
});

export const HeroImage = styled("img")({
  width: "500px",
  maxWidth: "100%",
});

export const HeroContent = styled(Box)({
  maxWidth: "1650px",
});

export const HeroTitle = styled(Typography)({
  fontFamily: "Ubuntu, Arial, sans-serif",
  fontSize: "4rem",
  fontWeight: 600,
  lineHeight: 1.1,
  color: "#fff",
  width: "900px",

  marginBottom: "24px",

  "@media (max-width: 900px)": {
    fontSize: "3rem",
  },
});

export const HeroDescricao = styled(Typography)({
  fontFamily: "Ubuntu, Arial, sans-serif",
  fontWeight: 400,
  color: "#D8D8D8",
  fontSize: "1.2rem",
  lineHeight: 1.7,
  marginBottom: "40px",
  width: "650px",
});


export const ImageContainer = styled(Box)({
  position: "relative",

  "&::before": {
    content: '""',
    position: "absolute",
    width: "400px",
    height: "400px",

    background:
      "radial-gradient(circle, rgba(118,95,255,.35) 0%, rgba(118,95,255,0) 70%)",

    top: "50%",
    left: "50%",
    transform: "translate(-80%, -50%)",
    // alteracao p nao quebrar a pagina
    zIndex: 0,
  },
});



export const Section = styled(Box)({
  position: "relative",
  overflow: "hidden",

  background:
    "linear-gradient(180deg, rgba(246, 247, 251, 0.92) 0%, rgba(237, 240, 247, 0.96) 100%), linear-gradient(180deg, rgba(124, 92, 255, 0.10) 0%, rgba(124, 92, 255, 0.00) 45%)",
  color: "#172033",
  minHeight: "100vh",
  padding: "350px 20px 250px",
  "@media (max-width: 768px)": {
    padding: "180px 20px 80px",
  },
});

export const BackgroundLayer = styled(Box)({
  position: "absolute",
  inset: 0,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  opacity: 0.1,
  pointerEvents: "none",
});

export const WaveLayer = styled("svg")({
  position: "absolute",
  left: 0,
  right: 0,
  top: -10,
  width: "100%",
  height: "auto",
  opacity: 1,
  pointerEvents: "none",
  zIndex: 0,
});

export const Containerteste = styled(Container)({
  position: "relative",
  zIndex: 1,
  maxWidth: "1400px !important",
});

export const Header = styled(Stack)({
  textAlign: "center",
  marginBottom: 48,
  position: "relative",
  zIndex: 1,
});

export const Eyebrow = styled(Typography)({
  textTransform: "uppercase",
  fontFamily: "Ubuntu, Arial, Helvetica, sans-serif",
  letterSpacing: "0.25em",
  fontWeight: 600,
  fontSize: "1.2rem",
  color: "#7c5cff",
  marginBottom: 12,
});

export const Title = styled(Typography)({
  fontFamily: "Ubuntu, Arial, Helvetica, sans-serif",
  fontSize: "3rem",
  lineHeight: 1.05,
  fontWeight: 700,
  marginBottom: 12,
  letterSpacing: "-0.04em",
});

export const Subtitle = styled(Typography)({
  fontFamily: "Ubuntu, Arial, Helvetica, sans-serif",
  fontWeight: 400,
  maxWidth: 720,
  margin: "0 auto",
  color: "#5b6782",
  fontSize: "1.5rem",
  lineHeight: 1.65,
});

export const StepsGrid = styled(Box)({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  gap: 40,

  "@media (max-width: 840px)": {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 32,
    justifyItems: "center",
  },

  "@media (max-width: 530px)": {
    gridTemplateColumns: "1fr",
  },
});



export const Sectiononda = styled(Box)({
  position: "relative",
  background: "#020b2d",
  padding: "120px 32px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "800px",

  /* Curva branca no topo */
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-60px",
    left: "-5%",
    width: "110%",
    height: "120px",
    background: "#f0f2f8",
    borderRadius: "0 0 50% 50%",
    zIndex: 1,
  },

  /* Curva branca no rodapé */
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-60px",
    left: "-5%",
    width: "110%",
    height: "120px",
    background: "#f0f2f8",
    borderRadius: "50% 50% 0 0",
    zIndex: 1,
  },
});

export const WavesWrapper = styled(Box)({
  position: "absolute",
  inset: 0,
  zIndex: 0,
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ContentOnda = styled(Box)({
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  maxWidth: "560px",
});


export const LogoImage = styled("img")({
  width: "225px",
  maxWidth: "100%",
  height: "auto",
  marginBottom: "32px",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  objectFit: "contain",
});

export const ButtonsRow = styled(Box)({
  display: "flex",
  gap: "16px",
  justifyContent: "center",
  flexWrap: "wrap",
});

export const TitleOnda = styled(Typography)({
  fontFamily: "Ubuntu, Arial, sans-serif",
  fontSize: "3rem",
  fontWeight: 700,
  color: "#ffffff",
  marginBottom: "16px",
  lineHeight: 1.2,
});


export const DescricaoOnda = styled(Typography)({
  fontFamily: "Ubuntu, Arial, sans-serif",
  fontWeight: 400,
  fontSize: "1.4rem",
  color: "#c0c8e0",
  lineHeight: 1.65,
});



export const SectionProposito = styled(Box)({
  minHeight: "100vh",
  boxSizing: "border-box",
  backgroundColor: "#f0f0f0",
  padding: "64px 24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const HeaderProposito = styled(Stack)({
  textAlign: "center",
  maxWidth: 560,
  marginBottom: 64,
});

export const TitleProposito = styled(Typography)({
  fontFamily: "Ubuntu",
  fontSize: "3rem",
  fontWeight: 700,
  color: "#111",
  marginBottom: 16,
});

export const SubtitleProposito = styled(Typography)({
  fontFamily: "Ubuntu",
  fontSize: "1.3rem",
  color: "#444",
  lineHeight: 1.7,
  marginBottom: 24,
});

export const Logo = styled("img")({
  height: 75,
  objectFit: "contain",
});

export const FeatureList = styled(Stack)({
  width: "100%",
  maxWidth: 1080,
  gap: 64,
});

export const FeatureItem = styled(Stack, {
    shouldForwardProp: (prop) => prop !== "reverse",
})<{
    reverse?: boolean;
}>(({ reverse }) => ({
    flexDirection: reverse ? "row-reverse" : "row",
    alignItems: "center",
    gap: 64,
    padding: "10px 0",

    "@media (max-width:600px)": {
        flexDirection: "column",
        gap: 24,
    },
}));

export const TextBlock = styled(Stack)({
    flex: 1.15,
    gap: 16,
});


export const FeatureTitle = styled(Typography)({
    fontFamily: "Ubuntu",
    fontSize: "2rem",
    fontWeight: 700,
    color: "#111",
});

export const FeatureDescription = styled(Typography)({
    fontFamily: "Ubuntu",
    fontSize: "1.25rem",
    color: "#555",
    lineHeight: 1.75,
});

export const ImageBlock = styled(Box)({
    flex: 1,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

export const FeatureImage = styled("img")({
    width: "100%",
    maxWidth: 320,

    objectFit: "contain",

    transition: "transform .25s ease, filter .25s ease",

    "&:hover": {
        transform: "scale(1.10)",
        filter: "brightness(1.02)",
    },
});
