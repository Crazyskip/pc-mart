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
    },
    removeFromCart: (state, action: PayloadAction<{ slug: string }>) => {
      const updatedCart = state.items.filter(
        (item) => item.slug !== action.payload.slug
      );
      state.items = updatedCart;
    },
    clearCart: (state) => {
      state.items = [];
    },
    incrementProduct: (state, action: PayloadAction<{ slug: string }>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.slug === action.payload.slug
      );
      if (state.items[itemIndex].quantity >= 1) {
        state.items[itemIndex].quantity += 1;
      }
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
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementProduct,
  decrementProduct,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
