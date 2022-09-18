/* eslint-disable */


import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BottomMenu from '../../Common/BottomMenu';
import HeaderMenu from '../../Common/TopBar/TopMenu';
import TokenContext from "../../Contexts/TokenContext";

export default function Product() {

  const { token } = useContext(TokenContext);
  const [checkoutData, setCheckoutData] = useState({});
  const navigate = useNavigate();

  function handleForm(e) {
    setCheckoutData({
      ...checkoutData,
      [e.target.name]: e.target.value,
    });
  }

  async function checkout(event) {

    event.preventDefault();

    const {
      cpf,
      name,
      lastName,
      PhoneNumber,
      emailAdress,
      confirmEmailAdress,
      cep,
      state,
      city,
      district,
      adress,
      number,
      complement,
      reference
    } = checkoutData;

    const config = {
      headers: {Authorization: `Bearer ${token}`}
    }

    try {
      const checkout = await axios.post('https://back-projeto14-the-closet.herokuapp.com/checkout', {
        cpf,
        name,
        lastName,
        PhoneNumber,
        emailAdress,
        confirmEmailAdress,
        cep,
        state,
        city,
        district,
        adress,
        number,
        complement,
        reference
      }, config);
      alert('Compra efetuada com sucesso!');
      navigate('/');
      console.log(checkout.data);
    } catch (error) {
      alert(error.response.data);
    }
  }

  return (
    <>
        <HeaderMenu />
        <Wrapper>
        <PersonalInformation>
            <h1>Informações de contato</h1>
            <form>
              <input
                    type="text"
                    name="cpf"
                    id="cpf"
                    placeholder="CPF"
                    onChange={handleForm}
                    required
                />
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nome"
                    onChange={handleForm}
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Sobrenome"
                    onChange={handleForm}
                    required
                />
                <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Número de telefone"
                    onChange={handleForm}
                    required
                />
                <input
                    type="email"
                    name="emailAdress"
                    id="emailAdress"
                    placeholder="Email"
                    onChange={handleForm}
                    required
                />
                <input
                    type="email"
                    name="confirmEmailAdress"
                    id="confirmEmailAdress"
                    placeholder="Confirme seu email"
                    onChange={handleForm}
                    required
                />
            </form>
            </PersonalInformation>
            <DeliveryAddress>
              <h1>Endereço de Entrega</h1>
              <form>
                <input
                    type="text"
                    name="cep"
                    id="cep"
                    placeholder="CEP"
                    onChange={handleForm}
                    required
                />
                <input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="Estado"
                    onChange={handleForm}
                    required
                />
                <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Cidade"
                    onChange={handleForm}
                    required
                />
                <input
                    type="text"
                    name="district"
                    id="district"
                    placeholder="Bairro"
                    onChange={handleForm}
                    required
                />
                <input
                    type="text"
                    name="adress"
                    id="adress"
                    placeholder="Endereço"
                    onChange={handleForm}
                    required
                />
                <input
                    type="text"
                    name="number"
                    id="number"
                    placeholder="Número"
                    onChange={handleForm}
                    required
                />
                <input
                    type="text"
                    name="complement"
                    id="complement"
                    placeholder="Complemento"
                    onChange={handleForm}
                    required
                />
                <input
                    type="text"
                    name="reference"
                    id="reference"
                    placeholder="Referência"
                    onChange={handleForm}
                    required
                />
              </form>
            </DeliveryAddress>

          
            <button type="submit" onClick={checkout}>Efetuar compra</button>
        </Wrapper>
        <BottomMenu />
    </>
  );
}

const Wrapper = styled.main`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;


  h1 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 14px;
    margin-left: 10px;
    margin-top: 5px;
  }

  .option {
    display: flex;
    flex-direction: row;
  }

  form {
    margin-bottom: 20px;
  }

  button {
    width: 40%;
    height: 30px;
    border: none;
    border-radius: 11px;
    background-image: linear-gradient(#d4a373 60%, #fefae0);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    margin: 10px 0;
    color: #fefae0;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 100px;

    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
    &:active {
      filter: brightness(0.85);
      transform: scale(95%);
    }
  }
`;

const PersonalInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;

  input {
      margin-right: 10px;
      margin-bottom: 10px;
      width: 180px;
      height: 50px;
    }
`;

const DeliveryAddress = styled.div`
  display: flex;
  flex-direction: column;

  input {
      margin-right: 10px;
      margin-bottom: 10px;
      width: 180px;
      height: 50px;
    }
`;


const DeliveryType = styled.div`
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;
    width: 20px;
    height: 20px;
  }
`;

const PaymentMethods = styled.div`
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;
    width: 20px;
    height: 20px;
  }
  
`;