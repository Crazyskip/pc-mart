import type { NextPage } from "next";
import ShoppingCart from "../components/shopping-cart/ShoppingCart.component";
import { useAppSelector } from "../store/hooks";

const Cart: NextPage = () => {
  const cart = useAppSelector((state) => state.cart.items);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length ? (
        <ShoppingCart cart={cart} />
      ) : (
        <p>Your Shopping Cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
