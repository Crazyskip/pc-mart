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
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { hydrate } from "../../store/slices/cartSlice";

const Header = () => {
  const cart = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const cartValue = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const cartString = localStorage.getItem("cart");
    if (cartString) {
      dispatch(hydrate(JSON.parse(cartString)));
    }
  }, [dispatch]);

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
