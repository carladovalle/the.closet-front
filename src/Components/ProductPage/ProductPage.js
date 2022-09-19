/* eslint-disable */

import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import BottomMenu from '../../Common/BottomMenu';
import HeaderMenu from '../../Common/TopBar/TopMenu';
import TokenContext from "../../Contexts/TokenContext";

export default function Product() {
  const {id} = useParams()
  const [product, setProduct] = useState([]);
  const { token } = useContext(TokenContext);
  const [productData, setProductData] = useState({});
  const navigate = useNavigate();
  const [nameComment,setNameComment] = useState("");
  const [comment,setComment] = useState("");

  useEffect(() => {

    async function getProduct() {

      try {
        const produtos = await axios.get(`https://back-projeto14-the-closet.herokuapp.com/product/${id}`);
        setProduct(produtos.data);
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

  async function addCart() {
    
    const config = {
      headers: {Authorization: `Bearer ${token}`}
    }

    try {
      await axios.post(`https://back-projeto14-the-closet.herokuapp.com/chart/${id}`, product, config);
      alert('Produto adicionado com sucesso no carrinho!');
      navigate('/chart');
    } catch (error) {
      alert(error.response.data);
      navigate('/login');
    }
  }

  async function addWishlist() {

    const config = {
      headers: {Authorization: `Bearer ${token}`}
    }
    
    try {
      await axios.post(`https://back-projeto14-the-closet.herokuapp.com/wishlist/${id}`, {}, config);
      alert('Produto adicionado com sucesso na lista de desejos!');
      navigate('/');
    } catch (error) {
      alert(error.response.data);
    }
  }

  async function addComment(event) {

    event.preventDefault();

    try {
      await axios.put(`https://back-projeto14-the-closet.herokuapp.com/product/${id}`, {
        nameComment,
        comment
      });
      alert('Comentário adicionado com sucesso!');
      const newProducts = await axios.get(`https://back-projeto14-the-closet.herokuapp.com/product/${id}`);
        setProduct(newProducts.data);
    } catch (error) {
      alert(error.response.data);
    }
  }

  return (
    <>
        <HeaderMenu />
        <Wrapper>
          <PrincipalInformation>
            <div className="zoom">
              <img src={product.image} />
            </div>
            <Infos>
                <h1>{product.name}</h1>
                <h2>{((product.price)/100).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}</h2>
                <h6> ou 6x de {((product.price)/100/6).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}</h6>
                <h5>FRETE GRÁTIS</h5>
                <h3>{product.description}</h3>
                <Choices>
                <h4>Cor:</h4>
                  <select id="color" name="color" onChange={handleForm}>
                    { product.length === 0 ? "" : 
                      product.color.map((value, index) => <option key={index} >{value}</option>)}
                    </select>
                  <h4>Tamanho:</h4>
                  <select id="size" name="size" onChange={handleForm}>
                    { product.length === 0 ? "" : 
                    product.size.map((value, index) => <option key={index} >{value}</option>)}
                  </select>
                </Choices>
                <Options>
                  <button onClick={() => addCart()}>Adicionar ao carrinho</button>
                  <div className="wishlist" 
                    onClick={() => addWishlist()}
                  >
                      <ion-icon name="heart-outline" onClick={() => addWishlist()} />
                  </div>
                </Options>
            </Infos>
          </PrincipalInformation>
          <Reviews>
            <div className='reviews' id="comments" name="comments" onChange={handleForm}>
              <h1>Avaliações de clientes</h1>
                    { product.length === 0 ? "" : 
                    product.comments.map((value, index) => <p key={index} >
                      {value.nameComment}: {value.comment}
                      </p>)}
              </div>
            <form>
                <h1>Avalie este produto</h1>
                  <input 
                    placeholder="Digite seu nome" 
                    value={nameComment} 
                    onChange={(e) => setNameComment(e.target.value)} 
                  />
                  <input 
                    placeholder="Digite seu comentário" 
                    value={comment} 
                    onChange={(e) => setComment(e.target.value)} 
                  />
                <div className="send" onClick={addComment}>Enviar comentário</div>
              </form>
          </Reviews>
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
  justify-content: center;

  h1 {
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 700;
    color: #5b3e40;
  }

  h2 {
    font-size: 20px;
    font-weight: 700;
    color: #d4a373;
    margin-bottom: 5px
  }

  h3 {
    font-size: 15px;
    font-weight: 400;
    color: #d4a373;
    word-wrap: break-word;
    margin-top: 10px;
    text-align: justify;
  }

  h4 {
    font-size: 18px;
    font-weight: 500;
    color: #d4a373;
    margin-bottom: 10px;
    margin-top: 15px;
    margin-right: 5px;
  }

  h5 {
      font-size: 15px;
      font-weight: 700;
      color: green;
      margin-bottom: 10px;
  }

  h6 {
    font-size: 15px;
    font-weight: 500;
    color: #d4a373;
    margin-bottom: 10px
  }

  .zoom {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 4px 1px rgba(30, 54, 5, 0.315);
  }

  .zoom img {
	max-width: 100%;
	-moz-transition: all 0.3s;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
  }

  .zoom:hover img {
	-moz-transform: scale(1.1);
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
  }

  img {
    width: 45%;
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
    margin-right: 20px;

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

    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
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
    width: 100%;
    height: auto;
    margin-top: 40px;
    padding: 0 20px;
`

const Choices = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`

const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`

const PrincipalInformation = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
`;

const Reviews = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 150px;
  border: 1px solid #d4a373;
  border-radius: 5px;
  background-color: #FFFFFF;
  width: 90%;

  h1 {
    margin-bottom: 12px;
    font-size: 22px;
    font-weight: 500;
    margin-top: 30px;
    color: #d4a373;
    text-align: center;
  }

  .reviews {
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
      font-size: 15px;
      font-weight: 400;
      color: #5b3e40;
      margin-bottom: 10px;
      margin-top: 10px;
    }
  }

  form {
    margin-top: 0;
  }

  input {
    border: none;
    border-bottom: 1px solid #c3c3c3;
    background-color: inherit;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .send {
    width: 120px;
    height: 30px;
    border-radius: 11px;
    margin: 10px 0;
    color: #fefae0;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 30px;
    background-color: #d4a373;
    display: flex;
    justify-content: center;
    align-items: center;

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
