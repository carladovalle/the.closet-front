/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import { useState } from 'react';
import styled from 'styled-components';
import BottomMenu from '../../Common/BottomMenu';
import TopMenu from '../../Common/TopBar/TopMenu';
import EmptyChart from './EmptyChart';
import ProductInChart from './ProductInChart';

export default function ChartPage() {
  const myChart = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [productsNumber, setProductsNumber] = useState(myChart.length);
  return (
    <>
      <TopMenu />
      <Wrapper>
        <h1>Meu Carrinho</h1>
        {myChart.length > 0 ? (
          <>
            <div>
              {myChart.map(() => (
                <ProductInChart
                  productsNumber={productsNumber}
                  setProductsNumber={setProductsNumber}
                />
              ))}
            </div>
            <OrderSummary productsNumber={productsNumber} />
          </>
        ) : (
          <EmptyChart />
        )}
      </Wrapper>
      <BottomMenu />
    </>
  );
}

function OrderSummary({ productsNumber }) {
  return (
    <Container>
      <p>{productsNumber}</p>
    </Container>
  );
}

const Wrapper = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 65px 20px;

  > div {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border: 1px dashed #d4a373;
    border-radius: 6px;
    overflow-y: auto;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  > h1 {
    margin-bottom: 10px;
    font-size: 28px;
    font-weight: 500;
    color: #5b3e40;
  }
`;

const Container = styled.section`
  height: 80px;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 50px;
  background-color: white;
  border-top: 1px solid #c3c3c3;
`;
