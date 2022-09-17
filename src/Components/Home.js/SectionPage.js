/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import BottomMenu from '../../Common/BottomMenu';
import TopMenu from '../../Common/TopBar/TopMenu';
import ProductCard from './ProductCard';
import femaleBanner from '../../assets/banner-fem.png';
import maleBanner from '../../assets/banner-masc.png';
import winterBanner from '../../assets/banner-winter.png';
import summerBanner from '../../assets/banner-summer.png';
import shoesBanner from '../../assets/banner-shoes.png';

export default function SectionPage() {
  const { category } = useParams();

  function selectBanner() {
    switch (category) {
      case 'masculino':
        return maleBanner;
      case 'feminino':
        return femaleBanner;
      case 'inverno':
        return winterBanner;
      case 'verao':
        return summerBanner;
      case 'calcados':
        return shoesBanner;
      default:
        return '';
    }
  }

  return (
    <>
      <TopMenu />
      <Wrapper>
        <img src={selectBanner()} alt="banner" />
        <ProductsContainer>
          <ProductCard />
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
  padding: 50px 0;

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
