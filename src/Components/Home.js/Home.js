/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import BottomMenu from '../../Common/BottomMenu';
import SearchBar from '../../Common/SearchBar';
import TopMenu from '../../Common/TopBar/TopMenu';
import Banner from './Banner';
import ProductCard from './ProductCard';

export default function Home() {
  const [maleProducts, setMaleProducts] = useState([]);
  const [femaleProducts, setFemaleProducts] = useState([]);
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const maleStuff = await axios.get(
          'https://back-projeto14-the-closet.herokuapp.com/search/?keyword=masculino'
        );
        const femaleStuff = await axios.get(
          'https://back-projeto14-the-closet.herokuapp.com/search/?keyword=feminino'
        );
        const searchedShoes = await axios.get(
          'https://back-projeto14-the-closet.herokuapp.com/search/?keyword=calcados'
        );
        setMaleProducts(maleStuff.data.slice(0, 7));
        setFemaleProducts(femaleStuff.data.slice(0, 7));
        setShoes(searchedShoes.data.slice(-7));
      } catch (error) {
        alert(error.response.data);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <TopMenu />
      <Wrapper>
        <Banner />
        <SearchBar />
        <Category>
          <header>
            <h2>Produtos Femininos</h2>
            <span>veja mais</span>
          </header>
          <div>
            {femaleProducts.map(({ name, price, image }, index) => (
              <ProductCard
                name={name}
                price={price}
                image={image}
                key={index}
              />
            ))}
            <ion-icon name="chevron-forward-circle-sharp" />
          </div>
        </Category>
        <Category>
          <header>
            <h2>Produtos Masculinos</h2>
            <span>veja mais</span>
          </header>
          <div>
            {maleProducts.map(({ name, price, image }, index) => (
              <ProductCard
                name={name}
                price={price}
                image={image}
                key={index}
              />
            ))}
            <ion-icon name="chevron-forward-circle-sharp" />
          </div>
        </Category>
        <Category>
          <header>
            <h2>Calçados</h2>
            <span>veja mais</span>
          </header>
          <div>
            {shoes.map(({ name, price, image }, index) => (
              <ProductCard
                name={name}
                price={price}
                image={image}
                key={index}
              />
            ))}
            <ion-icon name="chevron-forward-circle-sharp" />
          </div>
        </Category>
        <ProductsContainer>
          <h2>Todos os produtos</h2>
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

  h2 {
    font-size: 17px;
    font-weight: 500;
    color: #5b3e40;
    margin-bottom: 10px;
  }
`;

const ProductsContainer = styled.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Category = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;

  > div {
    display: flex;
    align-items: center;
    overflow-x: auto;
    gap: 15px;
    padding: 0 20px;
    margin-bottom: 30px;

    ion-icon {
      font-size: 36px;
      flex: none;
      color: rgba(0, 0, 0, 0.3);
    }

    ::-webkit-scrollbar {
      display: none;
    }
  }

  header {
    display: flex;
    justify-content: space-between;

    padding: 0 20px;

    span {
      font-size: 12px;
      font-weight: 500;
      text-decoration: underline;
    }
  }
`;
