import React, { useState } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Valor: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default Contador;