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
import { useAppSelector } from "../../store/hooks";

const Header = () => {
  const cart = useAppSelector((state) => state.cart.items);

  const cartValue = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  console.log(cart);

  return (
    <HeaderContainer>
      <TopHeader>
        <Link href="/">
          <Logo>PC Mart</Logo>
        </Link>
        <SearchBarPlaceholder>Search...</SearchBarPlaceholder>
        <Link href="/cart" passHref legacyBehavior>
          <CartPlaceholder>
            {cartItemCount} Items | ${cartValue}
          </CartPlaceholder>
        </Link>
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
