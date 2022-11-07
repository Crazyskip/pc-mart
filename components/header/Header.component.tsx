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
import { useAppSelector, useAppDispatch } from "../../store/hooks";

const Header = () => {
  const cart = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const cartValue = cart.reduce((acc, item) => acc + item.price, 0);

  console.log(cart);

  return (
    <HeaderContainer>
      <TopHeader>
        <Link href="/">
          <Logo>PC Mart</Logo>
        </Link>
        <SearchBarPlaceholder>Search...</SearchBarPlaceholder>
        <CartPlaceholder>
          {cart.length} Items | ${cartValue}
        </CartPlaceholder>
      </TopHeader>
      <NavigationContainer>
        <CategoriesContainer>Categories</CategoriesContainer>
        <MainNav>
          <NavLeft>
            <li>
              <Link href="/new-products">New Products</Link>
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
