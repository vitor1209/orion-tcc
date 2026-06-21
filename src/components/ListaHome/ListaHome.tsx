import {
    FeatureList,
    FeatureItem,
    TextBlock,
    FeatureTitle,
    FeatureDescription,
    ImageBlock,
    FeatureImage
} from "./ListaHome.styled";
import { Button } from "../../components/Button/Button";


import logo from "../../assets/images/logo.png";
import musicNotes from "../../assets/images/notas.png";
import neuron from "../../assets/images/neuronio.png";
import pianist from "../../assets/images/nuvem.png";

const features = [
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


<FeatureList>
    {features.map((feature) => (
        <FeatureItem
            key={feature.id}
            reverse={feature.reverse}
        >
            <TextBlock>
                <FeatureTitle>
                    {feature.title}
                </FeatureTitle>

                <FeatureDescription>
                    {feature.description}
                </FeatureDescription>

                <Button
                    variante="ButtonPreto"
                    tamanho="md"
                >
                    Saiba mais
                </Button>
            </TextBlock>

            <ImageBlock>
                <FeatureImage
                    src={feature.image}
                    alt={feature.imageAlt}
                />
            </ImageBlock>
        </FeatureItem>
    ))}
</FeatureList>