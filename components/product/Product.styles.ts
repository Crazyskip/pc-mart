import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 12px 0;
  border-bottom: 1px solid rgba(115, 133, 145, 0.2);
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 65%;
  padding: 0 20px;

  a {
    font-size: 1.2rem;
    font-weight: 700;
    color: rgb(53, 122, 183);

    &:hover {
      color: rgb(84, 145, 220);
    }
  }

  p {
    margin: 5px 0;
    font-size: 0.95rem;
  }
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
  width: 175px;
`;

export const Price = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 2px;
`;

export const AddToCart = styled.button`
  display: block;
  color: #fff;
  width: 100%;
  padding: 12px;
  margin-bottom: 2px;
  font-weight: 700;
  font-size: 0.8rem;
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
  padding: 4px;
  font-size: 0.8rem;
  text-transform: uppercase;
  background: linear-gradient(rgb(35, 152, 216) 0px, rgb(33, 141, 200) 100%);
  width: 100%;
  font-weight: 700;
  border-radius: 4px;
  text-align: center;
`;
