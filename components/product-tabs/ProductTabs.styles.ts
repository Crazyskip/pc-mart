import styled, { css } from "styled-components";
import { device } from "../../common/breakpoints";

interface TabPillProps {
  active?: boolean;
}

export const TabsContainer = styled.div`
  width: 100%;
  max-width: 992px;

  @media (${device.xLarge}) {
    width: 80%;
  }
`;

export const TabPills = styled.div`
  display: flex;
  width: 100%;
  margin: 0px;
  padding: 0px;

  @media (${device.medium}) {
    width: auto;
  }
`;

const activeTabPillStyles = css`
  background: rgb(88, 114, 131);
  ::before {
    position: absolute;
    content: "";
    background-color: #35a7e6;
    width: calc(100% + 2px);
    height: 5px;
    left: -1px;
    bottom: 0;
  }
`;

export const TabPill = styled.div<TabPillProps>`
  position: relative;
  padding: 14px 15px;
  border: 1px solid rgba(160, 174, 223, 0.34);
  background: rgb(54, 64, 71);
  cursor: pointer;
  font-weight: 700;
  text-align: center;
  font-size: 0.95rem;
  flex-grow: 1;

  &:hover {
    color: rgb(84, 145, 220);
  }

  ${({ active }) => active && activeTabPillStyles}

  @media (${device.small}) {
    font-size: 1rem;
    padding: 14px 30px;
  }

  @media (${device.medium}) {
    flex-grow: 0;
  }
`;

export const TabContainer = styled.div`
  border: 1px solid rgb(52, 78, 95);
  padding: 30px 15px;

  h2 {
    font-size: 2rem;
    font-weight: 500;
    margin: 15px 0;
  }

  hr {
    margin-bottom: 20px;
  }

  table {
    width: 100%;
    margin-bottom: 30px;
    font-size: 0.95rem;
    border-collapse: collapse;

    tr:nth-child(odd) {
      background-color: #141414;
    }

    td {
      padding: 0 10px;
    }

    td:first-child {
      font-weight: 700;
      width: 35%;
    }
  }
`;
