/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

export default function BottomMenu() {
  return <Menu />;
}

const Menu = styled.div`
  height: 50px;
  width: 100vw;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #c3c3c3;
`;
