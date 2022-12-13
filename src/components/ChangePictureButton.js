import { useDispatch, useSelector } from "react-redux";
import Pictures from "../data/Pictures.js";
import {
  nextPicture,
  previousPicture,
} from "../features/changePictureSlice.js";
import { Icon } from "@iconify/react";
import styled from "styled-components";

export default function ChangePictureButton({ next }) {
  const dispatch = useDispatch();
  const currentPicture = useSelector(
    (state) => state.changePicture.initialIndex
  );
  const pictureArrayLength = Pictures.length;
  return (
    <ArrowButton
      onClick={() =>
        dispatch((next ? nextPicture : previousPicture)(currentPicture))
      }
      disabled={
        currentPicture ===
        (next
          ? pictureArrayLength - 1
          : pictureArrayLength - pictureArrayLength)
      }
    >
      <Arrow
        icon={next ? "akar-icons:chevron-right" : "akar-icons:chevron-left"}
      />
    </ArrowButton>
  );
}
const ArrowButton = styled.button`
  background: none;
  border: none;
`;

const Arrow = styled(Icon)`
  height: 30px;
  width: 30px;
  &:active {
    transform: scale(0.9);
  }
`;
