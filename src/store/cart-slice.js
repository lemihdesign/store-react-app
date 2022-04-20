import { createSlice } from "@reduxjs/toolkit";
const initialCartState = {
  cartIsShown: false,
  items: [],
  totalAmount: 0,
  shippingCost: 8,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    showCart(state, action) {
      state.cartIsShown = action.payload;
    },
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {},
    increaseTotalAmount(state, action) {
      state.totalAmount = state.totalAmount + action.payload;
    },
    decreaseTotalAmount(state, action) {
      state.totalAmount = state.totalAmount - action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
