import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { InstrumentSelection } from "./pages/InstrumentSelection/InstrumentSelection";
import { InstrumentTeclado } from "./pages/InstrumentTeclado/InstrumentTeclado";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/InstrumentSelection" element={<InstrumentSelection />} /> 
        <Route path="/Teclado" element={<InstrumentTeclado />} />      
      </Routes>
    </BrowserRouter>
  );
}

export default App;