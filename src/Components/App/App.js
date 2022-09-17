/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle, Reset } from '../../Common/globalStyle';
import SearchPage from '../SearchPage/SearchPage';
import ProductPage from '../ProductPage/ProductPage';
import CheckoutPage from '../Checkout/CheckoutPage';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
import TokenContext from "../../Contexts/TokenContext";

export default function App() {

  const [token, setToken] = useState('');

  return (
    <>
    <TokenContext.Provider value={{token, setToken}}>
        <Reset />
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/product" element={<ProductPage token={token} />} />
            <Route path="/checkout" element={<CheckoutPage token={token} />} />
          </Routes>
        </BrowserRouter>
      </TokenContext.Provider>
    </>
  );
}
