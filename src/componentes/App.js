import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./layout/Header";
import TelaAssentos from "./TelaAssentos";
import TelaInicial from "./TelaInicial";
import TelaSessoes from "./TelaSessoes";
import TelaSucesso from "./TelaSucesso";

function App() {
  const [reserva, setReserva] = useState(null);
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/sessoes/:filmeId" element={<TelaSessoes />} />
        <Route path="/assentos/:sessaoId" element={<TelaAssentos finalizar={(reserva) => setReserva(reserva)} />} />
        <Route path="/sucesso" element={<TelaSucesso reserva={reserva} novaReserva={() => setReserva(null)} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;