/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function WishButton({ inWishlist, id }) {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (inWishlist) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, []);

  async function handleWishlist() {
    if (isLiked) {
      setIsLiked(false);
      try {
        await axios.delete(
          'https://back-projeto14-the-closet.herokuapp.com/wishlist',
          'config'
        );
        await axios.put(
          'https://back-projeto14-the-closet.herokuapp.com/wishlist',
          'config'
        );
      } catch (error) {
        alert(error.response.data);
      }
    }

    if (!isLiked) {
      setIsLiked(true);
      try {
        await axios.post(
          'https://back-projeto14-the-closet.herokuapp.com/wishlist',
          id,
          'config'
        );
        await axios.put(
          'https://back-projeto14-the-closet.herokuapp.com/wishlist',
          'config'
        );
      } catch (error) {
        alert(error.response.data);
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
