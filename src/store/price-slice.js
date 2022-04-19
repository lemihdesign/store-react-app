import { createSlice } from "@reduxjs/toolkit";
const initialPriceState = { priceValue: 800 };

const priceSlice = createSlice({
  name: "price",
  initialState: initialPriceState,
  reducers: {
    changePrice(state, action) {
      state.priceValue = action.payload;
    },
  },
});

export const priceActions = priceSlice.actions;

export default priceSlice;
