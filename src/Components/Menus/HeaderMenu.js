/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import logo from '../../assets/logo.svg';

export default function HeaderMenu() {
  return (
    <Header>
      <ion-icon name="reorder-four-outline" />
      <img src={logo} alt="logo" />
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100vw;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid #c3c3c3;

  ion-icon {
    font-size: 22px;
    color: #5b3e40;
    position: absolute;
    left: 20px;
  }
`;
