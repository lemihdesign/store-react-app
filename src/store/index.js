import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filter-slice";
import cartSlice from "./cart-slice";
import loadingSlice from "./loading-slice";

import priceSlice from "./price-slice";

const store = configureStore({
  reducer: {
    price: priceSlice.reducer,
    filter: filterSlice.reducer,
    loading: loadingSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
