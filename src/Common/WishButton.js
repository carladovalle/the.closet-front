/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TokenContext from '../Contexts/TokenContext';

export default function WishButton({ id }) {
  const [isLiked, setIsLiked] = useState(false);
  const { token } = useContext(TokenContext);
  const config = { headers: { Authorization: token } };
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const likedProducts = await axios.get(
        'https://back-projeto14-the-closet.herokuapp.com/wishlist',
        config
      );
      const hasProduct = likedProducts.data
        .map((value) => value._id)
        .find((value) => value === id);

      if (hasProduct) {
        setIsLiked(true);
      }
    }
    fetchData();
  }, []);

  async function handleWishlist() {
    if (isLiked) {
      try {
        await axios.delete(
          `https://back-projeto14-the-closet.herokuapp.com/wishlist/${id}`,
          config
        );
        setIsLiked(false);
      } catch (error) {
        alert(error.response.data);
      }
    }

    if (!isLiked) {
      try {
        await axios.post(
          `https://back-projeto14-the-closet.herokuapp.com/wishlist/${id}`,
          {},
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
    <Wish onClick={handleWishlist}>
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
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50px;
    top: 10px;
    left: 10px;
    position: absolute;
    background-color: rgba(73, 72, 72, 0.2);

    ion-icon {
      font-size: 20px;
      color: #643232;
    }
  }
`;
