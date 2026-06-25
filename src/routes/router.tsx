import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { InstrumentSelection } from "../pages/InstrumentSelection/InstrumentSelection";
import { InstrumentTeclado } from "../pages/InstrumentTeclado/InstrumentTeclado";
import { ModeSelection } from "../pages/PlayModeSelection/PlayModeSelection";
import { CameraPage } from "../pages/PraticaLivre/Camera/Camera";
import { IntroducaoGuiada } from "../pages/IntroducaoGuiada/IntroducaoGuiada";
import { AtividadeGuiada1 } from "../pages/Atividades/AtividadeGuiada1/AtividadeGuiada1";

export const Router = createBrowserRouter([
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
  }
]);
