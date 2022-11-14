import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 700;
  font-size: 1.8rem;
  margin-bottom: 2px;
  margin-top: 10px;
  color: rgb(53, 167, 230);
`;

export const Model = styled.span`
  display: block;
  font-size: 0.95rem;

  a {
    color: rgb(53, 122, 183);

    &:hover {
      color: rgb(84, 145, 220);
    }
  }
`;

export const ImageSlider = styled.div`
  display: flex;
  margin: 25px 0;
  width: 100%;
  max-width: 78%;

  img {
    margin-right: 5px;
  }
`;

export const PriceBox = styled.div`
  height: 100%;
  margin-top: auto;
  margin-bottom: auto;
  width: calc(100% - 1000px);
  min-width: calc(20% - 15px);
  text-align: center;
  margin-right: 5px;
`;

export const Price = styled.div`
  font-size: 3.2rem;
  font-weight: 700;
`;

export const AddToCart = styled.button`
  display: block;
  color: #fff;
  width: 100%;
  padding: 18px 12px;
  margin-bottom: 3px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 4px;
  border: none;
  background: linear-gradient(rgb(111, 210, 28) 0px, rgb(98, 183, 27) 100%);

  &:hover {
    background: linear-gradient(rgb(130, 229, 28) 0px, rgb(111, 210, 28) 100%);
  }
`;

export const StockLabel = styled.div`
  padding: 6px;
  font-size: 0.9rem;
  text-transform: uppercase;
  background: linear-gradient(rgb(35, 152, 216) 0px, rgb(33, 141, 200) 100%);
  width: 100%;
  font-weight: 700;
  border-radius: 4px;
  text-align: center;
`;
