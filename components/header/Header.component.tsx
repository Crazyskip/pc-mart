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
              <Link href="/">
                <a>New Products</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Bundles</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Sale</a>
              </Link>
            </li>
          </NavLeft>
          <NavRight>
            <li>
              <Link href="/">
                <a>Wishlist</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Login</a>
              </Link>
            </li>
          </NavRight>
        </MainNav>
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
