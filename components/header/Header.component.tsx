import Link from "next/link";
import {
  CartPlaceholder,
  CategoriesContainer,
  HeaderContainer,
  Logo,
  MainNav,
  NavigationContainer,
  NavLeft,
  NavRight,
  SearchBarPlaceholder,
  TopHeader,
} from "./Header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <TopHeader>
        <Logo>PC Mart</Logo>
        <SearchBarPlaceholder>Search...</SearchBarPlaceholder>
        <CartPlaceholder>0 Items | $0</CartPlaceholder>
      </TopHeader>
      <NavigationContainer>
        <CategoriesContainer>Categories</CategoriesContainer>
        <MainNav>
          <NavLeft>
            <li>
              <Link href="/">New Products</Link>
            </li>
            <li>
              <Link href="/">Bundles</Link>
            </li>
            <li>
              <Link href="/">Sale</Link>
            </li>
          </NavLeft>
          <NavRight>
            <li>
              <Link href="/">Wishlist</Link>
            </li>
            <li>
              <Link href="/">Login</Link>
            </li>
          </NavRight>
        </MainNav>
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
