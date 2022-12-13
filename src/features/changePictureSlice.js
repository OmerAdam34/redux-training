import { createSlice } from "@reduxjs/toolkit";

export const changePictureSlice = createSlice({
  name: "changePicture",
  initialState: { initialIndex: 0 },
  reducers: {
    nextPicture: (state, action) => {
      const currentPicture = action.payload;
      state.initialIndex = currentPicture + 1;
    },
    previousPicture: (state, action) => {
      const currentPicture = action.payload;
      state.initialIndex = currentPicture - 1;
    },
  },
});

export const { nextPicture, previousPicture } = changePictureSlice.actions;
export default changePictureSlice.reducer;
