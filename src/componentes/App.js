import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import TelaAssentos from "./TelaAssentos";
import TelaInicial from "./TelaInicial";
import TelaSessoes from "./TelaSessoes";
import TelaSucesso from "./TelaSucesso";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/sessoes/:filmeId" element={<TelaSessoes />} />
        <Route path="/assentos/:sessaoId" element={<TelaAssentos />} />
        <Route path="/sucesso" element={<TelaSucesso />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;