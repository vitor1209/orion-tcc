import { instruments } from "../../pages/InstrumentSelection/InstrumentSelection.utils";
import { CardDescription, CardImage, CardImageWrapper, CardsGrid, CardTitle, InstrumentCard } from "./CardSelecao.styled";

  <CardsGrid>
            {instruments.map(({ title, description, image, imageMaxWidth }) => (
              <InstrumentCard key={title}>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <CardImageWrapper>
                  <CardImage src={image} alt={title} style={{ maxWidth: imageMaxWidth }} />
                </CardImageWrapper>
              </InstrumentCard>
            ))}
          </CardsGrid>