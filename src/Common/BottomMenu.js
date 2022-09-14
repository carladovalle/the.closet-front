/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function BottomMenu() {
  const navigate = useNavigate();

  return (
    <Menu>
      <ion-icon name="home-outline" onClick={() => navigate('/')} />
      <ion-icon name="search-outline" onClick={() => navigate('/search')} />
      <ion-icon name="heart-outline" onClick={() => navigate('/wishlist')} />
      <ion-icon name="cart-outline" onClick={() => navigate('/checkout')} />
    </Menu>
  );
}

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100vw;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0 20px;
  border-top: 1px solid #c3c3c3;

  ion-icon {
    font-size: 20px;
    color: #5b3e40;
  }
`;
