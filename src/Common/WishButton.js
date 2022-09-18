/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import { useState } from 'react';
import styled from 'styled-components';

export default function WishButton() {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <Wish onClick={() => setIsLiked(!isLiked)}>
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
