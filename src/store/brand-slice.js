import { createSlice } from "@reduxjs/toolkit";
const initialBrandState = { brand: "Nike" };

const brandSlice = createSlice({
  name: "brand",
  initialState: initialBrandState,
  reducers: {
    changeBrand(state, action) {
      state.brand = action.payload;
    },
  },
});

export const brandActions = brandSlice.actions;
export default brandSlice;
