import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "app/store";

interface CartItem {
  price: number; // in cents
  quantity: number;
  name: string;
}
interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add_item: (state, action: PayloadAction<CartItem>) => {
      const alreadyInCart = state.items.filter(
        (item) => item.name === action.payload.name
      );
      if (alreadyInCart && alreadyInCart[0]) {
        alreadyInCart[0].quantity += 1;
      } else {
        state.items.push(action.payload);
      }
    },
    remove_item: (state, action: PayloadAction<string>) => {
      const filtered = state.items.filter(
        (item) => item.name !== action.payload
      );
      state.items = filtered;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add_item, remove_item } = cartSlice.actions;

export const selectCartTotal = (state: RootState) => {
  const totalPerItem = state.cart.items.map(
    (item) => item.price * item.quantity
  );
  return totalPerItem.reduce((previous, current) => previous + current);
};

export const cartItems = (state: RootState) => {
  return state.cart.items;
};

export const CartHasItems = (state: RootState) => {
  return state.cart.items.length > 0;
};

export default cartSlice.reducer;
