/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle, Reset } from '../../Common/globalStyle';
import ChartPage from '../ChartPage.js/ChartPage';
import SearchPage from '../SearchPage/SearchPage';
import ProductPage from '../ProductPage/ProductPage';
import CheckoutPage from '../Checkout/CheckoutPage';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
import SearchContext from '../../Contexts/SearchContext';
import TokenContext from '../../Contexts/TokenContext';
import Home from '../Home.js/Home';
import SectionPage from '../Home.js/SectionPage';

export default function App() {
  const [productsList, setProductsList] = useState({});
  const [token, setToken] = useState('');

  return (
    <SearchContext.Provider value={{ productsList, setProductsList }}>
      <TokenContext.Provider value={{ token, setToken }}>
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
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </BrowserRouter>
      </TokenContext.Provider>
    </SearchContext.Provider>
  );
}
