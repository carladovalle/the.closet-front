import axios from 'axios';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Form from '../../Common/Form';
import BottomMenu from '../../Common/BottomMenu';
import HeaderMenu from '../../Common/TopBar/TopMenu';
import TokenContext from "../../Contexts/TokenContext";

export default function Login() {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();
  const { token, setToken } = useContext(TokenContext);

  function handleForm(e) {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  }

  async function sendForm(e) {
    e.preventDefault();
    const { email, password } = loginData;

    try {
      const { data } = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });
      alert('Login feito com sucesso! :)');
      navigate('/');
      setToken(data.token);
      console.log(data.token);
    } catch (error) {
      alert(error.response.data);
    }
  }

  return (
    <>
      <HeaderMenu />
      <Wrapper>
        <LoginContainer>
          <legend>
            <ion-icon name="person-circle-outline" />
          </legend>
          <h1>Faça o seu login</h1>
          <Form onSubmit={sendForm}>
            <section>
              <label htmlFor="email"> E-mail:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu e-mail"
                onChange={handleForm}
              />
            </section>
            <section>
              <label htmlFor="password"> Senha:</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Digite sua senha"
                onChange={handleForm}
              />
            </section>
            <button>Entrar</button>
          </Form>
        </LoginContainer>
        <span onClick={() => navigate('/signup')}>
          Ainda não é cadastrado? Faça já o seu cadastro!
        </span>
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
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 500;
    color: #d4a373;
  }

  legend {
    font-size: 38px;
    color: #5b3e40;
    background-color: #ffffff;
    overflow: hidden;
    border-radius: 50px;
    margin-left: calc(50% - 18px);
  }

  span {
    margin-top: 30px;
    font-size: 12px;
    font-weight: 700;
    text-decoration: underline;
    color: #d4a373;

    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }
`;

const LoginContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: auto;
  border-radius: 20px;
  border: 1px solid #c3c3c3;
  padding: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
`;