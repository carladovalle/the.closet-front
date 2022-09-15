/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

export default function HeaderMenu() {
  return <Header />;
}

const Header = styled.div`
  height: 50px;
  width: 100vw;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid #c3c3c3;
`;
