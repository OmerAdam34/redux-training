import React from "react";

export default function TitleModal({ postsDetails, handleClose, showModal }) {
  if (!showModal) return null;
  return (
    <div style={{ border: "1px solid black" }}>
      <div>
        <span>{postsDetails.title}</span>
      </div>
      <div>
        <span>{postsDetails.userId}</span>
      </div>
      <div>
        <span>{postsDetails.body}</span>
      </div>
      <button onClick={handleClose}>close</button>
    </div>
  );
}
