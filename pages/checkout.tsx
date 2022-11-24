import CheckoutOrder from "../components/checkout-order/CheckoutOrder.component";
import { useAppSelector } from "../store/hooks";

const Checkout = () => {
  const cart = useAppSelector((state) => state.cart.items);
  return (
    <div>
      <h1>Checkout</h1>
      <hr />
      <CheckoutOrder cart={cart} />
    </div>
  );
};

export default Checkout;
