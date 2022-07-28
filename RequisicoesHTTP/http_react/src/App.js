import "./App.css";

import { useState, useEffect } from "react";
// CUSTOM HOOK
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/logins";

function App() {
  const [logins, setLogins] = useState([]);

  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");

  // dados  resgatados em uma variavel
  const { data: items } = useFetch(url);

  // resgatar dados
  /*
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();

      setLogins(data);
    }

    fetchData();
  }, []);
*/
  // adicionar logins nessa api
  const handleSubmit = async (e) => {
    e.preventDefault();

    const login = {
      username,
      senha,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login),
    });

    // carregamento dinamico
    const addedLogin = await res.json();

    setLogins((prevLogins) => [...prevLogins, addedLogin]);

    // zerar os inputs
    setUsername("");
    setSenha("");
  };

  return (
    <div className="App">
      <h1>LISTA DE LOGINS</h1>
      <ul className="lista-login">
        {items &&
          items.map((login) => (
            <li key={login.id}>
              {login.username} - {login.senha}
            </li>
          ))}
      </ul>
      <div className="add-login">
        <h1>CADASTRAR LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <label>
            User:
            <input
              type="text"
              value={username}
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Senha:
            <input
              type="text"
              value={senha}
              name="senha"
              onChange={(e) => setSenha(e.target.value)}
            />
          </label>
          <input type="submit" value="Cadastrar" />
        </form>
      </div>
    </div>
  );
}

export default App;
