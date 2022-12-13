import React from "react";
import { useDispatch } from "react-redux";
import { incrementByAmount } from "../features/loadMoreRestaurantsSlice";

export default function LoadMoreRestaurantsButton() {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(incrementByAmount(2))}>
      More Restaurants
    </button>
  );
}
