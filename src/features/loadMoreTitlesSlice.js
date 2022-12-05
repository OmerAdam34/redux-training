import { createSlice } from "@reduxjs/toolkit";

export const loadMoreTitlesSlice = createSlice({
  name: "loadMoreTitles",
  initialState: {
    value: 3,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incrementByAmount } = loadMoreTitlesSlice.actions;
export default loadMoreTitlesSlice.reducer;
