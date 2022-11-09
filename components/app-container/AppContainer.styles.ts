import styled from "styled-components";
import { device } from "../../common/breakpoints";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1500px;
  font-family: "Open Sans", sans-serif;

  @media (${device.xLarge}) {
    width: 95%;
  }

  @media (${device.xxLarge}) {
    width: 85%;
  }
`;
