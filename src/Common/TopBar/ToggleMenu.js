/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import TokenContext from '../../Contexts/TokenContext';

export default function ToggleMenu({ isOpened, setIsOpened }) {
  const { category } = useParams();
  const navigate = useNavigate();
  const { token, username } = useContext(TokenContext);

  useEffect(() => {
    setIsOpened(false);
  }, [category]);

  async function logout() {
    try {
      await axios.delete(
        `https://back-projeto14-the-closet.herokuapp.com/sessions/${token}`
      );
      alert(`Até mais, ${username}`);
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
          {username ? (
            <h3>Olá, {username}!!</h3>
          ) : (
            <h3 onClick={() => navigate('/login')}>Login / Cadastro</h3>
          )}
        </div>
        <ul>
          <li onClick={() => navigate('/')}>
            Página Inicial
            <ion-icon name="chevron-forward-outline" />
          </li>
          <li onClick={() => navigate('/section/masculino')}>
            Moda Masculina
            <ion-icon name="chevron-forward-outline" />
          </li>
          <li onClick={() => navigate('/section/feminino')}>
            Moda Feminina
            <ion-icon name="chevron-forward-outline" />
          </li>
          <li onClick={() => navigate('/section/inverno')}>
            Inverno
            <ion-icon name="chevron-forward-outline" />
          </li>
          <li onClick={() => navigate('/section/verao')}>
            Verão
            <ion-icon name="chevron-forward-outline" />
          </li>
          <li onClick={() => navigate('/section/calcados')}>
            Calçados
            <ion-icon name="chevron-forward-outline" />
          </li>
        </ul>
        <footer>
          {token ? (
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
      <Background isOpened={isOpened} onClick={() => setIsOpened(false)} />
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
  top: 0;
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
    font-size: 20px;
    font-weight: 500;
    padding-left: 20px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    color: #d4a373;
    font-size: 18px;
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
  top: ${(props) => (props.isOpened ? '0' : '-10000px')};
  right: ${(props) => (props.isOpened ? '0' : '-10000px')};
  height: 100vh;
  width: 100%;
  transition: opacity 0.5s;
`;
