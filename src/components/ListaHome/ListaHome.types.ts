export interface FeatureItemData {
    id: number;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    reverse?: boolean;
}

export interface ListaHomeProps {
    features: FeatureItemData[];
}