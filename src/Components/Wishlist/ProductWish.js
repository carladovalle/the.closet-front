/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TokenContext from '../../Contexts/TokenContext';

/* eslint-disable react/react-in-jsx-scope */
export default function ProductWish({
  name,
  price,
  image,
  id,
  setWishlistProducts,
}) {
  const navigate = useNavigate();
  const { token } = useContext(TokenContext);
  const config = { headers: { Authorization: `Bearer ${token}` } };

  async function deleteWishProduct() {
    try {
      if (
        window.confirm(
          'Você tem certeza que quer tirar esse item da sua wishlist?'
        )
      ) {
        await axios.delete(`http://localhost:5000/wishlist/${id}`, config);
        const newProductsChoosed = await axios.get(
          'http://localhost:5000/chart',
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
    <ProductCard onClick={() => navigate(`/product/${id}`)}>
      <img src={image} alt="tenis" />
      <ion-icon name="close-circle" onClick={deleteWishProduct} />
      <div>
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
    top: 10px;
    right: 10px;
    color: rgba(71, 18, 4, 0.6);
  }

  div {
    display: flex;
    flex-direction: column;
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
