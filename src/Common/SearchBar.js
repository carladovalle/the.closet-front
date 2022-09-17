/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SearchContext from '../Contexts/SearchContext';

export default function SearchBar() {
  const { setProductsList } = useContext(SearchContext);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  async function searchItem(e) {
    e.preventDefault();
    if (!search) {
      alert('Por gentileza, preencha o campo de pesquisa para efetuar a busca');
      return;
    }
    navigate('/search');
    setSearch('');
    const query = search.replace(' ', '+');

    try {
      const filteredProducts = await axios.get(
        `https://back-projeto14-the-closet.herokuapp.com/search/?keyword=${query}`
      );
      setProductsList(filteredProducts.data);
    } catch (error) {
      alert(error.response.data);
    }
  }

  return (
    <SearchLayout onSubmit={searchItem}>
      <ion-icon name="search-outline" />
      <input
        type="search"
        placeholder="Pesquise o produto dos sonhos"
        value={search}
        onChange={handleSearch}
      />
    </SearchLayout>
  );
}

const SearchLayout = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

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
`;
