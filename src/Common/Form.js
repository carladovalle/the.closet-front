/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

export default function Form({ children, ...otherProps }) {
  return <FormStyle {...otherProps}>{children}</FormStyle>;
}

const FormStyle = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 10%;
    gap: 8px;
    font-size: 13px;

    input {
      width: 100%;
      margin-bottom: 15px;
      border: none;
      border-bottom: 1px solid #c3c3c3;
      background-color: inherit;
      padding: 5px;
    }
  }

  button {
    width: 40%;
    height: 40px;
    border: none;
    border-radius: 11px;
    background-image: linear-gradient(#d4a373 60%, #fefae0);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    margin: 10px 0;
    color: #fefae0;
    font-size: 16px;
    font-weight: 700;
  }
`;
