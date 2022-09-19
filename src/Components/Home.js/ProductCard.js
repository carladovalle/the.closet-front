/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import WishButton from '../../Common/WishButton';

export default function Product({ name, price, image, inWishlist, id }) {
  const navigate = useNavigate();
  return (
    <ProductStyle>
      <img
        src={image}
        alt="product"
        onClick={() => navigate(`/product/${id}`)}
      />
      <WishButton inWishlist={inWishlist} id={id} />
      <div>
        <h1>{name}</h1>
        <h2>Frete Grátis</h2>
        <h3>
          {(price / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}{' '}
        </h3>
        <h4>
          ou{' '}
          {(price / 100 / 6).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </h4>
      </div>
    </ProductStyle>
  );
}

const ProductStyle = styled.div`
  width: 120px;
  flex: none;
  height: 170px;
  position: relative;
  background-color: #ffffff;
  margin-bottom: 8px;
  border-radius: 8px;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  padding-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  img {
    width: 70%;
    object-fit: cover;
    border-radius: 8px;
    margin-top: 6px;
  }

  div {
    width: 100%;
    height: 65px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4px;

    h1 {
      font-size: 12px;
      font-weight: 700;
      color: #706f6f;
      text-align: center;
    }

    h2 {
      font-size: 12px;
      font-weight: 400;
      color: green;
    }

    h3 {
      font-size: 12px;
      font-weight: 500;
      color: #706f6f;
      margin-top: -6px;
    }

    h4 {
      font-size: 10px;
      font-weight: 500;
      color: #706f6f;
      margin-top: -11px;
    }
  }
`;
