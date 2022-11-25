import styled from "styled-components";
import { device } from "../../common/breakpoints";

interface ImageSelectorProps {
  count: number;
}

export const Title = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 2px;
  margin-top: 10px;
  color: rgb(53, 167, 230);

  @media (${device.small}) {
    font-size: 1.8rem;
  }
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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${device.medium}) {
    flex-direction: row;
  }
`;

export const Thumbnail = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  img {
    width: 300px;
  }

  @media (${device.xLarge}) {
    display: block;
    width: auto;
  }
`;

export const ImageSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 0 15px 0;
  width: 100%;

  img {
    margin-right: 2px;
  }

  @media (${device.xLarge}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ImageSelector = styled.div<ImageSelectorProps>`
  display: flex;
  width: 352px;
  height: 105px;
  overflow-x: ${({ count }) => (count > 4 ? "scroll" : "auto")};
`;

export const SelectImage = styled.div`
  width: 84px;
  height: 84px;
  margin: 0 2px;
  cursor: pointer;
  border-radius: 4%;

  img {
    border-radius: 4%;
  }
`;

export const PriceBox = styled.div`
  text-align: center;
  margin-bottom: 20px;
  width: 100%;

  @media (${device.small}) {
    max-width: 400px;
  }

  @media (${device.medium}) {
    height: 100%;
    margin-top: auto;
    margin-bottom: auto;
    width: calc(100% - 1000px);
    min-width: 200px;
    margin-right: 5px;
  }

  @media (${device.large}) {
    min-width: calc(25% - 15px);
  }
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
