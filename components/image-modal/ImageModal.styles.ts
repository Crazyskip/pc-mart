import styled from "styled-components";
import { device } from "../../common/breakpoints";

export const ImageModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  color: rgb(204, 204, 204);
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  img {
    z-index: 999;
    width: 90%;
    height: auto;
  }

  @media (${device.large}) {
    img {
      width: auto;
      height: 90%;
    }
  }
`;

export const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(30, 30, 30, 0.9);
  z-index: 998;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
  cursor: pointer;
  padding: 20px 0;

  &:hover {
    color: rgb(255, 255, 255);
  }

  svg {
    width: 60px !important;
  }
`;

export const LeftArrow = styled(Arrow)`
  left: 10px;
`;

export const RightArrow = styled(Arrow)`
  right: 10px;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 999;

  svg {
    height: 32px;
    width: 32px !important;
  }

  &:hover {
    color: rgb(255, 255, 255);
  }
`;
