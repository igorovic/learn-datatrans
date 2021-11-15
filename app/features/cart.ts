import { createSlice } from "@reduxjs/toolkit";
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
    add_item: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add_item } = cartSlice.actions;

export const selectCartTotal = (state: RootState) => {
  const totalPerItem = state.cart.items.map(
    (item) => item.price * item.quantity
  );
  return totalPerItem.reduce((previous, current) => previous + current);
};

export default cartSlice.reducer;
