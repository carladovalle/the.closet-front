/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TokenContext from '../Contexts/TokenContext';

export default function WishButton({ id, userWishlist, productPage }) {
  const { token, userId } = useContext(TokenContext);
  const [isLiked, setIsLiked] = useState(
    userWishlist.find((value) => value === userId)
  );
  const config = { headers: { Authorization: token } };
  const navigate = useNavigate();

  // useEffect(() => {
  //   async function fetchData() {
  //     const likedProducts = await axios.get(
  //       'https://back-projeto14-the-closet.herokuapp.com/wishlist',
  //       config
  //     );
  //     const hasProduct = likedProducts.data.find(
  //       (value) => value.productId === id
  //     );

  //     if (hasProduct) {
  //       setIsLiked(true);
  //     }
  //   }
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   if (isWishlisted) {
  //     setIsLiked(true);
  //   }
  // }, []);

  async function handleWishlist() {
    if (isLiked) {
      try {
        await axios.delete(
          `https://back-projeto14-the-closet.herokuapp.com/wishlist/${id}`,
          config
        );
        await axios.put(
          `https://back-projeto14-the-closet.herokuapp.com/wishlist/${id}`,
          { status: false },
          config
        );
        setIsLiked(false);
      } catch (error) {
        alert(error.response.data);
      }
    }

    if (!isLiked) {
      try {
        console.log('oi');
        await axios.post(
          `https://back-projeto14-the-closet.herokuapp.com/wishlist/${id}`,
          {},
          config
        );
        await axios.put(
          `https://back-projeto14-the-closet.herokuapp.com/wishlist/${id}`,
          { status: true },
          config
        );
        setIsLiked(true);
      } catch (error) {
        alert(error.response.data);
        navigate('/login');
      }
    }
  }

  return (
    <Wish onClick={handleWishlist} productPage={productPage}>
      {isLiked ? (
        <ion-icon name="heart-sharp" />
      ) : (
        <ion-icon name="heart-outline" />
      )}
    </Wish>
  );
}

const Wish = styled.button`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => (props.productPage ? '40px' : '30px')};
    height: ${(props) => (props.productPage ? '40px' : '30px')};
    border: none;
    border-radius: 50px;
    top: ${(props) => (props.productPage ? '60px' : '10px')};
    left: ${(props) => (props.productPage ? '30px' : '10px')};
    position: absolute;
    background-color: rgba(73, 72, 72, 0.2);

    ion-icon {
      font-size: 20px;
      color: #643232;
    }
  }
`;
