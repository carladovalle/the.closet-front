/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import { useRef } from 'react';
import styled from 'styled-components';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';

export default function Banner() {
  const carousel = useRef();

  function scrollLeft() {
    switch (carousel.current.scrollLeft) {
      case 0:
        break;
      case carousel.current.offsetWidth:
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
        break;
      case carousel.current.offsetWidth * 2:
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
        break;
      default:
        carousel.current.scrollLeft = 0;
        break;
    }
  }

  function scrollRight() {
    switch (carousel.current.scrollLeft) {
      case 0:
        carousel.current.scrollLeft += carousel.current.offsetWidth;
        break;
      case carousel.current.offsetWidth:
        carousel.current.scrollLeft += carousel.current.offsetWidth;
        break;
      case carousel.current.offsetWidth * 2:
        break;
      default:
        carousel.current.scrollLeft = 0;
        break;
    }
  }

  return (
    <Container>
      <BannerLayout ref={carousel}>
        <ion-icon name="chevron-back-circle" onClick={scrollLeft} />
        <img src={banner3} alt="banner-frete" />
        <img src={banner2} alt="banner-frete" />
        <img src={banner1} alt="banner-frete" />
        <ion-icon name="chevron-forward-circle" onClick={scrollRight} />
      </BannerLayout>
    </Container>
  );
}

const Container = styled.header`
  position: relative;
`;

const BannerLayout = styled.nav`
  width: 100%;
  height: 50vw;
  display: flex;
  align-items: center;
  overflow-x: auto;
  scroll-behavior: smooth;

  img {
    flex: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ion-icon:nth-of-type(1) {
    font-size: 30px;
    color: black;
    position: absolute;
    left: 10px;
    top: calc();
    opacity: 80%;
  }

  ion-icon:nth-of-type(2) {
    font-size: 30px;
    color: black;
    position: absolute;
    right: 10px;
    top: calc();
    opacity: 80%;
  }
`;
