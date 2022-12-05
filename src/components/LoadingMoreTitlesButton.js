import { useDispatch } from "react-redux";
import { incrementByAmount } from "../features/loadMoreTitlesSlice";
import React from "react";

export default function LoadingMoreTitlesButton() {
  const dispatch = useDispatch();
  return (
    <button
      aria-label="click to load more"
      onClick={() => dispatch(incrementByAmount(2))}
    >
      Load more Buttons
    </button>
  );
}
