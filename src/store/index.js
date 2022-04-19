import { configureStore } from "@reduxjs/toolkit";

import priceSlice from "./price-slice";

const store = configureStore({
  reducer: { price: priceSlice.reducer },
});

export default store;
