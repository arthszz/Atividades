import React from 'react';

const MensagemCondicional = (props) => {
  return (
    <div>
      {props.exibir && <p>Essa é a mensagem condicional!</p>}
    </div>
  );
};

export default MensagemCondicional;