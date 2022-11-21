import styled from "styled-components";

export const FeaturedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ProductContainer = styled.div`
  width: calc(20% - 6px);
  margin: 3px;
  position: relative;

  &:hover {
    color: rgb(84, 145, 220);
  }
`;

export const Details = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  left: 0px;
  bottom: 0px;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
`;

export const Title = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 2px;
`;

export const SubTitle = styled.span`
  font-size: 0.7rem;
`;
