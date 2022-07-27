import { useState } from "react";

import "./Form.css";

const Form = () => {
  const [username, setUsername] = useState();
  const [senha, setSenha] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("você cadastrou o usuario: " + username);
  };

  return (
    <div>
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

export default Form;
