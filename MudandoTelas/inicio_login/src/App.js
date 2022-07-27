import "./App.css";
import { useState } from "react";
import TelaLogin from "./components/TelaLogin";
import TelaInicial from "./components/TelaInicial";
import TelaCadastro from "./components/TelaCadastro";

const telas = [
  { id: 1, name: "login" },
  { id: 2, name: "cadastrar" },
  { id: 3, name: "inicio" },
];

function App() {
  // define tela atual para o LOGIN
  const [telaAtual, setTelaAtual] = useState(telas[0].name);

  const logar = () => {
    setTelaAtual(telas[2].name);
  };

  const voltarLogin = () => {
    setTelaAtual(telas[0].name);
  };

  return (
    <div className="App">
      {telaAtual === "login" && <TelaLogin logar={logar} />}
      {telaAtual === "inicio" && <TelaInicial voltarLogin={voltarLogin} />}
      {telaAtual === "cadastrar" && <TelaCadastro />}
    </div>
  );
}

export default App;
