/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { GlobalStyle, Reset } from '../../Common/globalStyle';
import ChartPage from '../ChartPage.js/ChartPage';
import SearchPage from '../SearchPage/SearchPage';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
import SearchContext from '../../Contexts/SearchContext';
import Home from '../Home.js/Home';

export default function App() {
  const [productsList, setProductsList] = useState({});

  return (
    <SearchContext.Provider value={{ productsList, setProductsList }}>
      <Reset />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/chart" element={<ChartPage />} />
        </Routes>
      </BrowserRouter>
    </SearchContext.Provider>
  );
}
