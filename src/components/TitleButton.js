import React from "react";

export default function TitleButton({ handleOpen }) {
  return (
    <div>
      <button onClick={handleOpen}>Details</button>
    </div>
  );
}
