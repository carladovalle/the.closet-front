/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

export default function SignUp() {
  return (
    <Wrapper>
      <LoginContainer>
        <ion-icon name="shirt-outline" />
        <h1>Crie sua conta!</h1>
        <Form>
          <section>
            <label htmlFor="user">Nome de usuário:</label>
            <input
              type="text"
              name="user"
              id="user"
              placeholder="Digite seu username"
              required
            />
          </section>
          <section>
            <label htmlFor="email"> E-mail:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu e-mail"
              required
            />
          </section>
          <section>
            <label htmlFor="password"> Senha:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Digite sua senha"
              required
            />
          </section>
          <section>
            <label htmlFor="confirmPassword"> Confirme sua senha:</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirme a senha digitada anteriormente"
              required
            />
          </section>
          <button type="submit">Cadastrar</button>
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

const Form = styled.main`
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
