/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function ToggleMenu({ isOpened, setIsOpened }) {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState();
  const storedData = localStorage.getItem('userData');

  useEffect(() => {
    if (storedData) {
      setUserInfo(JSON.parse(localStorage.getItem('userData')));
    }
  }, []);

  async function logout() {
    try {
      await axios.delete(
        `https://back-projeto14-the-closet.herokuapp.com/sessions/${userInfo.token}`
      );
      alert(`Até mais, ${userInfo.name}`);
      localStorage.clear();
      window.location.reload();
    } catch (error) {
      alert(error.response.data);
    }
  }

  return (
    <>
      <Toggle isOpened={isOpened}>
        <button onClick={() => setIsOpened(false)}>X</button>
        <div>
          <ion-icon name="person" />
          {userInfo ? (
            <h3>Olá, {userInfo.name}!!</h3>
          ) : (
            <h3 onClick={() => navigate('/login')}>Login / Cadastro</h3>
          )}
        </div>
        <ul>
          <li>
            Moda Masculina
            <ion-icon name="chevron-forward-outline" />
          </li>
          <li>
            Moda Feminina
            <ion-icon name="chevron-forward-outline" />
          </li>
          <li>
            Inverno
            <ion-icon name="chevron-forward-outline" />
          </li>
          <li>
            Verão
            <ion-icon name="chevron-forward-outline" />
          </li>
          <li>
            Calçados
            <ion-icon name="chevron-forward-outline" />
          </li>
        </ul>
        <footer>
          {storedData ? (
            <>
              <p onClick={logout}>Precisa ir? Clique aqui para sair.</p>
              <em>(mas volta logo, tá?)</em>
            </>
          ) : (
            ''
          )}
          <span>© 2022 - Desenvolvido por Carla do Valle e Filipe Garrote</span>
        </footer>
      </Toggle>
      <Background isOpened={isOpened} />
    </>
  );
}

const Toggle = styled.section`
  width: 80%;
  height: 100vh;
  max-width: 280px;
  background-color: #5b3e40;
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: ${(props) => (props.isOpened ? '0' : '-400px')};
  transition: all 0.5s linear;
  box-shadow: 0 -4px 8px 2px rgba(0, 0, 0, 0.4);
  z-index: 3;

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
    border: 1px solid #d7d7d7;
    border-radius: 50px;
    box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.3);
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  div {
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #462f30;
    gap: 8px;
    margin-bottom: 20px;
    color: #ffffff;
    box-shadow: -4px 0 8px 2px rgba(0, 0, 0, 0.4);
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
    width: 100%;
    padding-left: 10px;
    position: absolute;
    bottom: 50px;

    p {
      font-size: 16px;
      font-weight: 500;
      text-decoration: underline;
      color: #ffffff;
    }

    em {
      display: block;
      font-size: 13px;
      color: #ffffff;
      margin-bottom: 50px;
    }

    span {
      font-size: 15px;
      color: #312223;
    }
  }
`;

const Background = styled.div`
  background-color: rgba(0, 0, 0, 1);
  opacity: ${(props) => (props.isOpened ? '0.6' : '0')};
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpened ? '0' : '-500px')};
  height: 100vh;
  width: 100%;
  transition: opacity 0.5s;
`;
