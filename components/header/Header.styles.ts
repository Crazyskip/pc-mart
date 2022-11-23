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

export const SearchForm = styled.form`
  display: flex;
  width: 100%;
  order: 3;
  margin: 8px 0px;

  @media (${device.large}) {
    width: 50%;
    order: 2;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  background-color: rgb(235, 235, 235);
  min-height: 35px;
  color: rgb(90, 90, 90);
  line-height: 35px;
  padding: 0 10px;
  border: none;
  font-size: 1rem;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  background-color: rgb(53, 122, 183);
  min-height: 35px;
  width: 45px;
  border: none;
  cursor: pointer;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
`;

export const CartContainer = styled.div`
  display: flex;
  order: 2;

  svg {
    &:hover {
      color: rgb(84, 145, 220);
    }
  }
`;

export const Details = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  text-align: right;
  padding-right: 10px;
  letter-spacing: 0.3px;

  a {
    display: block;
    margin-bottom: 2px;

    &:hover {
      color: rgb(84, 145, 220);
    }
  }

  a:nth-child(2) {
    color: rgb(84, 145, 220);

    &:hover {
      color: rgb(53, 122, 183);
    }
  }
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

    a,
    div {
      display: inline-block;
      padding: 0 20px;
      cursor: pointer;

      &:hover {
        background-color: rgb(9, 44, 72);
      }
    }
  }
`;
