/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
// import axios from 'axios';
import axios from 'axios';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BottomMenu from '../../Common/BottomMenu';
import HeaderMenu from '../../Common/TopBar/TopMenu';
import ProductResults from './ProductResults';
import searchGif from '../../assets/search.gif';

export default function SearchPage() {
  const [search, setSearch] = useState('');
  const [productsList, setProductsList] = useState([]);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  async function searchItem(e) {
    e.preventDefault();
    if (!search) {
      alert('Por gentileza, preencha o campo de pesquisa para efetuar a busca');
      return;
    }
    const query = search.replace(' ', '+');

    try {
      const filteredProducts = await axios.get(
        `http://localhost:5000/search/?keyword=${query}`
      );
      setProductsList(filteredProducts.data);
    } catch (error) {
      alert(error.response.data);
    }
  }

  return (
    <>
      <HeaderMenu />
      <Wrapper>
        <div>
          <h1>Busca</h1>
          <span>
            Pesquise, no campo abaixo, o item que deseja. Pode ser o nome, tipo
            do produto ou alguma especificação.
          </span>
        </div>
        <form onSubmit={searchItem}>
          <ion-icon name="search-outline" />
          <input
            type="search"
            placeholder="Pesquise o produto dos sonhos"
            value={search}
            onChange={handleSearch}
          />
        </form>
        <section>
          {productsList.length > 0 ? (
            productsList.map(({ name }, index) => (
              <ProductResults key={index} name={name} />
            ))
          ) : (
            <>
              <span>
                Infelizmente, não há produtos para mostrar, ainda. Por
                gentileza, faça uma nova busca
              </span>
              {/* <ion-icon name="sad-outline" /> */}
              <img src={searchGif} alt="gif" width="130px" />
            </>
          )}
        </section>
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
  padding: 65px 20px;

  h1 {
    margin-bottom: 10px;
    font-size: 28px;
    font-weight: 500;
    color: #5b3e40;
  }

  span {
    margin-top: 10px;
    font-size: 12px;
    color: #d4a373;
  }

  form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-top: 30px;

    input {
      width: 46%;
      height: 30px;
      border: 1px solid #5b3e40;
      border-radius: 50px;
      outline: none;
      transition: all 0.6s;
      padding-left: 13px;

      &:focus {
        width: 90%;
      }
    }
  }

  section {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    span {
      font-size: 22px;
      text-align: center;
      color: #c3c3c3;
    }
  }
`;
