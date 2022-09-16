/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle, Reset } from '../../Common/globalStyle';
import SearchPage from '../SearchPage/SearchPage';
import ProductPage from '../ProductPage/ProductPage';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';

export default function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
