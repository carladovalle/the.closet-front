/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import styled from 'styled-components';

export default function Product() {
  return <ProductStyle />;
}

const ProductStyle = styled.div`
  width: 100px;
  height: 150px;
  background-color: red;
  margin-bottom: 8px;
`;
