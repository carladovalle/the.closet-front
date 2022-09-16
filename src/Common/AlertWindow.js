/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BottomMenu from './BottomMenu';
import TopMenu from './TopBar/TopMenu';

export default function AlertWindow() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <TopMenu />
      <Alert>
        <ion-icon name="alert-circle" />
        <h1>Para ter acesso a esta página, você precisa fazer o login.</h1>
        <div>
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/signup')}>Cadastro</button>
        </div>
      </Alert>
      <BottomMenu />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Alert = styled.section`
  height: 250px;
  width: 280px;
  margin: auto auto;
  background-color: #ffffff;
  box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  ion-icon {
    color: #b69597;
    font-size: 50px;
  }

  h1 {
    font-size: 20px;
    text-align: center;
    font-weight: 500;
    color: #b69597;
  }

  div {
    width: 90%;
    display: flex;
    justify-content: space-between;

    button {
      width: 100px;
      height: 40px;
      border: none;
      border-radius: 20px;
      background-color: #6b373b;
      box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.4);
      color: #fefae0;
      font-size: 13px;
      margin-bottom: 15px;
      font-weight: 700;

      &:hover {
        cursor: pointer;
        filter: brightness(0.9);
      }
      &:active {
        filter: brightness(0.85);
        transform: scale(95%);
      }
    }
  }
`;
