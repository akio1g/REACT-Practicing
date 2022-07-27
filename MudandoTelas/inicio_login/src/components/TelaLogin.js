import "./TelaLogin.css";
import { useState } from "react";
import { logins } from "../data/logins";

const TelaLogin = ({ logar }) => {
  const [username, setUsername] = useState();
  const [senha, setSenha] = useState();

  // validar login

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsername("");
  };
  console.log(username, senha);
  return (
    <div>
      <h1>TELA DE LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Username: </span>
          <input
            type="text"
            name="user"
            placeholder="Digite o username:"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </label>
        <div>
          <label htmlFor="senha">Senha</label>
          <input
            type="text"
            name="senha"
            placeholder="Digite sua senha"
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default TelaLogin;
