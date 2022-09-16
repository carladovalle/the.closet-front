/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BottomMenu from '../../Common/BottomMenu';
import TopMenu from '../../Common/TopBar/TopMenu';
import EmptyChart from './EmptyChart';
import ProductInChart from './ProductInChart';
import checkout from '../../assets/checkchart.png';
import AlertWindow from '../../Common/AlertWindow';

export default function ChartPage() {
  const [myChart, setMyChart] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const { token } = JSON.parse(localStorage.getItem('userData'));
  const config = { headers: { Authorization: `Bearer ${token}` } };

  if (!token) {
    return <AlertWindow />;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const productsChoosed = await axios.get(
          'http://localhost:5000/chart',
          config
        );
        setMyChart(productsChoosed.data);
        const total = productsChoosed.data.reduce((acc, curr) => {
          return acc + curr.price * curr.amount;
        }, 0);
        setTotalValue(total);
        return;
      } catch (error) {
        alert(error.response.data);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <TopMenu />
      <Wrapper>
        <h1>Meu Carrinho</h1>
        {myChart.length > 0 ? (
          <>
            <div>
              {myChart.map((product, index) => (
                <ProductInChart
                  key={index}
                  totalValue={totalValue}
                  setTotalValue={setTotalValue}
                  product={product}
                  config={config}
                  setMyChart={setMyChart}
                />
              ))}
            </div>
            <OrderSummary totalValue={totalValue} />
          </>
        ) : (
          <EmptyChart />
        )}
      </Wrapper>
      <BottomMenu />
    </>
  );
}

function OrderSummary({ totalValue }) {
  const [isDone, setIsDone] = useState(false);
  const navigate = useNavigate();
  return (
    <Container isDone={isDone}>
      <div>
        <p>TOTAL:</p>
        <span>
          {(totalValue / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
      </div>

      <button
        onClick={() => {
          setTimeout(() => {
            navigate('/checkout');
          }, 1000);
          setIsDone(true);
        }}
      >
        <img src={checkout} alt="" />
        <span>Checkout</span>
      </button>
    </Container>
  );
}

const Wrapper = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 65px 0;

  > div {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 6px;
    overflow-y: auto;
    margin-bottom: 35px;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  > h1 {
    margin-bottom: 10px;
    margin-left: 20px;
    font-size: 28px;
    font-weight: 500;
    color: #5b3e40;
  }
`;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 50px;
  background-image: linear-gradient(#dbebdb 60%, #ffffff);
  padding: 0 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top: 1px solid #c3c3c3;

  div {
    p {
      font-size: 16px;
      font-weight: 500;
      color: #737373;
    }

    span {
      font-size: 14px;
      font-weight: 700;
      color: #737373;
    }
  }

  button {
    display: flex;
    align-items: center;
    height: 100%;
    width: 40%;
    background-color: lightgreen;
    border: 1px solid #67af67;
    height: 40px;
    overflow: hidden;
    border-radius: 40px;
    position: relative;

    img {
      height: 35px;
      position: absolute;
      left: ${(props) => (props.isDone ? '150px' : '5px')};
      bottom: 2px;
      transition: all 1s;
    }

    span {
      font-size: 15px;
      font-weight: 700;
      color: #737373;
      margin-left: ${(props) => (props.isDone ? '20px' : '40px')};
      transition: all 1s;
    }
  }
`;
