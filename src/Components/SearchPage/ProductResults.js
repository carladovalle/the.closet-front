/* eslint-disable react/jsx-filename-extension */

import styled from 'styled-components';

/* eslint-disable react/react-in-jsx-scope */
export default function ProductResults() {
  return (
    <ProductCard>
      <img
        src="https://imgcentauro-a.akamaihd.net/230x230/96943362.jpg"
        alt="tenis"
      />
      <div>
        <h2>Tênis manero</h2>
        <h3>FRETE GRÁTIS</h3>
        <h4>R$ 239,99</h4>
        <h5>ou 6x de R$40,00</h5>
      </div>
    </ProductCard>
  );
}

const ProductCard = styled.article`
  width: 100%;
  height: 120px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 2px rgba(87, 54, 5, 0.315);

  img {
    width: 120px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2px;

    h2 {
      font-weight: 500;
    }

    h3 {
      font-size: 12px;
      font-weight: 700;
      color: green;
    }

    h4 {
      margin-top: 15px;
      font-size: 18px;
      font-weight: 700;
    }

    h5 {
      font-size: 12px;
      font-style: italic;
    }
  }
`;
