import styled from "styled-components";
import { device } from "../../common/breakpoints";

export const SubCategoryContainer = styled.div`
  width: calc(50% - 30px);
  margin: 10px 15px;
  color: rgb(53, 122, 183);
  cursor: pointer;

  &:hover {
    color: rgb(84, 145, 220);
  }

  @media (${device.small}) {
    width: calc(33.33333% - 30px);
  }

  @media (${device.large}) {
    width: calc(25% - 30px);
  }

  @media (${device.xLarge}) {
    width: calc(20% - 30px);
  }
`;

export const Title = styled.a`
  display: block;
  text-align: center;
  font-size: 1rem;
  margin: 10px 0;
`;
