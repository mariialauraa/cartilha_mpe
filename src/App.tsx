import { Route, Routes } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import TransformacaoDigital from "./pages/TransformacaoDigital";
import FerramentasDigitais from "./pages/FerramentasDigitais";
import Autoavaliacao from "./pages/Autoavaliacao";

function App() {
  return (
    <div className="app-layout">
      <Header />

      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/transformacao-digital"
            element={<TransformacaoDigital />}
          />
          <Route
            path="/ferramentas-digitais"
            element={<FerramentasDigitais />}
          />
          <Route path="/autoavaliacao" element={<Autoavaliacao />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
