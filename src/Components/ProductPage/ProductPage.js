import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import BottomMenu from '../../Common/BottomMenu';
import HeaderMenu from '../../Common/TopBar/TopMenu';

export default function Product() {

  const [product, setProduct] = useState([]);

  useEffect(() => {

    async function getProduct() {

      try {
        const { data } = await axios.get("http://localhost:5000/product");
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.log(error.response);
      }
    }

    getProduct();
    
  }, []);

  return (
    <>
        <HeaderMenu />
        <Wrapper>
            <div>
                <h2>{product.name}</h2>
                <h2>{product.price}</h2>
                <img src={product.image} />
                <h2>{product.description}</h2>
                <h2>{product.size}</h2>
                <h2>{product.color}</h2>
            </div>
        </Wrapper>
        <BottomMenu />
    </>
  );
}

const Wrapper = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 500;
    color: #d4a373;
  }
`;