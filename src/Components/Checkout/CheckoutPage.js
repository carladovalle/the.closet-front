/* eslint-disable */


import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BottomMenu from '../../Common/BottomMenu';
import HeaderMenu from '../../Common/TopBar/TopMenu';
import TokenContext from "../../Contexts/TokenContext";
import OrderSummary from './OrderSummary';

export default function CheckoutPage() {
  const [productsInChart, setProductsInChart] = useState([])
  const { token } = useContext(TokenContext);
  const [checkoutData, setCheckoutData] = useState({});
  const navigate = useNavigate();
  const [isDone, setIsDone] = useState(false)
  const config = {
    headers: {Authorization: `Bearer ${token}`}
  }

  useEffect(() => {
    async function fetchData(){
      try {
        const boughtProducts = await axios.get("https://back-projeto14-the-closet.herokuapp.com/chart", config);
        setProductsInChart(boughtProducts.data);
      } catch (error) {
        alert(error.response.data);
        navigate("/login");
      }
    }
    fetchData()
  }, [])
  
  function handleForm(e) {
    setCheckoutData({
      ...checkoutData,
      [e.target.name]: e.target.value,
    });
    console.log(checkoutData)
  }

  async function checkout(event) {

    event.preventDefault();

    try {
      await axios.put('https://back-projeto14-the-closet.herokuapp.com/checkout', {buyerData: checkoutData, order: productsInChart}, config);
      setIsDone(true)
      await axios.delete('https://back-projeto14-the-closet.herokuapp.com/checkout', config)
    } catch (error) {
      alert(error.response.data);
      navigate("/login");
    }
  }

  return (
    <>
        {isDone ? <OrderSummary checkoutData={checkoutData} productsInChart={productsInChart}/> : ""}
        <HeaderMenu />
        <Wrapper isDone={isDone}>
        <Infos>
        <PersonalInformation>
            <h1>Informações de Contato</h1>
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
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Telefone"
                    onChange={handleForm}
                    
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
                <select
                    type="text"
                    name="state"
                    id="state"
                    onChange={handleForm}
                    required
                >
                <option value="" disabled selected>Estado</option>
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AM">AM</option>
                <option value="AP">AP</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MG">MG</option>
                <option value="MS">MS</option>
                <option value="MT">MT</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="PR">PR</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="RS">RS</option>
                <option value="SP">SP</option>
                <option value="SC">SC</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
                </select>
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
            <DeliveryType>
              <h1>Forma de Entrega</h1>
              <div className="pay">
              <input
                    type="radio"
                    name="deliveryType"
                    value="Expresso"
                    onChange={handleForm}
                    checked
              />
              <h3>Expresso - Em até 7 dias úteis</h3>
              </div>
              <div className="pay">             
              <input
                    type="radio"
                    name="deliveryType"
                    value="Agendada"
                    onChange={handleForm}
              />
              <h3>Agendado - Em até 30 dias úteis</h3>
              </div>
            </DeliveryType>
            <PaymentMethods>
              <h1>Forma de Pagamento</h1>
              <div className="pay">
              <input
                    type="radio"
                    name="paymentMethods"
                    value="Pix"
                    onChange={handleForm}
                    checked
              />
              <h3>Pix</h3>
              </div>
              <div className="pay">             
              <input
                    type="radio"
                    name="paymentMethods"
                    value="Cartão de Crédito"
                    onChange={handleForm}
              />
              <h3>Cartão de crédito - Em até 10 vezes sem juros</h3>
              </div>
            </PaymentMethods>
            <Card>
              <input
                    type="text"
                    name="numberCard"
                    id="numberCard"
                    placeholder="Número do cartão"
                    onChange={handleForm}
              />
              <input
                    type="text"
                    name="nameCard"
                    id="nameCard"
                    placeholder="Nome impresso no cartão"
                    onChange={handleForm}
              />
              <input
                    type="date"
                    name="dateCard"
                    id="dateCard"
                    placeholder="Data de vencimento"
                    onChange={handleForm}
              />
              <input
                    type="text"
                    name="codeCard"
                    id="codeCard"
                    placeholder="Código de segurança"
                    onChange={handleForm}
              />
              <input
                    type="text"
                    name="cpfCard"
                    id="cpfCard"
                    placeholder="CPF"
                    onChange={handleForm}
              />
              <select
                    type="text"
                    name="installments"
                    id="installments"
                    onChange={handleForm}
              >
                  <option value="" disabled selected>Parcelas</option>
                  <option value="0">0</option>
                  <option value="2">2</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                </select>
            </Card>
            </Infos>
            <button type="submit" onClick={checkout}>Efetuar compra</button>
            
        </Wrapper>
        <BottomMenu />
        
    </>
  );
}

const Wrapper = styled.main`
  height: ${props => props.isDone ? "0" : "100%"};
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 18px;
    margin-bottom: 15px;
    color: #5b3e40;
    font-weight: 500;
    text-align: start;
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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  button {
    width: 60%;
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
    margin-top: 30px;

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

const Infos = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  border: 1px solid #d4a373;
  border-radius: 5px;
  background-color: #FFFFFF;
  width: 90%;
  margin-top: 80px;
`

const PersonalInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 50px;

  h1 {
    font-size: 18px;
    margin-bottom: 15px;
    color: #5b3e40;
    font-weight: 500;
    text-align: start;
  }

  input {
      margin-right: 10px;
      margin-bottom: 10px;
      width: 90%;
      height: 35px;
      border: 1px solid #ced4da;

      &::placeholder {
        color: #495057;
      }
    }
`;

const DeliveryAddress = styled.div`
  display: flex;
  flex-direction: column;
  color: #495057;
  margin-left: 50px;

  input {
      margin-right: 10px;
      margin-bottom: 10px;
      width: 90%;
      height: 35px;
      border: 1px solid #ced4da;
  }
  select {
    margin-right: 10px;
    margin-bottom: 10px;
    width: 90%;
    height: 35px;
    background-color: #FFFFFF;
    border: 1px solid #ced4da;
    color: #495057;
  }
`;

const PaymentMethods = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-left: 50px;

  h3 {
    width: 250px;
    font-size: 15px;
    color: #495057;
    margin-left: 5px;
    margin-top: 5px;
  }
  .pay {
    display: flex;
    flex-direction: row;
  }
  input {
    margin-bottom: 10px;
    width: 20px;
    height: 20px;
  }
`;

const DeliveryType = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-left: 50px;

  h3 {
    font-size: 15px;
    color: #495057;
    margin-left: 5px;
    margin-top: 5px;
  }
  .pay {
    display: flex;
    flex-direction: row;
  }
  input {
    margin-bottom: 10px;
    width: 20px;
    height: 20px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  color: #495057;
  margin-left: 50px;
  margin-bottom: 20px;

  input {
      margin-right: 10px;
      margin-bottom: 10px;
      width: 90%;
      height: 35px;
      border: 1px solid #ced4da;
      color: #495057;
  }
  select {
    margin-right: 10px;
    margin-bottom: 10px;
    width: 90%;
    height: 35px;
    background-color: #FFFFFF;
    border: 1px solid #ced4da;
    color: #495057;
  }
`