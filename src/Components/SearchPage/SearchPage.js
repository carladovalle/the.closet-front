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
import { useContext } from 'react';
import styled from 'styled-components';
import BottomMenu from '../../Common/BottomMenu';
import HeaderMenu from '../../Common/TopBar/TopMenu';
import ProductResults from './ProductResults';
import searchGif from '../../assets/search.gif';
import SearchBar from '../../Common/SearchBar';
import SearchContext from '../../Contexts/SearchContext';

export default function SearchPage() {
  const { productsList } = useContext(SearchContext);

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
        <SearchBar />
        <section>
          {productsList.length > 0 ? (
            productsList.map(
              ({ name, price, image, _id, inWishlist }, index) => (
                <ProductResults
                  key={index}
                  name={name}
                  price={price}
                  image={image}
                  id={_id}
                  inWishlist={inWishlist}
                />
              )
            )
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
    display: block;
    margin-top: 10px;
    font-size: 12px;
    color: #d4a373;
    margin-bottom: 15px;
  }

  section {
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
