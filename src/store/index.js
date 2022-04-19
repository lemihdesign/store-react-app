import { configureStore } from "@reduxjs/toolkit";
import brandSlice from "./brand-slice";
import loadingSlice from "./loading-slice";

import priceSlice from "./price-slice";

const store = configureStore({
  reducer: {
    price: priceSlice.reducer,
    brand: brandSlice.reducer,
    loading: loadingSlice.reducer,
  },
});

export default store;
