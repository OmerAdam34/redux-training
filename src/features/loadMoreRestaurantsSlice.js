import { createSlice } from "@reduxjs/toolkit";

export const loadMoreRestaurantsSlice = createSlice({
  name: "loadMoreRestaurants",
  initialState: {
    value: 3,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incrementByAmount } = loadMoreRestaurantsSlice.actions;
export default loadMoreRestaurantsSlice.reducer;
