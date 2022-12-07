import { createSlice } from "@reduxjs/toolkit";

export const toggleLikeButtonSlice = createSlice({
  name: "favoritePost",
  initialState: {
    statusListOfLikes: {},
  },
  reducers: {
    toggleLikeButton: (state, action) => {
      const id = action.payload;
      state.statusListOfLikes[id] = !state.statusListOfLikes[id];
    },
  },
});

export const { toggleLikeButton } = toggleLikeButtonSlice.actions;
export default toggleLikeButtonSlice.reducer;
