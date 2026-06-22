import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { InstrumentSelection } from "../pages/InstrumentSelection/InstrumentSelection";
import { InstrumentTeclado } from "../pages/InstrumentTeclado/InstrumentTeclado";
import { ModeSelection } from "../pages/PlayModeSelection/PlayModeSelection";
import { CameraPage } from "../pages/PraticaLivre/Camera/Camera";

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
  }
]);