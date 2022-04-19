import { createSlice } from "@reduxjs/toolkit";
const initialCartState = { cartIsShown: false };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    showCart(state, action) {
      state.cartIsShown = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
