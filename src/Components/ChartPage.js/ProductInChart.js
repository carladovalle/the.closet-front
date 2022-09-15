/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import styled from 'styled-components';

export default function ProductInChart() {
  return (
    <Card>
      <div>
        <ion-icon name="close-circle-outline" />
        <img
          src="https://imgcentauro-a.akamaihd.net/230x230/96943362.jpg"
          alt=""
        />
        <article>
          <h2>Tênis Manero</h2>
          <h3>R$ 259,99</h3>
        </article>
      </div>
      <aside>
        <div>
          <ion-icon name="remove-circle-outline" />
          <p>0</p>
          <ion-icon name="add-circle-outline" />
        </div>
        <h4>
          Total: <strong>R$259,99</strong>
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
  border-radius: 8px;

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
      font-size: 14px;
      font-weight: 700;
      text-align: end;
    }

    div {
      display: flex;
      gap: 5px;
      font-size: 18px;
      font-weight: 500;
    }
  }
`;
