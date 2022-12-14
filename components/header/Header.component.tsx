import Link from "next/link";
import {
  CartContainer,
  CartDetails,
  CategoriesContainer,
  HeaderContainer,
  Logo,
  MainNav,
  NavigationContainer,
  NavLeft,
  NavRight,
  SearchBar,
  SearchButton,
  SearchForm,
  TopHeader,
} from "./Header.styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import { hydrate } from "../../store/slices/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const cart = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { data: session } = useSession();

  const cartValue = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (searchInput === "") {
      router.push("/");
    } else {
      router.push({
        pathname: "/search",
        query: { query: searchInput },
      });
    }
  };

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
        <SearchForm onSubmit={handleSubmit}>
          <SearchBar
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={handleChange}
          />
          <SearchButton>
            <FontAwesomeIcon icon={faSearch} size="xl" />
          </SearchButton>
        </SearchForm>
        <CartContainer>
          <CartDetails>
            <Link href="/cart">
              {cartItemCount} ITEMS | ${cartValue}
            </Link>
            <Link href="/cart">View Cart / Checkout</Link>
          </CartDetails>
          <Link href="/cart">
            <FontAwesomeIcon icon={faCartShopping} size="2xl" />
          </Link>
        </CartContainer>
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
            {session ? (
              <li>
                <Link href="/">Profile</Link>
              </li>
            ) : null}
            <li>
              {session ? (
                <div onClick={() => signOut()}>Logout</div>
              ) : (
                <div onClick={() => signIn()}>Login</div>
              )}
            </li>
          </NavRight>
        </MainNav>
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
