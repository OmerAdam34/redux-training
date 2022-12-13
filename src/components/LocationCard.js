import React, { useState } from "react";
import LikeButton from "./LikeButton";
import LocationButton from "./LocationButton";
import LocationModal from "./LocationModal";

export default function LocationCard({ restaurantsDetails }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div>
        <h3>{restaurantsDetails.name}</h3>
      </div>
      <LikeButton restaurantsId={restaurantsDetails.id} />
      <div>
        <LocationButton handleOpen={() => setShowModal(true)} />
      </div>
      <LocationModal
        showModal={showModal}
        locationDetails={restaurantsDetails}
        handleClose={() => setShowModal(false)}
      />
    </>
  );
}
