import React from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toggleLikeButton } from "../features/loadMoreRestaurantsSlice";

export default function LikeButton({ restaurantsId }) {
  const dispatch = useDispatch();
  const likeStatus = useSelector(
    (state) => state.toggleLike.statusListOfLikes[restaurantsId]
  );

  return (
    <button
      aria-label={`click to ${likeStatus ? "unlike" : "like"}`}
      onClick={() => dispatch(toggleLikeButton(restaurantsId))}
    >
      <StyledButtonIcon
        icon="akar-icons:heart"
        color={`${likeStatus ? "red" : "black"}`}
      />
    </button>
  );
}

const StyledButtonIcon = styled(Icon)`
  height: 30px;
  width: 30px;
  &:active {
    transform: scale(0.9);
  }
`;
