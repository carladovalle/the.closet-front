/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import styled from 'styled-components';
import BottomMenu from '../../Common/BottomMenu';
import TopMenu from '../../Common/TopBar/TopMenu';
import EmptyChart from './EmptyChart';
import ProductInChart from './ProductInChart';

export default function ChartPage() {
  const myChart = [1, 2, 3, 4];
  return (
    <>
      <TopMenu />
      <Wrapper>
        <h1>Meu Carrinho</h1>
        {myChart.length > 0 ? (
          myChart.map(() => <ProductInChart />)
        ) : (
          <EmptyChart />
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
