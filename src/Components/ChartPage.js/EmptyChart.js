/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import styled from 'styled-components';

export default function EmptyChart() {
  return (
    <Wrapper>
      <span>
        Seu carrinho ainda está vazio. Confira nossos produtos e aproveite
        nossas ofertas!
      </span>
      <ion-icon name="bag-handle-outline" />
      <button>Escolher produtos</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20%;

  span,
  ion-icon {
    max-width: 340px;
    font-size: 23px;
    text-align: center;
    color: #c1c1c1;
  }

  button {
    width: 60%;
    max-width: 200px;
    height: 40px;
    border: none;
    border-radius: 30px;
    background-color: #d4a373;
    box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.2);
    margin-top: 30px;
    color: #fefae0;
    font-size: 16px;
    font-weight: 700;

    &:hover {
      cursor: pointer;
      filter: brightness(1.1);
    }
    &:active {
      filter: brightness(1.2);
      transform: scale(95%);
    }
  }
`;
