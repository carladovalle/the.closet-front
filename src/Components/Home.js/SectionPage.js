/* eslint-disable import/extensions */
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
import { useEffect, useState } from 'react';
import axios from 'axios';
import BottomMenu from '../../Common/BottomMenu';
import TopMenu from '../../Common/TopBar/TopMenu';
import femaleBanner from '../../assets/banner-fem.png';
import maleBanner from '../../assets/banner-masc.png';
import winterBanner from '../../assets/banner-winter.png';
import summerBanner from '../../assets/banner-summer.png';
import shoesBanner from '../../assets/banner-shoes.png';
import ProductCard from './ProductCard.js';

export default function SectionPage() {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

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

  useEffect(() => {
    async function fetchData() {
      try {
        const products = await axios.get(
          `https://back-projeto14-the-closet.herokuapp.com/search/?keyword=${category}`
        );
        setFilteredProducts(products.data);
      } catch (error) {
        alert(error.response.data);
      }
    }
    fetchData();
  }, [category]);

  return (
    <>
      <TopMenu />
      <Wrapper>
        <img src={selectBanner()} alt="banner" />
        <div>
          {filteredProducts.map(
            ({ name, price, image, _id, inWishlist }, index) => (
              <ProductCard
                key={index}
                name={name}
                price={price}
                image={image}
                id={_id}
                inWishlist={inWishlist}
              />
            )
          )}
        </div>
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

  > img {
    margin-bottom: 40px;
    width: 100%;
    height: 50vw;
    object-fit: cover;
  }

  h2 {
    font-size: 20px;
    color: #543827;
    font-weight: 500;
    margin: 20px 0 20px 20px;
    font-style: oblique;
  }

  div {
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
