/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function OrderSummary({ checkoutData, productsInChart }) {
  const navigate = useNavigate();
  const total = (
    productsInChart.reduce((acc, curr) => {
      return acc + curr.price;
    }, 0) / 100
  ).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <Wrapper>
      <section>
        <div>
          <h1>Pedido realizado!!</h1>
          <h2>
            Em breve você o receberá no endereço informado. Obrigado pela
            confiança na <strong>the.closet</strong>
          </h2>
        </div>
        <article>
          <h3>Produtos:</h3>
          {productsInChart.map((item) => (
            <div>
              <p>{`${item.amount}x ${item.name}`}</p>
              <p>
                {(item.price / 100).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </p>
            </div>
          ))}
          <div>
            <h6>TOTAL:</h6>
            <h6>{total}</h6>
          </div>
        </article>
        <article>
          <h3>Dados:</h3>
          <p>Nome: {`${checkoutData.name} ${checkoutData.lastName}`}</p>
          <p>E-mail: {checkoutData.emailAdress}</p>
          <p>
            Endereço:{' '}
            {`${checkoutData.adress}, ${checkoutData.number} - ${checkoutData.city}/${checkoutData.state}`}
          </p>
          <p>Tipo de entrega: {checkoutData.deliveryType}</p>
          <p>Método de Pagamento: {checkoutData.paymentMethods}</p>
          <p>Parcelas: {checkoutData.installments}x</p>
        </article>
        <button onClick={() => navigate('/')}>OK</button>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  section {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    height: auto;
    background-color: white;
    border-radius: 10px;
    border: 4px solid #478647;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.3);

    h1 {
      margin-bottom: 5px;
      font-size: 24px;
      font-weight: 500;
      color: #5b3e40;
    }

    h2 {
      margin-bottom: 30px;
      font-size: 13px;
      color: #5b3e40;
    }

    strong {
      font-weight: 700;
    }

    h3 {
      font-size: 19px;
      font-weight: 500;
      color: #5b3e40;
      text-decoration: underline;
      margin-bottom: 5px;
    }

    article {
      margin-bottom: 30px;
      width: 100%;

      p {
        font-size: 13px;
      }
      div {
        display: flex;
        justify-content: space-between;

        h6 {
          margin-top: 5px;
          font-size: 15px;
          font-weight: 500;
        }
      }
    }

    button {
      width: 80px;
      height: 35px;
      border: none;
      background-color: #478647;
      color: #ffffff;
      font-size: 16px;
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50px;
      box-shadow: 0 2px 8px 3px rgba(0, 0, 0, 0.3);
    }
  }
`;
