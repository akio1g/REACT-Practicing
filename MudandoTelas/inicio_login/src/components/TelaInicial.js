import React from "react";

const TelaInicial = ({ voltarLogin }) => {
  return (
    <div>
      <h1>TELA INICIAL</h1>
      <button onClick={voltarLogin}>RETORNAR AO LOGIN</button>
    </div>
  );
};

export default TelaInicial;
