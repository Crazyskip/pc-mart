import styled from "styled-components";

export const SubCategoryContainer = styled.div`
  width: calc(20% - 30px);
  margin: 10px 15px;
  color: rgb(53, 122, 183);
  cursor: pointer;

  &:hover {
    color: rgb(84, 145, 220);
  }
`;

export const Title = styled.a`
  display: block;
  text-align: center;
  font-size: 1rem;
  margin: 10px 0;
`;
