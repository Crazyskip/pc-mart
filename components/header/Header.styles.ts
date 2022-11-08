import styled from "styled-components";
import { device } from "../../common/breakpoints";

export const HeaderContainer = styled.header``;

export const TopHeader = styled.div`
  min-height: 105px;
  padding: 10px 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(20, 20, 20);
`;

export const Logo = styled.h1`
  margin: 8px 0px;
  order: 1;
  line-height: 30px;
`;

export const SearchBarPlaceholder = styled.div`
  width: 100%;
  background-color: rgb(235, 235, 235);
  min-height: 35px;
  order: 3;
  margin: 8px 0px;

  color: rgb(130, 130, 130);
  line-height: 35px;
  padding: 0 10px;
  border-radius: 5px;

  @media (${device.large}) {
    width: 40%;
    order: 2;
  }
`;

export const CartPlaceholder = styled.a`
  display: inline-block;
  min-height: 35px;
  order: 2;
`;

export const NavigationContainer = styled.div`
  display: none;
  width: 100%;
  height: 40px;
  background-color: rgb(35, 65, 91);
  color: rgb(78, 167, 238);
  text-align: center;
  line-height: 40px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.75px;

  @media (${device.large}) {
    display: flex;
  }
`;

export const CategoriesContainer = styled.div`
  min-width: 209px;
  height: 100%;
  border-right: 1px solid rgba(160, 174, 223, 0.34);
`;

export const MainNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const NavLeft = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    border-right: 1px solid rgba(160, 174, 223, 0.34);

    a {
      display: inline-block;
      padding: 0 20px;

      &:hover {
        background-color: rgb(9, 44, 72);
      }
    }
  }
`;

export const NavRight = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    border-left: 1px solid rgba(160, 174, 223, 0.34);

    a {
      display: inline-block;
      padding: 0 20px;

      &:hover {
        background-color: rgb(9, 44, 72);
      }
    }
  }
`;
