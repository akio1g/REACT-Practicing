import "./App.css";

import { useState, useEffect } from "react";

const url = "http://localhost:3000/logins";

function App() {
  const [logins, setLogins] = useState([]);
  // resgatar dados
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();

      setLogins(data);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>LISTA DE LOGINS</h1>
      <ul>
        {logins.map((login) => (
          <li key={login.id}>
            {login.username} - {login.senha}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
