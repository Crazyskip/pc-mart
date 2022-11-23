import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";
import ShoppingCart from "../components/shopping-cart/ShoppingCart.component";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { clearCart } from "../store/slices/cartSlice";

const Cart: NextPage = () => {
  const cart = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const total = cart.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );

  const gst = total / 11;

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length ? (
        <>
          <ShoppingCart cart={cart} />
          <Container>
            <div>
              <FunctionButton onClick={() => dispatch(clearCart())}>
                Clear Cart
              </FunctionButton>
              <FunctionButton>Add to Wishlist</FunctionButton>
            </div>
            <div>
              <CheckoutContainer>
                Total:
                <Total>${total}</Total>
                <p>(Inc GST: ${gst.toFixed(0)})</p>
                <Link href="/" legacyBehavior passHref>
                  <CheckoutButton>Checkout</CheckoutButton>
                </Link>
              </CheckoutContainer>
            </div>
          </Container>
        </>
      ) : (
        <p>Your Shopping Cart is empty.</p>
      )}
    </div>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const CheckoutContainer = styled.div`
  font-size: 1.8rem;
  margin: 0 20px;

  p {
    font-size: 1rem;
    text-align: right;
    margin: 5px 0;
  }
`;

const Total = styled.span`
  display: inline-block;
  font-size: 2rem;
  margin-left: 20px;
`;

const CheckoutButton = styled.a`
  display: block;
  color: #fff;
  width: 100%;
  padding: 8px;
  margin-top: 20px;
  font-weight: 700;
  font-size: 1.2rem;
  text-align: center;
  border-radius: 4px;
  border: none;
  background: linear-gradient(rgb(111, 210, 28) 0px, rgb(98, 183, 27) 100%);
`;

const FunctionButton = styled.button`
  background-color: rgb(88, 114, 131);
  border: none;
  font-size: 0.9rem;
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgb(74, 94, 108);
  }
`;

export default Cart;
