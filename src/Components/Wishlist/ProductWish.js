/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function ProductWish({
  name,
  price,
  image,
  id,
  setWishlistProducts,
  config,
}) {
  const navigate = useNavigate();

  async function deleteWishProduct() {
    try {
      if (
        window.confirm(
          'Você tem certeza que quer tirar esse item da sua wishlist?'
        )
      ) {
        await axios.delete(
          `https://back-projeto14-the-closet.herokuapp.com/wishlist/${id}`,
          config
        );
        const newProductsChoosed = await axios.get(
          'https://back-projeto14-the-closet.herokuapp.com/wishlist',
          config
        );
        setWishlistProducts(newProductsChoosed.data);
      }
    } catch (error) {
      alert(error.response.data);
      navigate('/');
    }
  }

  return (
    <ProductCard>
      <img src={image} alt="tenis" onClick={() => navigate(`/product/${id}`)} />
      <ion-icon name="trash" onClick={deleteWishProduct} />
      <div onClick={() => navigate(`/product/${id}`)}>
        <h2>{name}</h2>
        <h3>FRETE GRÁTIS</h3>
        <h4>
          {(price / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </h4>
        <h5>
          ou 6x de{' '}
          {(price / 100 / 6).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </h5>
      </div>
    </ProductCard>
  );
}

const ProductCard = styled.article`
  width: 100%;
  height: 120px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  gap: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 2px rgba(87, 54, 5, 0.315);
  overflow: hidden;

  img {
    width: 120px;
  }
  ion-icon {
    position: absolute;
    font-size: 22px;
    bottom: 10px;
    right: 10px;
    color: rgba(71, 18, 4, 0.6);
  }

  div {
    display: flex;
    flex-direction: column;
    width: 60%;
    gap: 2px;

    h2 {
      font-weight: 500;
    }

    h3 {
      font-size: 12px;
      font-weight: 700;
      color: green;
    }

    h4 {
      margin-top: 15px;
      font-size: 18px;
      font-weight: 700;
    }

    h5 {
      font-size: 12px;
      font-style: italic;
    }
  }
`;
