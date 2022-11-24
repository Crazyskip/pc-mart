import styled from "styled-components";

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(53, 167, 230);
  border-radius: 5px;
  width: 55%;
`;

const Panel = styled.div`
  background-color: rgb(49, 106, 144);
  display: flex;
  align-items: center;
`;

export const TopPanel = styled(Panel)`
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 10px;
`;

export const BottomPanel = styled(Panel)`
  font-size: 0.9rem;
  padding: 5px 10px;

  input {
    margin-right: 8px;
  }
`;

export const FunctionButton = styled.a`
  background-color: #555;
  border: none;
  font-size: 0.9rem;
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #666;
  }
`;

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
`;

export const OrderProduct = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  margin: 0 15px;
  border-bottom: 1px solid #777;

  div {
    margin-left: 10px;
    padding-right: 10px;
    width: 100%;
    font-size: 0.9rem;
  }

  span {
    margin-right: 10px;
    font-weight: 700;
  }
`;

export const Details = styled.table`
  text-align: right;
  margin: 10px 15px;

  th {
    font-weight: 400;
  }

  td {
    padding-left: 10px;
  }

  tr td:last-child {
    width: 1%;
    white-space: nowrap;
  }

  tr:last-child {
    th,
    td {
      font-weight: 700;
    }
  }
`;
