import { configureStore } from "@reduxjs/toolkit";
import brandSlice from "./brand-slice";
import cartSlice from "./cart-slice";
import loadingSlice from "./loading-slice";

import priceSlice from "./price-slice";

const store = configureStore({
  reducer: {
    price: priceSlice.reducer,
    brand: brandSlice.reducer,
    loading: loadingSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
