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
  console.log(product)

  useEffect(() => {

    async function getProduct() {

      try {
        const produtos = await axios.get("http://localhost:5000/product");
        console.log(produtos.data);
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
    
    const { color, size } = productData;

    const config = {
      headers: {Authorization: `Bearer ${token}`}
    }

    try {
      const { data } = await axios.post('http://localhost:5000/cart', {
        color,
        size
      }, config);
      alert('Produto adicionado com sucesso no carrinho!');
      navigate('/');
      console.log(data.token);
    } catch (error) {
      alert(error.response.data);
    }
  }

  async function addWishlist() {

    const { color, size } = productData;

    const config = {
      headers: {Authorization: `Bearer ${token}`}
    }
    
    try {
      const { data } = await axios.post('http://localhost:5000/wishlist', {
        color,
        size
      }, config);
      alert('Produto adicionado com sucesso na lista de desejos!');
      navigate('/');
      console.log(data.token);
    } catch (error) {
      alert(error.response.data);
    }
  }

  async function addComment() {
    try {
      await axios.post('http://localhost:5000/reviews', {
        nameComment,
        comment
      });
      alert('Comentário adicionado com sucesso');
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
                <h2>R$ {((product.price)/100).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}</h2>
                <h6> ou R$ {((product.price)/100/6).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}</h6>
                <h5>FRETE GRÁTIS</h5>
                <h3>{product.description}</h3>
                <h4>Cor:</h4>
                <select id="color" name="color" onChange={handleForm}>
                  { product.length === 0 ? "" : 
                  product.color.map((value) => <option>{value}</option>)}
                </select>
                <h4>Tamanho:</h4>
                <select id="size" name="size" onChange={handleForm}>
                  { product.length === 0 ? "" : 
                  product.size.map((value) => <option>{value}</option>)}
                </select>
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
          <form>
              <h1>Avaliações</h1>
                <input 
                  placeholder="Digite seu nome" 
                  value={nameComment} 
                  onChange={e => setNameComment(e.target.value)} 
                />
                <input 
                  placeholder="Digite seu comentário" 
                  value={comment} 
                  onChange={e => setComment(e.target.value)} 
                />
              <button onClick={addComment}>Enviar comentário</button>
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
  justify-content: center;
  align-items: center;

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
  }

  h4 {
    font-size: 18px;
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

  h6 {
    font-size: 18px;
    font-weight: 700;
    color: #d4a373;
    margin-bottom: 10px
  }

  .zoom {
	overflow: hidden;
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
    width: 320px;
    height: 320px;
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
    width: 400px;
    height: 100px;
`

const Options = styled.div`
  display: flex;
  flex-direction: row;
`

const PrincipalInformation = styled.div`
  display: flex;
  margin-top: 100px;
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