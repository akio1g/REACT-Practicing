import "./App.css";
import CarDetails from "./components/CarDetails";

function App() {
  const carros = [
    { id: 1, marca: "Ford", placa: "ESJ-0281" },
    { id: 2, marca: "Honda", placa: "EBL-5353" },
    { id: 3, marca: "Chevrolet", placa: "CRF-0067" },
  ];

  return (
    <div className="App">
      <h1 className="App-Title">DETALHES DOS CARROS</h1>
      {carros.map((carro) => (
        <CarDetails key={carro.id} marca={carro.marca} placa={carro.placa} />
      ))}
    </div>
  );
}

export default App;
