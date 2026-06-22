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
  AccentLineFill,
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
        <Topbar as="header">
          <BrandBlock>
            <LogoImage as="img" src={logo} alt="Orion" />
            <Tagline as="p">LUVA INTERATIVA MUSICAL</Tagline>
          </BrandBlock>

          <BackButton onClick={() => navigate("/Teclado")}>
            <ArrowLeft size={16} />
            Voltar
          </BackButton>
        </Topbar>

        <AccentLine>
          <AccentLineFill />
          <ArrowRight size={18} />
        </AccentLine>

        <Content as="main">
          <WelcomeTitle as="h1">Como deseja tocar?</WelcomeTitle>
          <WelcomeSubtitle as="p">
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
                  <CardTitle as="h2">Câmera</CardTitle>

                  <CardDescription as="p">
                    Utilize suas mãos para tocar através do reconhecimento por
                    câmera.
                  </CardDescription>
                </CardContent>

                <CardIcon as="img" src={cameraIcon} alt="Câmera" />
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
                  <CardTitle as="h2">Luva Musical</CardTitle>

                  <CardDescription as="p">
                    Utilize a luva Orion para tocar através dos sensores.
                  </CardDescription>
                </CardContent>

                <CardIcon as="img" src={handIcon} alt="Luva Musical" />
              </ModeCard>
            </motion.div>
          </CardsGrid>
        </Content>
      </PageInner>

      <Footer />
    </PageWrapper>
  );
}
