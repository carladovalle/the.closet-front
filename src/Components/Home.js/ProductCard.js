/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import styled from 'styled-components';

export default function Product() {
  return (
    <ProductStyle>
      <img
        src="https://static.netshoes.com.br/produtos/tenis-casual-ds-leve-e-confortavel/14/1YM-0010-014/1YM-0010-014_zoom1.jpg?ts=1650568742&ims=544x"
        alt="product"
      />
      <div>
        <h3>Tênis masculino casual manero</h3>
        <p>R$ 599,90</p>
      </div>
    </ProductStyle>
  );
}

const ProductStyle = styled.div`
  width: 150px;
  height: 200px;
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
