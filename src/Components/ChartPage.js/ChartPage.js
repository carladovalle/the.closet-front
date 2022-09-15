/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */

import styled from 'styled-components';
import BottomMenu from '../../Common/BottomMenu';
import TopMenu from '../../Common/TopBar/TopMenu';

/* eslint-disable react/react-in-jsx-scope */
export default function ChartPage() {
  const myChart = [];
  return (
    <>
      <TopMenu />
      <Wrapper>
        <h1>Meu Carrinho</h1>
        {myChart.length > 0 ? (
          'TEM'
        ) : (
          <EmptyChart>
            <span>
              Seu carrinho ainda está vazio. Confira nossos produtos e aproveite
              nossas ofertas!
            </span>
            <ion-icon name="bag-handle-outline" />
            <button>Escolher produtos</button>
          </EmptyChart>
        )}
      </Wrapper>
      <BottomMenu />
    </>
  );
}

const Wrapper = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 65px 20px;

  h1 {
    margin-bottom: 10px;
    font-size: 28px;
    font-weight: 500;
    color: #5b3e40;
  }
`;

const EmptyChart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20%;

  span,
  ion-icon {
    font-size: 23px;
    text-align: center;
    color: #c1c1c1;
  }

  button {
    width: 60%;
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
      filter: brightness(0.9);
    }
    &:active {
      filter: brightness(0.85);
      transform: scale(95%);
    }
  }
`;
