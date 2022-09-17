/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import styled from 'styled-components';
import BottomMenu from '../../Common/BottomMenu';
import SearchBar from '../../Common/SearchBar';
import TopMenu from '../../Common/TopBar/TopMenu';
import Banner from './Banner';
import Product from './Product';

export default function Home() {
  return (
    <>
      <TopMenu />
      <Wrapper>
        <Banner />
        <SearchBar />
        <ProductsContainer>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </ProductsContainer>
        <h1>PÁGINA PRINCIPAL EM CONSTRUÇÃO</h1>
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
  padding: 65px 0;

  > h1 {
    margin-bottom: 10px;
    margin-left: 20px;
    font-size: 28px;
    font-weight: 500;
    color: #5b3e40;
  }
`;

const ProductsContainer = styled.div`
  width: 100%;
  padding: 15px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
