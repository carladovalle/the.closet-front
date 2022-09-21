/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BottomMenu from '../../Common/BottomMenu';
import HeaderMenu from '../../Common/TopBar/TopMenu';
import ProductWish from './ProductWish';
import TokenContext from '../../Contexts/TokenContext';
import AlertWindow from '../../Common/AlertWindow';
import EmptyWishlist from './EmptyWishlist';

export default function Wishlist() {
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const { token } = useContext(TokenContext);
  const navigate = useNavigate();
  const config = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    async function fetchData() {
      try {
        const filteredProducts = await axios.get(
          'https://back-projeto14-the-closet.herokuapp.com/wishlist',
          { headers: { Authorization: token } }
        );
        setWishlistProducts(filteredProducts.data);
      } catch (error) {
        alert(error.response.data);
      }
    }
    if (token) {
      fetchData();
    }
  }, []);

  if (!token) {
    return <AlertWindow page="à Wishlist" />;
  }

  async function cleanWishlist() {
    try {
      if (
        window.confirm(
          'Você tem certeza que quer tirar TODOS os itens da sua wishlist?'
        )
      ) {
        await axios.delete(
          `https://back-projeto14-the-closet.herokuapp.com/wishlist/clean`,
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
    <>
      <HeaderMenu />
      <Wrapper>
        <h1>Minha Wishlist</h1>
        <section>
          {wishlistProducts.length > 0 ? (
            wishlistProducts.map(({ name, price, image, productId }, index) => (
              <ProductWish
                key={index}
                name={name}
                price={price}
                image={image}
                id={productId}
                setWishlistProducts={setWishlistProducts}
                config={config}
              />
            ))
          ) : (
            <EmptyWishlist />
          )}
          {wishlistProducts.length > 0 ? (
            <div onClick={cleanWishlist}>Remover todos os itens</div>
          ) : (
            ''
          )}
        </section>
      </Wrapper>
      <BottomMenu />
    </>
  );
}

const Wrapper = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 65px 20px;

  h1 {
    margin-bottom: 30px;
    font-size: 28px;
    font-weight: 500;
    color: #5b3e40;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    span {
      font-size: 22px;
      text-align: center;
      color: #c3c3c3;
    }

    > div {
      margin-top: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 210px;
      height: 40px;
      border-radius: 40px;
      background-color: #e97171;
      box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.3);
      font-weight: 500;
      color: #fefae0;
    }
  }
`;
