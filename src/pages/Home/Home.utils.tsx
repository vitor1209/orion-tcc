import musicNotes from "../../assets/images/notas.png";
import neuron from "../../assets/images/neuronio.png";
import pianist from "../../assets/images/nuvem.png";

export const passos = [
  {
    numero: "1",
    titulo: "Vista a luva",
    descricao: "Coloque a luva na mão e ajuste o velcro para maior conforto",
  },
  {
    numero: "2",
    titulo: "Conecte-se ao sistema",
    descricao: "Sincronize via Bluetooth com o aplicativo em segundos",
  },
  {
    numero: "3",
    titulo: "Escolha o instrumento",
    descricao: "Selecione o instrumento que deseja aprender",
  },
  {
    numero: "4",
    titulo: "Realize as tarefas",
    descricao: "Realize as lições teóricas e práticas",
  },
];


export const features = [
  {
    id: 1,
    title: "Aprendizado acessível",
    description:
      "Democratizamos o acesso à educação musical, permitindo que qualquer pessoa explore instrumentos sem barreiras financeiras ou físicas.",
    image: musicNotes,
    imageAlt: "Notas musicais",
    reverse: false,
  },
  {
    id: 2,
    title: "Melhorar a cognição",
    description:
      "A prática musical estimula áreas cerebrais ligadas à memória, atenção e criatividade, promovendo um desenvolvimento cognitivo completo.",
    image: neuron,
    imageAlt: "Neurônio",
    reverse: true,
  },
  {
    id: 3,
    title: "Desenvolvimento motor",
    description:
      "Os movimentos precisos dos dedos fortalecem a coordenação motora fina e a conexão entre mãos e mente.",
    image: pianist,
    imageAlt: "Pianista",
    reverse: false,
  },
];
