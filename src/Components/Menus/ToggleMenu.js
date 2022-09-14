/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */

import styled from 'styled-components';

/* eslint-disable react/react-in-jsx-scope */
export default function ToggleMenu() {
  return (
    <Toggle>
      <button>X</button>
      <div>
        <ion-icon name="person" />
        <h3>Olá, Fulano!!</h3>
      </div>
      <ul>
        <li>
          Camisetas
          <ion-icon name="caret-forward-outline" />
        </li>
        <li>
          Calças
          <ion-icon name="caret-forward-outline" />
        </li>
        <li>
          Bermudas
          <ion-icon name="caret-forward-outline" />
        </li>
        <li>
          Vestidos
          <ion-icon name="caret-forward-outline" />
        </li>
        <li>
          Inverno
          <ion-icon name="caret-forward-outline" />
        </li>
        <li>
          Calçados
          <ion-icon name="caret-forward-outline" />
        </li>
      </ul>
      <footer>© 2022 - Desenvolvido por Carla do Valle e Filipe Garrote</footer>
    </Toggle>
  );
}

const Toggle = styled.section`
  width: 80%;
  height: 100vh;
  max-width: 280px;
  background-color: #5b3e40;
  display: flex;
  flex-direction: column;
  position: relative;

  button {
    position: absolute;
    right: -50px;
    top: 15px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    color: red;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  div {
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #462f30;
    gap: 15px;
    margin-bottom: 20px;
    color: #ffffff;
    font-size: 26px;
    font-weight: 500;
    padding-left: 20px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    color: #d4a373;
    font-size: 24px;
  }

  footer {
    margin-top: 280px;
    width: 90%;
    font-size: 15px;
    padding-left: 20px;
    color: #312223;
  }
`;
