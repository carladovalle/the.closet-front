/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

export default function OrderSummary({ checkoutData }) {
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
          <div>
            <p>5x Tênis Masculino Manero Bacanao </p>
            <p>R$ 300,00</p>
          </div>
          <div>
            <p>TOTAL:</p>
            <p>R$1908,00</p>
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
        </article>
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
    padding: 20px;
    height: auto;
    background-color: white;
    border-radius: 10px;
    border: 4px solid #478647;

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

      p {
        font-size: 13px;
      }
      div {
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;
