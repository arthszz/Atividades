import React from 'react';
import './CartaProduto.css'; 

const CartaoProduto = ({ nome, preco, imagem }) => {
  return (
    <div className="cartao-produto">
      <h2>{nome}</h2>
      <p><strong>Preço:</strong> R$ {preco}</p>
      <img src={imagem} alt="" height="300px" width="300px"/>
      
    </div>
  );
};

export default CartaoProduto;