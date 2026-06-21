import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import logo from "../../assets/images/logo.png";
import cameraIcon from "../../assets/images/camera.png";
import handIcon from "../../assets/images/mao.png";

import { Footer } from "../../components/Footer/Footer";

import {
  PageWrapper,
  PageInner,
  Topbar,
  BrandBlock,
  LogoImage,
  Tagline,
  BackButton,
  AccentLine,
  Content,
  WelcomeTitle,
  WelcomeSubtitle,
  CardsGrid,
  CardTitle,
  CardDescription,
  ModeCard,
  CardContent,
  CardIcon,
} from "./PlayModeSelection.styles";

export const ModeSelection = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <PageInner>
        <Topbar>
          <BrandBlock>
            <LogoImage src={logo} alt="Orion" />
            <Tagline>LUVA INTERATIVA MUSICAL</Tagline>
          </BrandBlock>

          <BackButton onClick={() => navigate("/Teclado")}>
            <ArrowLeft size={16} />
            Voltar
          </BackButton>
        </Topbar>

        <AccentLine>
          <div />
          <ArrowRight size={18} />
        </AccentLine>

        <Content>
          <WelcomeTitle>Como deseja tocar?</WelcomeTitle>
          <WelcomeSubtitle>
            Selecione a forma de interação que deseja utilizar para tocar o instrumento.
          </WelcomeSubtitle>

          <CardsGrid>
            <motion.div
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ModeCard onClick={() => navigate("/camera")}>
                <CardContent>
                  <CardTitle>Câmera</CardTitle>

                  <CardDescription>
                    Utilize suas mãos para tocar através do reconhecimento por
                    câmera.
                  </CardDescription>
                </CardContent>

                <CardIcon src={cameraIcon} alt="Câmera" />
              </ModeCard>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 300,
                delay: 0.05,
              }}
            >
              <ModeCard onClick={() => navigate("/glove")}>
                <CardContent>
                  <CardTitle>Luva Musical</CardTitle>

                  <CardDescription>
                    Utilize a luva Orion para tocar através dos sensores.
                  </CardDescription>
                </CardContent>

                <CardIcon src={handIcon} alt="Luva Musical" />
              </ModeCard>
            </motion.div>
          </CardsGrid>
        </Content>
      </PageInner>

      <Footer />
    </PageWrapper>
  );
}
