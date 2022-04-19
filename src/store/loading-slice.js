import { createSlice } from "@reduxjs/toolkit";
const initialLoadingState = { isLoading: true };

const loadingSlice = createSlice({
  name: "loading",
  initialState: initialLoadingState,
  reducers: {
    loading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const loadingActions = loadingSlice.actions;

export default loadingSlice;
