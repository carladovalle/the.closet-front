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
import BottomMenu from '../../Common/BottomMenu';
import HeaderMenu from '../../Common/TopBar/TopMenu';
import ProductWish from './ProductWish';
import TokenContext from '../../Contexts/TokenContext';
import AlertWindow from '../../Common/AlertWindow';

export default function Wishlist() {
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const { token } = useContext(TokenContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const filteredProducts = await axios.get(
          'http://localhost:5000/wishlist',
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

  return (
    <>
      <HeaderMenu />
      <Wrapper>
        <h1>Wishlist</h1>
        <section>
          {wishlistProducts.length > 0 ? (
            wishlistProducts.map(({ name, price, image, _id }, index) => (
              <ProductWish
                key={index}
                name={name}
                price={price}
                image={image}
                id={_id}
                setWishlistProducts={setWishlistProducts}
              />
            ))
          ) : (
            <>
              <span>
                Infelizmente, não há produtos na sua wishlist. Dê uma olhadinha
                nos nossos produtos e escolha seus favoritos
              </span>
              <button>Encontrar produtos</button>
            </>
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
  }
`;
