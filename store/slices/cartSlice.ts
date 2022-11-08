import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TypeProductFields } from "../../common/content-types";

interface Product extends TypeProductFields {
  quantity: number;
}

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    hydrate: (state, action: PayloadAction<CartState>) => {
      return action.payload;
    },
    addToCart: (state, action: PayloadAction<TypeProductFields>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.slug === action.payload.slug
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      } else {
        const product: Product = { ...action.payload, quantity: 1 };
        state.items.push(product);
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action: PayloadAction<{ slug: string }>) => {
      const updatedCart = state.items.filter(
        (item) => item.slug !== action.payload.slug
      );
      state.items = updatedCart;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem("cart", JSON.stringify(state));
    },
    incrementProduct: (state, action: PayloadAction<{ slug: string }>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.slug === action.payload.slug
      );
      if (state.items[itemIndex].quantity >= 1) {
        state.items[itemIndex].quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    decrementProduct: (state, action: PayloadAction<{ slug: string }>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.slug === action.payload.slug
      );
      if (state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity -= 1;
      } else if (state.items[itemIndex].quantity === 1) {
        const updatedCart = state.items.filter(
          (item) => item.slug !== action.payload.slug
        );
        state.items = updatedCart;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const {
  hydrate,
  addToCart,
  removeFromCart,
  clearCart,
  incrementProduct,
  decrementProduct,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
