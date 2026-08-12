import { styled } from "@mui/material/styles";
import { Box, Typography, Container, Stack } from "@mui/material";

export const HomeRoot = styled(Box)({
  width: "100%",
  overflowX: "hidden",
  backgroundColor: "#020b2d",
});

export const HeroSection = styled(Box)({
  minHeight: "100vh",
  background: "#020b2d",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "clamp(32px, 5vw, 80px)",
  padding: "clamp(96px, 12vh, 140px) clamp(20px, 8vw, 8%) 56px",
  overflow: "hidden",

  "@media (max-width: 1100px)": {
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
  },

  "@media (max-width: 600px)": {
    padding: "96px 18px 42px",
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
  flexWrap: "wrap",
  gap: "16px",
  marginTop: "40px",

  "@media (max-width: 1100px)": {
    justifyContent: "center",
  },

  "@media (max-width: 520px)": {
    flexDirection: "column",
    alignItems: "stretch",
  },
});



export const HeroContent = styled(Box)({
  width: "min(100%, 900px)",
});

export const HeroTitle = styled(Typography)({
  fontFamily: "Ubuntu, Arial, sans-serif",
  fontSize: "clamp(2.65rem, 7vw, 4rem)",
  fontWeight: 600,
  lineHeight: 1.1,
  color: "#fff",
  maxWidth: "900px",
  marginBottom: "24px",

  "@media (max-width: 1100px)": {
    marginInline: "auto",
  },

  "@media (max-width: 520px)": {
    fontSize: "2.45rem",
  },
});

export const HeroDescricao = styled(Typography)({
  fontFamily: "Ubuntu, Arial, sans-serif",
  fontWeight: 400,
  color: "#D8D8D8",
  fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
  lineHeight: 1.7,
  marginBottom: "40px",
  maxWidth: "650px",

  "@media (max-width: 1100px)": {
    marginInline: "auto",
  },
});


export const ImageContainer = styled(Box)({
  position: "relative",
  width: "min(44vw, 760px)",
  flexShrink: 1,

  "&::before": {
    content: '""',
    position: "absolute",
    width: "90%",
    height: "90%",

    background:
      "radial-gradient(circle, rgba(118,95,255,.35) 0%, rgba(118,95,255,0) 70%)",

    top: "50%",
    left: "74%",
    transform: "translate(-80%, -50%)",
    // alteracao p nao quebrar a pagina
    zIndex: 0,
  },

  "@media (max-width: 1100px)": {
    width: "min(76vw, 520px)",
  },

  "@media (max-width: 600px)": {
    width: "min(92vw, 420px)",
  },
});

export const HeroImage = styled("img")({
  width: "100%",
  maxWidth: "100%",
  position: "relative",
  zIndex: 10,
});


export const Section = styled(Box)({
  position: "relative",
  overflow: "hidden",

  background:
    "linear-gradient(180deg, rgba(246, 247, 251, 0.92) 0%, rgba(237, 240, 247, 0.96) 100%), linear-gradient(180deg, rgba(124, 92, 255, 0.10) 0%, rgba(124, 92, 255, 0.00) 45%)",
  color: "#172033",
  minHeight: "100vh",
  padding: "clamp(180px, 22vh, 350px) 20px clamp(96px, 18vh, 250px)",
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
  fontSize: "clamp(2.1rem, 5vw, 3rem)",
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
  fontSize: "clamp(1.05rem, 2.6vw, 1.5rem)",
  lineHeight: 1.65,
});

export const StepsGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  alignItems: "flex-end",
  gap: 40,

  "@media (max-width: 1080px)": {
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
  padding: "120px clamp(18px, 4vw, 32px)",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "min(800px, 100vh)",

  /* Curva no topo */
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-60px",
    left: "-5%",
    width: "110%",
    height: "120px",
    background: "#E4E5EC",
    borderRadius: "0 0 50% 50%",
    zIndex: 1,
  },

  /* Curva no rodapé */
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
  fontSize: "clamp(2rem, 5vw, 3rem)",
  fontWeight: 700,
  color: "#ffffff",
  marginBottom: "16px",
  lineHeight: 1.2,
});


export const DescricaoOnda = styled(Typography)({
  fontFamily: "Ubuntu, Arial, sans-serif",
  fontWeight: 400,
  fontSize: "clamp(1rem, 3vw, 1.4rem)",
  color: "#c0c8e0",
  lineHeight: 1.65,
});



export const SectionProposito = styled(Box)({
  minHeight: "100vh",
  boxSizing: "border-box",
  backgroundColor: "#f0f0f0",
  padding: "clamp(56px, 8vw, 84px) clamp(18px, 4vw, 24px)",
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
  fontSize: "clamp(2rem, 5vw, 3rem)",
  fontWeight: 700,
  color: "#111",
  marginBottom: 16,
});

export const SubtitleProposito = styled(Typography)({
  fontFamily: "Ubuntu",
  fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
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
  gap: "clamp(42px, 7vw, 64px)",
});

export const FeatureItem = styled(Stack, {
    shouldForwardProp: (prop) => prop !== "reverse",
})<{
    reverse?: boolean;
}>(({ reverse }) => ({
    flexDirection: reverse ? "row-reverse" : "row",
    alignItems: "center",
    gap: "clamp(28px, 6vw, 64px)",
    padding: "10px 0",

    "@media (max-width:760px)": {
        flexDirection: "column",
        gap: 24,
        textAlign: "center",
    },
}));

export const TextBlock = styled(Stack)({
    flex: 1.15,
    gap: 16,

    "@media (max-width:760px)": {
        alignItems: "center",
        textAlign: "center",

        "& .MuiButtonBase-root": {
            alignSelf: "center",
        },
    },
});


export const FeatureTitle = styled(Typography)({
    fontFamily: "Ubuntu",
    fontSize: "clamp(1.55rem, 4vw, 2rem)",
    fontWeight: 700,
    color: "#111",
});

export const FeatureDescription = styled(Typography)({
    fontFamily: "Ubuntu",
    fontSize: "clamp(1rem, 2.8vw, 1.25rem)",
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
    maxWidth: "min(320px, 82vw)",

    objectFit: "contain",

    transition: "transform .25s ease, filter .25s ease",

    "&:hover": {
        transform: "scale(1.10)",
        filter: "brightness(1.02)",
    },
});
