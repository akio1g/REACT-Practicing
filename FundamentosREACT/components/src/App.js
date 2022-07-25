// components
import ManageData from './components/ManageData';

// styles
import './App.css';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import DataUser from './components/DataUser';




function App() {
  const users = [
    {name: "Gabriel", telefone: "11998143671"},
    {name: "Joao", telefone: "11994726899"},
    {name: "Marcelinho", telefone: "12942723958"}
];

  return (
    <div className="App">
      
      <div className="ManageData">
        <ManageData />
      </div>
      <ListRender />
      <ConditionalRender />
      <h1>DETALHES DO USUARIO</h1>
      {users.map((user) => (
        <DataUser name={user.name} telefone={user.telefone} />
      ))}
    </div>
  );
}

export default App;
