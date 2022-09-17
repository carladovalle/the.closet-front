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
import UserContext from '../../Contexts/UserContext';
import SectionPage from '../Home.js/SectionPage';

export default function App() {
  const [productsList, setProductsList] = useState({});
  const [tokenInfo, setTokenInfo] = useState({});

  return (
    <SearchContext.Provider value={{ productsList, setProductsList }}>
      <UserContext.Provider value={{ tokenInfo, setTokenInfo }}>
        <Reset />
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/section/:category" element={<SectionPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/chart" element={<ChartPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </SearchContext.Provider>
  );
}
