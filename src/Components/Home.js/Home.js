/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BottomMenu from '../../Common/BottomMenu';
import SearchBar from '../../Common/SearchBar';
import TopMenu from '../../Common/TopBar/TopMenu';
import Banner from './Banner';
import ProductCard from './ProductCard';

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [maleProducts, setMaleProducts] = useState([]);
  const [femaleProducts, setFemaleProducts] = useState([]);
  const [shoes, setShoes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const products = await axios.get(
          'http://localhost:5000/products'
        );
        const maleStuff = await axios.get(
          'http://localhost:5000/search/?keyword=masculino'
        );
        const femaleStuff = await axios.get(
          'http://localhost:5000/search/?keyword=feminino'
        );
        const searchedShoes = await axios.get(
          'http://localhost:5000/search/?keyword=calcados'
        );
        setMaleProducts(maleStuff.data.slice(0, 7));
        setFemaleProducts(femaleStuff.data.slice(0, 7));
        setShoes(searchedShoes.data.slice(-7));
        setAllProducts(products.data);
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
            <span onClick={() => navigate('/section/feminino')}>veja mais</span>
          </header>
          <div>
            {femaleProducts.map(
              ({ name, price, image, _id, inWishlist }, index) => (
                <ProductCard
                  name={name}
                  price={price}
                  image={image}
                  key={index}
                  inWishlist={inWishlist}
                  id={_id}
                />
              )
            )}
            <ion-icon
              name="chevron-forward-circle-sharp"
              onClick={() => navigate('/section/feminino')}
            />
          </div>
        </Category>
        <Category>
          <header>
            <h2>Produtos Masculinos</h2>
            <span onClick={() => navigate('/section/masculino')}>
              veja mais
            </span>
          </header>
          <div>
            {maleProducts.map(
              ({ name, price, image, _id, inWishlist }, index) => (
                <ProductCard
                  name={name}
                  price={price}
                  image={image}
                  key={index}
                  inWishlist={inWishlist}
                  id={_id}
                />
              )
            )}
            <ion-icon
              name="chevron-forward-circle-sharp"
              onClick={() => navigate('/section/masculino')}
            />
          </div>
        </Category>
        <Category>
          <header>
            <h2>Calçados</h2>
            <span onClick={() => navigate('/section/calcados')}>veja mais</span>
          </header>
          <div>
            {shoes.map(({ name, price, image, _id, inWishlist }, index) => (
              <ProductCard
                name={name}
                price={price}
                image={image}
                key={index}
                inWishlist={inWishlist}
                id={_id}
              />
            ))}
            <ion-icon
              name="chevron-forward-circle-sharp"
              onClick={() => navigate('/section/calcados')}
            />
          </div>
        </Category>
        <ProductsContainer>
          <h2>Todos os produtos</h2>
          <div>
            {allProducts.map(
              ({ name, price, image, _id, inWishlist }, index) => (
                <ProductCard
                  name={name}
                  price={price}
                  image={image}
                  key={index}
                  inWishlist={inWishlist}
                  id={_id}
                />
              )
            )}
          </div>
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
  padding: 20px 20px;
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
