import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postsApi } from "../services/posts";
import loadMoreTitlesReducer from "../features/loadMoreTitlesSlice";
import toggleLikeButtonReducer from "../features/toggleLikeButtonSlice";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    loadMoreTitles: loadMoreTitlesReducer,
    toggleLike: toggleLikeButtonReducer,
  },

  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(postsApi.middleware),
});

setupListeners(store.dispatch);
