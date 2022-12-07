import React from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toggleLikeButton } from "../features/toggleLikeButtonSlice";

export default function LikeButton({ postId }) {
  const dispatch = useDispatch();
  const likeStatus = useSelector(
    (state) => state.toggleLike.statusListOfLikes[postId]
  );

  return (
    <StyledButton
      aria-label={`click to ${likeStatus ? "unlike" : "like"}`}
      onClick={() => dispatch(toggleLikeButton(postId))}
    >
      <StyledButtonIcon
        icon="akar-icons:heart"
        color={`${likeStatus ? "red" : "black"}`}
      />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background: none;
  border: none;
`;

const StyledButtonIcon = styled(Icon)`
  height: 30px;
  width: 30px;
  &:active {
    transform: scale(0.9);
  }
`;
