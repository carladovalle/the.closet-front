/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function SignUp() {
  const [signupData, setSignupData] = useState({});
  // const navigate = useNavigate();

  function handleForm(e) {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  }

  async function sendForm(e) {
    e.preventDefault();
    const { user, email, password, confirmPassword } = signupData;

    if (!user || !email || !password) {
      alert(
        'Todos os campos são de preenchimento obrigatório!\nPor gentileza, revise seus dados!'
      );
      return;
    }

    if (password !== confirmPassword) {
      alert(
        'As senhas inseridas devem ser iguais!\nPor gentileza, revise seus dados!'
      );
      return;
    }

    try {
      await axios.post('http://localhost:5000/signup', signupData);
      alert('Usuário criado com sucesso! :)');
      // navigate('/login');
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <Wrapper>
      <LoginContainer>
        <ion-icon name="shirt-outline" />
        <h1>Crie sua conta!</h1>
        <Form onSubmit={sendForm}>
          <section>
            <label htmlFor="user">Nome de usuário:</label>
            <input
              type="text"
              name="user"
              id="user"
              placeholder="Digite seu username"
              onChange={handleForm}
            />
          </section>
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
          <section>
            <label htmlFor="confirmPassword"> Confirme sua senha:</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirme a senha digitada anteriormente"
              onChange={handleForm}
            />
          </section>
          <button>Cadastrar</button>
        </Form>
      </LoginContainer>
      <span>Já possui um usuário? Faça já seu login!</span>
    </Wrapper>
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
    margin-bottom: 40px;
    font-size: 24px;
    font-weight: 700;
    color: #d4a373;
  }

  ion-icon {
    font-size: 26px;
    margin-bottom: 15px;
    color: #683401;
  }

  span {
    margin-top: 30px;
    font-size: 12px;
    font-weight: 700;
    text-decoration: underline;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: auto;
  border-radius: 20px;
  padding: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 10%;
    gap: 8px;
    font-size: 13px;

    input {
      width: 100%;
      margin-bottom: 15px;
      border: none;
      border-bottom: 1px solid #c3c3c3;
      background-color: inherit;
      padding: 5px;
    }
  }

  button {
    width: 40%;
    height: 40px;
    border: none;
    border-radius: 11px;
    background-image: linear-gradient(#d4a373 60%, #fefae0);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    margin: 10px 0;
    color: #fefae0;
    font-size: 16px;
    font-weight: 700;
  }
`;
