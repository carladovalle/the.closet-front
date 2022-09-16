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

  useEffect(() => {

    async function getProduct() {

      try {
        const { data } = await axios.get("http://localhost:5000/product");
        console.log(data);
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

  async function addComment(e) {
    e.preventDefault();
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
                <h2>{product.name}</h2>
                <h2>{product.price}</h2>
                <img src={product.image} />
                <h2>{product.description}</h2>
                <input
                type="text"
                name="color"
                id="color"
                placeholder="Digite a cor"
                onChange={handleForm}
                />
                <input
                type="size"
                name="size"
                id="size"
                placeholder="Digite o tamanho"
                onChange={handleForm}
              />
            <Button onClick={() => addCart()}>Adicionar ao carrinho</Button>
            <Button onClick={() => addWishlist()}>Adicionar na lista de desejos</Button>
            <form>
              <input placeholder="Digite seu nome" value={nameComment} onChange={e => setNameComment(e.target.value)} />
              <input placeholder="Digite seu comentário" value={comment} onChange={e => setComment(e.target.value)} />
              <Button onClick={addComment}>Enviar comentário</Button>
            </form>
        </Wrapper>
        <BottomMenu />
    </>
  );
}

const Wrapper = styled.main`
  height: 100%;
  width: 100%;
  overflow-y: scroll;

  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 12px;
    font-weight: 500;
    color: #d4a373;
  }
`;
const Button = styled.button`
  width: 50px;
  height: 50px;
  background-color: #d4a373;
  font-size: 6px;
`
const Input = styled.input`
  width: 50px;
  height: 50px;
`