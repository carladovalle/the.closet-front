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
    <ProductStyle onClick={() => navigate(`/product/${id}`)}>
      <img src={image} alt="product" />
      <WishButton inWishlist={inWishlist} />
      <div>
        <h3>{name}</h3>
        <p>
          {(price / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
      </div>
    </ProductStyle>
  );
}

const ProductStyle = styled.div`
  width: 100px;
  flex: none;
  height: 140px;
  position: relative;
  background-color: #ffffff;
  margin-bottom: 8px;
  border-radius: 8px;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  img {
    width: 100%;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
  }

  div {
    width: 100%;
    height: 65px;
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 12px;
      font-weight: 500;
      color: #706f6f;
    }

    p {
      font-size: 15px;
      font-weight: 700;
    }
  }
`;
