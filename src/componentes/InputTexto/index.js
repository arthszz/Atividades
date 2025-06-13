import React, { useState } from 'react';

const InputTexto = () => {
  const [texto, setTexto] = useState('');

  const aoDigitar = (evento) => {
    setTexto(evento.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite algo..."
        onChange={aoDigitar}
        value={texto}
        className='input-texto'
      />
      <p>Você digitou: {texto}</p>
    </div>
  );
};

export default InputTexto;