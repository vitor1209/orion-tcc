import { useRef } from "react";

import { Footer } from "../../components/Footer/Footer";
import { MenuNavegacao } from "../../components/Navbar/Navbar";
import { ComoFuncionaSection } from "./sections/ComoFuncionaSection";
import { HomeHero } from "./sections/HomeHero";
import { PratiqueSection } from "./sections/PratiqueSection";
import { PropositoSection } from "./sections/PropositoSection";
import { useHomeAnimations } from "./useHomeAnimations";
import * as Style from "./Home.styled";

export const Home = () => {
  const homeRef = useRef<HTMLDivElement | null>(null);

  useHomeAnimations(homeRef);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Style.HomeRoot ref={homeRef}>
      <MenuNavegacao escuroNoTopo />

      <HomeHero onScrollToSection={scrollToSection} />
      <ComoFuncionaSection />
      <PratiqueSection />
      <PropositoSection />

      <Footer />
    </Style.HomeRoot>
  );
};

