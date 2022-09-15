/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle, Reset } from '../../Common/globalStyle';
import SearchPage from '../SearchPage/SearchPage';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';

export default function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
