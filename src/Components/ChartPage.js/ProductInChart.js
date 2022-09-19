/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function ProductInChart({
  totalValue,
  setTotalValue,
  product,
  config,
  setMyChart,
}) {
  const { _id, name, price, image, amount } = product;
  const [countProduct, setCountProduct] = useState(amount);
  const navigate = useNavigate();

  async function removeProduct() {
    try {
      if (
        window.confirm(
          'Você tem certeza que quer tirar esse item do seu carrinho?'
        )
      ) {
        await axios.delete(`https://back-projeto14-the-closet.herokuapp.com/chart/${_id}`, config);
        const newProductsChoosed = await axios.get(
          'http://localhost:5000/chart',
          config
        );
        setMyChart(newProductsChoosed.data);
        setTotalValue(totalValue - countProduct * price);
      }
    } catch (error) {
      alert(error.response.data);
      navigate('/');
    }
  }

  async function decreaseAmount() {
    if (countProduct <= 1) return;
    setCountProduct(countProduct - 1);
    setTotalValue(totalValue - price);

    try {
      await axios.put(
        `http://localhost:5000/chart/${_id}`,
        { amount: countProduct - 1 },
        config
      );
    } catch (error) {
      alert(error.response.data);
    }
  }

  async function increaseAmount() {
    setCountProduct(countProduct + 1);
    setTotalValue(totalValue + price);

    try {
      await axios.put(
        `http://localhost:5000/chart/${_id}`,
        { amount: countProduct + 1 },
        config
      );
    } catch (error) {
      alert(error.response.data);
    }
  }

  return (
    <Card countProduct={countProduct}>
      <div>
        <ion-icon name="close-circle-outline" onClick={removeProduct} />
        <img src={image} alt="Foto do produto" />
        <article>
          <h2>{name}</h2>
          <h3>
            {(price / 100).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </h3>
        </article>
      </div>
      <aside>
        <div>
          <ion-icon name="remove-circle-outline" onClick={decreaseAmount} />
          <p>{countProduct}</p>
          <ion-icon name="add-circle-outline" onClick={increaseAmount} />
        </div>
        <h4>
          Subtotal:{' '}
          <strong>
            {((price * countProduct) / 100).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </strong>
        </h4>
      </aside>
    </Card>
  );
}

const Card = styled.section`
  width: 100%;
  height: 100px;
  padding: 15px 10px;
  gap: 10px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e9e9e9;

  > div {
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > ion-icon {
      font-size: 20px;
      color: #a0a0a0;

      &:hover,
      &:active {
        color: red;
        cursor: pointer;
      }
    }
  }

  img {
    height: 80px;
    width: 80px;
  }

  article {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      font-size: 14px;
      font-weight: 500;
    }

    h3 {
      font-size: 13px;
      font-weight: 700;
      color: green;
    }
  }

  aside {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    h4 {
      width: 100px;
      font-size: 14px;
      font-weight: 700;
      text-align: end;
    }

    div {
      display: flex;
      gap: 5px;
      font-size: 18px;
      font-weight: 500;

      ion-icon {
        color: #5b3e40;
      }

      ion-icon:nth-of-type(1) {
        color: ${(props) => (props.countProduct === 1 ? '#b5b5b5' : '#5b3e40')};
      }
    }
  }
`;
