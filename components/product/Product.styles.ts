import styled from "styled-components";
import { device } from "../../common/breakpoints";

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: 12px 5px;
  border-bottom: 1px solid rgba(115, 133, 145, 0.2);

  img {
    width: 120px;
    height: auto;
  }

  @media (${device.small}) {
    flex-wrap: nowrap;
  }

  @media (${device.large}) {
    img {
      width: 150px;
      height: auto;
    }
  }
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% - 120px);
  padding-left: 20px;

  a {
    font-size: 1.1rem;
    font-weight: 700;
    color: rgb(53, 122, 183);

    &:hover {
      color: rgb(84, 145, 220);
    }
  }

  p {
    margin: 5px 0;
    font-size: 0.9rem;
  }

  @media (${device.small}) {
    max-width: 75%;
    padding: 0 20px;
  }

  @media (${device.large}) {
    a {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.95rem;
    }
  }
`;

export const PriceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (${device.small}) {
    flex-direction: column;
    width: 175px;
    height: 90%;
  }
`;

export const Price = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 30px;
  width: 100%;

  @media (${device.small}) {
    margin: 0;
    margin-bottom: 2px;
    text-align: center;
  }
`;

export const AddToCart = styled.button`
  display: block;
  color: #fff;
  width: 100%;
  max-width: 175px;
  min-width: 115px;
  height: 39px;
  margin: 0 5px;
  padding: 12px;
  font-weight: 700;
  font-size: 0.8rem;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 4px;
  border: none;
  background: linear-gradient(rgb(111, 210, 28) 0px, rgb(98, 183, 27) 100%);

  &:disabled {
    outline: none;
  }

  &:hover {
    background: linear-gradient(rgb(130, 229, 28) 0px, rgb(111, 210, 28) 100%);
  }

  svg {
    margin-right: 3px;
  }

  @media (${device.small}) {
    margin: 0;
    margin-bottom: 2px;
  }
`;

export const StockLabel = styled.div`
  padding: 12px 0;
  font-size: 0.8rem;
  text-transform: uppercase;
  background: linear-gradient(rgb(35, 152, 216) 0px, rgb(33, 141, 200) 100%);
  min-width: 80px;
  height: 39px;
  font-weight: 700;
  border-radius: 4px;
  text-align: center;

  @media (${device.small}) {
    padding: 4px;
    height: 25px;
    width: 100%;
    max-width: 175px;
    min-width: 150px;
  }
`;
