import './App.css';
import {useState} from "react";
import UserDetails from './components/UserDetails';

function App() {
  const [pessoas] = useState([
    {id:1, nome:"Gabriel", idade:21, profissao:"Developer"},
    {id:2, nome:"Josué", idade:24, profissao:"Intern"},
    {id:3, nome:"Marcelove", idade:26, profissao:"QA Analyst"},
    {id:4, nome:"Ronyldo", idade:28, profissao:"Developer"},
    {id:5, nome:"Manoel", idade: 17, profissao:"Student"}
  ]);


  return (
    <div className="App">
      <h1>USUARIOS:</h1>
      {pessoas.map((pessoa) =>
        <UserDetails key={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} profissao={pessoa.profissao} />
  
      )}
    </div>
  );
}

export default App;
