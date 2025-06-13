import React from 'react';
import './ListaS.css'

const ListaSimples = (props) => {
  return (
    <ul>
      {props.itens.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ListaSimples;