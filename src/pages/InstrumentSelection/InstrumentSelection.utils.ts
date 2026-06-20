import pianoImage from "../../assets/images/piano.png";
import flautaImage from "../../assets/images/flauta.png";
import violaoImage from "../../assets/images/guitarra.png";

const instruments = [
  {
    title: "Teclado",
    description: "instrumento eletrofone",
    image: pianoImage,
    imageMaxWidth: "190px",
  },
  {
    title: "Flauta",
    description: "instrumento de sopro (aerofone)",
    image: flautaImage,
    imageMaxWidth: "190px",
  },
  {
    title: "Violão",
    description: "instrumento de percussão",
    image: violaoImage,
    imageMaxWidth: "160px",
  },
];

export { instruments };