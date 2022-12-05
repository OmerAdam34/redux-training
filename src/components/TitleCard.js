import React from "react";
import TitleButton from "./TitleButton";
import { useState } from "react";
import TitleModal from "./TitleModal";

export default function TitleCard({ titleDetails }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div>
        <section>{titleDetails.title}</section>
      </div>
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
