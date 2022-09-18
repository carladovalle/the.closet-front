/* eslint-disable */


import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BottomMenu from '../../Common/BottomMenu';
import HeaderMenu from '../../Common/TopBar/TopMenu';
import TokenContext from "../../Contexts/TokenContext";

export default function Product() {

  const [product, setProduct] = useState([]);
  const { token } = useContext(TokenContext);
  const [productData, setProductData] = useState({});
  const navigate = useNavigate();
  const [nameComment,setNameComment] = useState("");
  const [comment,setComment] = useState("");
  const [reviews, setReviews] = useState({});

  useEffect(() => {

    async function getProduct() {

      try {
        const { data } = await axios.get("http://localhost:5000/product");
        //console.log(data.color);
        setProduct(data);
      } catch (error) {
        console.log(error.response);
      }
    }

    getProduct();
    
  }, []);

  function handleForm(e) {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  }

  async function checkout() {
    
    const { color, size } = productData;

    const config = {
      headers: {Authorization: `Bearer ${token}`}
    }

    try {
      const { data } = await axios.post('http://localhost:5000/checkout', {
        color,
        size
      }, config);
      alert('Compra efetuada com sucesso!');
      navigate('/');
      console.log(data.token);
    } catch (error) {
      alert(error.response.data);
    }
  }

  return (
    <>
        <HeaderMenu />
        <Wrapper>
          <OrderSummary>
            <img src={product.image} />
            <Infos>
                <h1>{product.name}</h1>
                <h2>R$ {product.price}</h2>
                <h2> ou R$ {product.price}</h2>
                <h4>Cor: (colocar cor escolhida)</h4>
                <h4>Tamanho: (colocar tamanho escolhido)</h4>
                <button>Adicionar ao carrinho</button>
            </Infos>
          </OrderSummary>
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
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 12px;
    font-size: 10px;
    font-weight: 700;
    color: #5b3e40;
  }

  h2 {
    font-size: 10px;
    font-weight: 700;
    color: #d4a373;
    margin-bottom: 5px
  }

  h4 {
    font-size: 10px;
    font-weight: 500;
    color: #d4a373;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  h5 {
      font-size: 10px;
      font-weight: 700;
      color: green;
      margin-bottom: 10px;
  }

  img {
    width: 90px;
    height: 90px;
    margin-right: 24px;
    border-radius: 5px;
    box-shadow: 0 2px 4px 1px rgba(30, 54, 5, 0.315);
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center; 
    flex-direction: column;
    margin-top: 40px;
  }

  select {
    border: none;
    border-bottom: 1px solid #c3c3c3;
    background-color: inherit;

    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }

  .wishlist {
    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }

  ion-icon {
    width: 30px;
    height: 30px;
    color: #d4a373;
    margin-left: 30px;
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
    width: 400px;
    height: 100px;
`

const Options = styled.div`
  display: flex;
  flex-direction: row;
`

const OrderSummary = styled.div`
  display: flex;
  margin-top: 100px;
  background: red;
`;

const Reviews = styled.div`

  input {
    border: none;
    border-bottom: 1px solid #c3c3c3;
    background-color: inherit;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  button {
    width: 150px;
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
`