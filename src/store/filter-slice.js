import { createSlice } from "@reduxjs/toolkit";
const initialBrandState = { brand: "Nike", gender: "", color: "" };

const filterSlice = createSlice({
  name: "filter",
  initialState: initialBrandState,
  reducers: {
    changeBrand(state, action) {
      state.brand = action.payload;
    },
    changeGender(state, action) {
      state.gender = action.payload;
    },
    changeColor(state, action) {
      state.color = action.payload;
    },
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice;
