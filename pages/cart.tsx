import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  decrementProduct,
  incrementProduct,
  removeFromCart,
} from "../store/slices/cartSlice";

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartProduct = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #444;
  padding: 10px 0;

  a {
    font-size: 1.1rem;
    margin: 0 30px;
  }

  p {
    margin: 0 30px;
  }
`;

const Cart: NextPage = () => {
  const cart = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Cart</h1>
      <CartContainer>
        {cart.map((item) => (
          <CartProduct key={item.slug}>
            <Image
              src={`https:${item.images[0].fields.file.url}`}
              height="98"
              width="98"
              alt={item.images[0].fields.title}
            />
            <Link href={`/products/${item.slug}`}>{item.name}</Link>
            <p>${item.price}</p>
            <div style={{ display: "flex" }}>
              <button
                onClick={() => dispatch(incrementProduct({ slug: item.slug }))}
              >
                +
              </button>
              <p>Quantity: {item.quantity}</p>
              <button
                onClick={() => dispatch(decrementProduct({ slug: item.slug }))}
              >
                -
              </button>
            </div>
            <p>Total: ${item.quantity * item.price}</p>
            <button
              onClick={() => dispatch(removeFromCart({ slug: item.slug }))}
            >
              Remove
            </button>
          </CartProduct>
        ))}
      </CartContainer>
    </div>
  );
};

export default Cart;
