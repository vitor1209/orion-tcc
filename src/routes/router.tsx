import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "../pages/Home/Home";
import { InstrumentSelection } from "../pages/InstrumentSelection/InstrumentSelection";
import { InstrumentTeclado } from "../pages/InstrumentTeclado/InstrumentTeclado";
import { ModeSelection } from "../pages/PlayModeSelection/PlayModeSelection";
import { CameraPage } from "../pages/PraticaLivre/Camera/Camera";
import { IntroducaoGuiada } from "../pages/IntroducaoGuiada/IntroducaoGuiada";
import { AtividadeGuiada1 } from "../pages/Atividades/AtividadeGuiada1/AtividadeGuiada1";
import { ConexaoLuva } from "../pages/PraticaLivre/Luva/ConexaoLuva";

function ScrollToTopLayout() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, search]);

  return <Outlet />;
}

export const Router = createBrowserRouter([
  {
    element: <ScrollToTopLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/SelecaoInstrumento/",
        element: <InstrumentSelection />,
      },
      {
        path: "/Teclado",
        element: <InstrumentTeclado />,
      },
      {
        path: "/SelecaoModo",
        element: <ModeSelection />,
      },
      {
        path: "/PraticaLivre/Camera",
        element: <CameraPage />,
      },
      {
        path: "/introducao-guiada",
        element: <IntroducaoGuiada />,
      },
      {
        path: "/atividade-guiada-1",
        element: <AtividadeGuiada1 />,
      },
      {
        path: "/conexaoLuva",
        element: <ConexaoLuva />,
      },
    ],
  },
]);
