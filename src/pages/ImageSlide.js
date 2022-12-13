import { useSelector } from "react-redux";
import ChangePictureButton from "../components/ChangePictureButton";
import Pictures from "../data/Pictures";
import styled from "styled-components";

export default function ImageSlide() {
  const currentPicture = useSelector(
    (state) => state.changePicture.initialIndex
  );

  return (
    <main>
      <h1>Image Slide Show</h1>
      <Wrapper>
        <ChangePictureButton />
        <img
          alt={`${Pictures[currentPicture].name}`}
          src={`${Pictures[currentPicture].image}`}
          width={200}
          height={300}
        />
        <ChangePictureButton next="next" />
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;
