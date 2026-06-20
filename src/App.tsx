import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { InstrumentSelection } from "./pages/InstrumentSelection/InstrumentSelection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<InstrumentSelection />} />       
      </Routes>
    </BrowserRouter>
  );
}

export default App;