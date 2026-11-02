import { Route, Routes } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import TransformacaoDigital from "./pages/TransformacaoDigital";
import FerramentasDigitais from "./pages/FerramentasDigitais";
import Autoavaliacao from "./pages/Autoavaliacao";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/transformacao-digital"
          element={<TransformacaoDigital />}
        />
        <Route path="/ferramentas-digitais" element={<FerramentasDigitais />} />
        <Route path="/autoavaliacao" element={<Autoavaliacao />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
