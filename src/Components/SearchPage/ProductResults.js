/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import WishButton from '../../Common/WishButton';

/* eslint-disable react/react-in-jsx-scope */
export default function ProductResults({ name, price, image, id }) {
  const navigate = useNavigate();
  return (
    <ProductCard>
      <img src={image} alt="tenis" onClick={() => navigate(`/product/${id}`)} />
      <WishButton id={id} />
      <div onClick={() => navigate(`/product/${id}`)}>
        <h2>{name}</h2>
        <h3>FRETE GRÁTIS</h3>
        <h4>
          {(price / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </h4>
        <h5>
          ou 6x de{' '}
          {(price / 100 / 6).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </h5>
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
  position: relative;
  gap: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 2px rgba(87, 54, 5, 0.315);
  overflow: hidden;

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
