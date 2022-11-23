import styled from "styled-components";

interface TableHeaderProps {
  align?: "left" | "center" | "right";
  w?: string;
}

interface TableCellProps {
  align?: "left" | "center" | "right";
}

export const CartTable = styled.table`
  width: 100%;
  border: none;
  border-bottom: 2px #1888c6 solid;
  border-collapse: collapse;

  tr:nth-child(n + 2) {
    border-top: 1px rgba(115, 133, 145, 0.2) solid;
  }
`;

export const TableHeader = styled.th<TableHeaderProps>`
  text-align: ${({ align }) => align || "center"};
  width: ${({ w }) => w || "auto"};
  font-size: 1.2rem;
  font-weight: 500;
  color: rgb(84, 145, 220);
  padding-bottom: 10px;
  border-bottom: 2px #1888c6 solid;
`;

export const TableCell = styled.td<TableCellProps>`
  text-align: ${({ align }) => align || "center"};
`;

export const ProductCell = styled.td`
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  padding: 10px 0;

  a {
    padding-right: 25px;
    padding-left: 10px;
    font-weight: 700;
    color: rgb(53, 122, 183);

    &:hover {
      color: rgb(84, 145, 220);
    }
  }
`;

export const StockCell = styled(TableCell)`
  color: #6ecb00;
  font-size: 0.95rem;
`;

export const PriceCell = styled(TableCell)`
  letter-spacing: 1px;
`;

export const ClearCell = styled(TableCell)`
  color: rgb(200, 200, 200);

  svg {
    cursor: pointer;
    margin-bottom: 2px;
  }
`;

export const QuantityInput = styled.input`
  border: 1px solid #ddd;
  width: 36px;
  padding: 0 10px;
  height: 32px;
  margin: 0 8px 5px;
  border-radius: 3px;
  text-align: center;
  color: #000;
  background-color: #fff;
`;
