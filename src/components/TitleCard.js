import React from "react";
import TitleButton from "./TitleButton";
import { useState } from "react";
import TitleModal from "./TitleModal";
import LikeButton from "./LikeButton";

export default function TitleCard({ titleDetails }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div>
        <section>{titleDetails.title}</section>
      </div>
      <LikeButton postId={titleDetails.id} />
      <div>
        <TitleButton handleOpen={() => setShowModal(true)} />
      </div>
      <TitleModal
        showModal={showModal}
        postsDetails={titleDetails}
        handleClose={() => setShowModal(false)}
      />
    </>
  );
}
