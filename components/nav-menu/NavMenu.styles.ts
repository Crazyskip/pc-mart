import styled from "styled-components";

export const NavMenuContainer = styled.nav`
  width: 209px;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      background-color: rgb(52, 78, 95);
      border-bottom: 1px solid rgba(160, 174, 223, 0.34);

      a {
        display: inline-block;
        padding: 5px 12px;
        font-size: 14px;
        width: 100%;

        &:hover {
          color: rgb(84, 145, 220);
          background-color: #0e2447;
        }
      }
    }
  }
`;
