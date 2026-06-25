import musicNotes from "../../assets/images/notas.png";
import neuron from "../../assets/images/neuronio.png";
import pianist from "../../assets/images/nuvem.png";

export const purposeTopics = [
  {
    slug: "aprendizado-acessivel",
    title: "Aprendizado acessível",
    eyebrow: "Educação musical para todos",
    summary:
      "A Orion aproxima pessoas da música removendo barreiras de entrada e tornando o aprendizado mais visual, tátil e intuitivo.",
    image: musicNotes,
    imageAlt: "Notas musicais",
    details: [
      "Muitas pessoas deixam de aprender música por falta de instrumentos, aulas presenciais ou materiais adaptados ao próprio ritmo. A proposta da Orion é transformar a tecnologia em uma ponte: menos intimidação no começo e mais liberdade para experimentar.",
      "Com uma experiência guiada, o usuário consegue entender o que deve fazer, acompanhar sua evolução e praticar sem depender de um ambiente tradicional de ensino. Isso torna o primeiro contato com a música mais acolhedor.",
      "A acessibilidade aqui não é apenas sobre custo. É também sobre clareza, autonomia e confiança para aprender mesmo sem experiência anterior.",
    ],
    highlights: [
      "Aprendizado no ritmo do usuário",
      "Interface visual e fácil de entender",
      "Menos barreiras para começar",
    ],
  },
  {
    slug: "cognicao",
    title: "Melhorar a cognição",
    eyebrow: "Música como estímulo cognitivo",
    summary:
      "A prática musical envolve atenção, memória, escuta e tomada de decisão, criando uma experiência rica para o cérebro.",
    image: neuron,
    imageAlt: "Neurônio",
    details: [
      "Aprender música exige que o usuário observe padrões, associe sons a gestos e mantenha atenção durante a execução. Essa combinação cria um exercício completo de percepção e resposta.",
      "Quando a prática é interativa, o retorno imediato ajuda o cérebro a corrigir rotas rapidamente: o usuário tenta, ouve, ajusta e tenta de novo. Esse ciclo favorece memorização e concentração.",
      "A Orion busca transformar esse processo em algo leve. Em vez de parecer um teste, cada atividade vira uma pequena descoberta musical.",
    ],
    highlights: [
      "Estimula memória e atenção",
      "Cria associação entre gesto e som",
      "Favorece prática com retorno imediato",
    ],
  },
  {
    slug: "desenvolvimento-motor",
    title: "Desenvolvimento motor",
    eyebrow: "Coordenação por meio do gesto",
    summary:
      "A luva incentiva movimentos precisos das mãos e dedos, conectando coordenação motora fina ao resultado musical.",
    image: pianist,
    imageAlt: "Pianista",
    details: [
      "Tocar música envolve movimento, controle e repetição. A cada gesto, o usuário aprende a perceber intensidade, tempo e precisão, desenvolvendo consciência corporal.",
      "A proposta da Orion é tornar esse treino mais lúdico: em vez de repetir exercícios abstratos, o usuário percebe que cada movimento produz um efeito sonoro.",
      "Com o tempo, essa relação entre mão, ouvido e intenção ajuda a construir mais segurança, coordenação e fluidez.",
    ],
    highlights: [
      "Trabalha coordenação motora fina",
      "Relaciona movimento com resposta sonora",
      "Incentiva prática progressiva",
    ],
  },
];
