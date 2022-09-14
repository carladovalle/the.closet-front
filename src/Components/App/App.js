/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle, Reset } from '../../Common/globalStyle';
import ToggleMenu from '../Menus/ToggleMenu';
import SignUp from '../SignUp/SignUp';

export default function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/menu" element={<ToggleMenu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
