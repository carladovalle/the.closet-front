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
          'https://back-projeto14-the-closet.herokuapp.com/products'
        );
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
            <h5>Produtos Femininos</h5>
            <span onClick={() => navigate('/section/feminino')}>veja mais</span>
          </header>
          <div>
            {femaleProducts.map(
              ({ name, price, image, _id, userWishlist }, index) => (
                <ProductCard
                  name={name}
                  price={price}
                  image={image}
                  key={index}
                  userWishlist={userWishlist}
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
            <h5>Produtos Masculinos</h5>
            <span onClick={() => navigate('/section/masculino')}>
              veja mais
            </span>
          </header>
          <div>
            {maleProducts.map(
              ({ name, price, image, _id, userWishlist }, index) => (
                <ProductCard
                  name={name}
                  price={price}
                  image={image}
                  key={index}
                  userWishlist={userWishlist}
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
            <h5>Calçados</h5>
            <span onClick={() => navigate('/section/calcados')}>veja mais</span>
          </header>
          <div>
            {shoes.map(({ name, price, image, _id, userWishlist }, index) => (
              <ProductCard
                name={name}
                price={price}
                image={image}
                key={index}
                userWishlist={userWishlist}
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
          <h5>Todos os produtos</h5>
          <div>
            {allProducts.map(
              ({ name, price, image, _id, userWishlist }, index) => (
                <ProductCard
                  name={name}
                  price={price}
                  image={image}
                  key={index}
                  id={_id}
                  userWishlist={userWishlist}
                />
              )
            )}
          </div>
        </ProductsContainer>
        <Footer>
          <h3>© 2022 the-closet.com</h3>
          <h3>THE CLOSET LTDA | CNPJ 99.999.999/0001-99</h3>
          <h3>Av. Driven, São Paulo</h3>
          <h3>
            Formas de pagamento aceitas: cartões de crédito (Visa, MasterCard,
            Elo e American Express) e Pix.
          </h3>
        </Footer>
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

  h5 {
    font-size: 17px;
    font-weight: 500;
    color: #5b3e40;
    margin-bottom: 10px;
  }
`;

const ProductsContainer = styled.div`
  width: 100%;
  padding: 20px 20px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    overflow-x: auto;
    gap: 15px;
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
    padding: 5px 20px;
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

const Footer = styled.section`
  width: 100%;
  height: 150px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid #706f6f;

  && {
    h3 {
      font-size: 10px;
      font-weight: 500;
      color: #5b3e40;
      margin-bottom: 15px;
      text-align: center;
    }
  }
`;
