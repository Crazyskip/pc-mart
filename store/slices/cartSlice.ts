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
    addItem: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
